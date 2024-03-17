#!/bin/bash

# Create a MySQL container
echo "Creating a MySQL container..."
docker run --name my-mysql-container -v my-db-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=mypassword -d mysql

# Wait for the MySQL container to start.
echo "Waiting for the MySQL container to start..."
sleep 10

# Create the database and tables.
echo "Creating the database and tables..."
docker exec -i my-mysql-container mysql -u root -pmypassword < ./sql/init.sql

# Generate the indexes.
echo "Generating the indexes..."
docker exec -i my-mysql-container mysql -u root -pmypassword -D my_db_test < ./sql/indexes.sql

# Fill the tables with data.
echo "Filling the tables with data..."
docker exec -i my-mysql-container mysql -u root -pmypassword -D my_db_test < ./sql/seeds.sql

# Login to the MySQL container to query the tables in the database.
echo "Login to the MySQL container to query the tables in the database..."
docker exec -it my-mysql-container mysql -u root -pmypassword  -D my_db_test
