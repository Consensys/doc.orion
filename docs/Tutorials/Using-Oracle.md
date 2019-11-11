description: Storing Information with Oracle
<!--- END of page meta data -->

# Store Information with Oracle

Oracle is an object-relational database you can use to store private transaction payloads for Orion. Use a relational database to support your [disaster recovery strategy](../Concepts/Disaster-Recovery.md).

## Prerequisites

* [Oracle Database](https://docs.oracle.com/en/)

## Set up your Oracle database

In your database:

1. Create the `store` table by using the provided DDL script, as shown in the following example. Substitute your own values for `USER-NAME`, `PASSWORD`, `DATABASE-NAME`, and `INSTALLATION-DIRECTORY`.

    `sqlplus <USER-NAME>/<PASSWORD>@<DATABASE-NAME> @<INSTALLATION-DIRECTORY>/orion/database/oracle_ddl.sql` 
    
2. Specify the users for the `store` table and assign permissions to them.

## Configure Orion to use Oracle

In your [Orion configuration file](../Reference/Configuration-File.md), specify `oracle` for the `storage` property, as shown in the following example. Substitute your own values for `USER-NAME`, `PASSWORD`, `HOST`, `PORT`, and `SID`. `SID` identifies a specific Oracle database. 

  ```
  storage="jdbc:oracle:thin:<USER-NAME>, <PASSWORD>, <HOST>, <PORT>, <SID>"
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

1. Using SQL*Plus, the terminal-based front-end to Oracle, retrieve the new row in the `store` table.

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
  
1. Using SQL*Plus, retrieve the data in the `store` table.
