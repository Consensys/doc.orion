description: Storing Information with PostgreSQL 
<!--- END of page meta data -->

# Store Information with PostgreSQL

PostgreSQL is an object-relational database management system you can use to store key values for Orion.

## Prerequisites

* [PostgreSQL](https://www.postgresql.org/)

## Set up your PostgreSQL database

1. In your database, create the `store` table by using the provided DDL script, as shown in the following example: 

    `psql -h HOST-NAME -U USER-NAME -d DATABASE-NAME -f ./docs/Configuring-Orion/database/postgres_storage.sql` 
    
2. In your database, specify the users for the `store` table and assign permissions to them.

## Configure Orion to use PostgreSQL

In your [Orion configuration file](Configuration-File.md), specify `postgresql` for the `storage` property, as shown in the following example. Substitute your own values for `DATABASE-NAME`, `USER-NAME`, and `PASSWORD`. 

  ```
  storage="sql:jdbc:postgresql://localhost:5432/<DATABASE-NAME>?user=<USER-NAME>&password=<PASSWORD>"
  ```
  
## Test your updated configuration

1. Send the payload to Orion by running the following request:

  ```
  curl -X POST \
  http://localhost:8888/send \
  -H 'Content-Type: application/json' \
  -d '{ 
        "payload": "SGVsbG8sIFdvcmxkIQ==",
        "from": "<KEY-IN-NODEKEY>.PUB",
        "to": ["<KEY-IN-NODEKEY>.PUB"]
      }'
  ```

1. Using psql, the terminal-based front-end to PostgreSQL, retrieve the new row in the `store` table.

1. Receive the payload by running the following request:

  ```
  curl -X POST \
  http://localhost:8888/receive \
  -H 'Content-Type: application/json' \
  -d '{
        "key": "<KEY-RETURNED-IN-STEP-1>",
        "to": "<KEY-IN-NODEKEY>.PUB"
      }'
  ```
  
1. Using psql, retrieve the data in the `store` table.