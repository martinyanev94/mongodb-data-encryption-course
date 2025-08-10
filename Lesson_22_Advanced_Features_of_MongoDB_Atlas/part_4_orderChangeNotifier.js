const changeStream = db.orders.watch();
changeStream.on("change", (change) => {
    console.log("Order updated:", change);
    // Additional logic to notify users could be placed here
});
