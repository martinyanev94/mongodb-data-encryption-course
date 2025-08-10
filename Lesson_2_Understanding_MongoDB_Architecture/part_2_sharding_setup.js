sh.enableSharding("shopDatabase");
sh.shardCollection("shopDatabase.users", { "user_id": 1 });
