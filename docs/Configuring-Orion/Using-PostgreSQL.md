description: Storing Information with PostgreSQL 
<!--- END of page meta data -->

# Store Information with PostgreSQL

PostgreSQL is an object-relational database you can use to store private transaction payloads for Orion. Use a relational database to support your [disaster recovery strategy](Disaster-Recovery.md).

## Prerequisites

* [PostgreSQL](https://www.postgresql.org/)

## Set up your PostgreSQL database

In your database:

1. Create the `store` table by using the provided DDL script, as shown in the following example. Substute your own values for `HOST-NAME`, `USER-NAME`, and `DATABASE-NAME`.

    `psql -h <HOST-NAME> -U <USER-NAME> -d <DATABASE-NAME> -f ~<INSTALLATION_DIRECTORY>/orion/database/postgres_ddl.sql` 
    
2. Specify the users for the `store` table and assign permissions to them.

## Configure Orion to use PostgreSQL

In your [Orion configuration file](Configuration-File.md), specify `postgresql` for the `storage` property, as shown in the following example. Substitute your own values for `HOST`, `PORT`, `DATABASE-NAME`, `USER-NAME`, and `PASSWORD`. 

  ```
  storage="sql:jdbc:postgresql://<HOST>:<PORT>/<DATABASE-NAME>?user=<USER-NAME>&password=<PASSWORD>"
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
