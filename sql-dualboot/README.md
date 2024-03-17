# SQL Challenge

## Requirements
Docker version 24.0.7

### Runbook to use the db.

#### Automated way
1. Creates the Database, automatically.
```bash
./init_database.sh
```

2. Execute the desired queries
```mysql
SELECT a.Name, a.Employee_Number
FROM Agenttbl a
JOIN Orderstbl o ON a.Id = o.Agent_Id
ORDER BY o.Amount DESC
LIMIT 1;
```

#### Step by step
1. Create the MySQL database container
```bash
docker run --name my-mysql-container -v my-db-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
```

2. Creates the database, and the tables
```bash
docker exec -i my-mysql-container mysql -u root -pmypassword < ./sql/init.sql
```

3. Generates the indexes
```bash
docker exec -i my-mysql-container mysql -u root -pmypassword -D my_db_test < ./sql/indexes.sql
```

4. Fill the database's tables with the seeds
```bash
docker exec -i my-mysql-container mysql -u root -pmypassword  -D my_db_test < ./sql/seeds.sql
```

5. Execute the queries:

    1. Login into the database
    ```bash
    docker exec -ti my-mysql-container mysql -u root -pmypassword -D my_db_test
    ```

    2. Execute the queries, stored in the *queries.sql* file. e.g
    ```mysql
    SELECT a.Name, a.Employee_Number
    FROM Agenttbl a
    JOIN Orderstbl o ON a.Id = o.Agent_Id
    ORDER BY o.Amount DESC
    LIMIT 1;
    ```

