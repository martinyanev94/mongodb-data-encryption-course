sh.enableSharding("myDatabase");
sh.shardCollection("myDatabase.users", { "user_id": 1 });
