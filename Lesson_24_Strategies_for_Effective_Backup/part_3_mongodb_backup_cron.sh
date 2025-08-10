crontab -e
0 2 * * * /usr/bin/mongodump --uri="mongodb://username:password@host:port/dbname" --out /path/to/backup_$(date +\%F)
