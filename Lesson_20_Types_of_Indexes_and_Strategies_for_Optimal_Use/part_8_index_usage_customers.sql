SELECT * FROM sys.dm_db_index_usage_stats 
WHERE object_id = OBJECT_ID('Customers');
