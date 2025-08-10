async function createReservation(client, userEmail, nameOfListing, reservationDates) {
    const usersCollection = client.db("sample_airbnb").collection("users");
    const listingsAndReviewsCollection = client.db("sample_airbnb").collection("listingsAndReviews");

    const session = client.startSession();
    try {
        await session.withTransaction(async () => {
            const userUpdateResults = await usersCollection.updateOne(
                { email: userEmail },
                { $addToSet: { reservations: reservation } },
                { session }
            );
            
            const listingUpdateResults = await listingsAndReviewsCollection.updateOne(
                { name: nameOfListing },
                { $addToSet: { datesReserved: { $each: reservationDates } } },
                { session }
            );

            if (userUpdateResults.matchedCount === 0) throw new Error("User not found");
            if (listingUpdateResults.modifiedCount === 0) {
                throw new Error("Listing is already booked for selected dates.");
            }
        });
    } catch (error) {
        console.error("Transaction aborted due to an error: ", error);
    } finally {
        session.endSession();
    }
}
