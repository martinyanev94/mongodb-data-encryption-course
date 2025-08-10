composer require mongodb/mongodb
<?php
require 'vendor/autoload.php'; // Include Composer's autoloader

// Create a MongoDB client instance
$client = new MongoDB\Client("mongodb://user:password@localhost:27017/");

// Select a database and collection
$database = $client->selectDatabase('productions');
$collection = $database->selectCollection('movies');

// Query for a movie
$movie = $collection->findOne(['title' => '200 meters']);
print_r($movie);
?>
