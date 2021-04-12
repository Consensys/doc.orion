---
title: Migrating to Tessera
description: Migrate your Orion configuration and data to Tessera.
---

# Migrating to Tessera

## Migration Process

A utility is included in Tessera which enables migration of an Orion config
file and database to a Tessera config file and database.

A full migration workflow would be as follows:

1. Download or build the migration utility
1. Shut down the Orion and Hyperledger Besu nodes
1. Perform the config and database migration
1. Start Tessera and Hyperledger Besu nodes with the new config and database files

## Build Migration Utility

The utility can be built from the [Tessera repository](https://github.com/ConsenSys/tessera/)

1. First clone the Tessera repostory:

`git clone https://github.com/ConsenSys/tessera`

1. Navigate to the orion-to-tessera migration utility directory:

`cd migration/orion-to-tessera/`

1. Build the migration utility using gradle:

`gradle clean build`

## Download Migration Utility

Or download the migration utility binaries, which are available at the following [download link](to be added).

## Verify Installation

Verify the installation by running the migration utility with the `--help` flag.

=== "Request"

    ```bash
    ./bin/migrate --help
    ```

=== "Result"

    ```bash
    Missing required options: 'orionconfig=Orion config file',
    'outputfile=<outputFile>', 'tessera.jdbc.user=<username>',
    'tessera.jdbc.password=<password>', 'tessera.jdbc.url=<url>'

    Usage: <main class> -f=Orion config file -o=<outputFile>
    tessera.jdbc.password=<password> tessera.jdbc.url=<url>
    tessera.jdbc.user=<username>

    -f, orionfile, orionconfig=Orion config file
        Orion config file
    -o, outputfile=<outputFile>
        Output Tessera config file
        tessera.jdbc.password=<password>
        Target Tessera DB password
        tessera.jdbc.url=<url>
        Target Tessera DB JDBC connection string
        tessera.jdbc.user=<username>
        Target Tessera DB username
    ```
## Run Migration

By default Tessera uses an H2 database, however alternative databases can be configured.
Refer to the following [SQL Data Definition Language files](https://github.com/consensys/tessera/tree/master/ddls/create-table)
for help with other databases.

!!! warning
    If migrating from an SQL database to Tessera then the JDBC driver must be
    added to the `CLASSPATH` environment variable and added to
    the start script at `~/bin/migrate.bash`

1. Verify the state on your Besu and Orion network using `priv_debugGetStateRoot` and `priv_getTransactionCount`.

1. Stop your Besu and Orion nodes.

1. Begin the migration by running `migrate` with all required options.
Substitute `main class`, `Orion config file`, `outputFile`, `password`, `url` and `username` with your own values.

=== "Request"

    ```bash
    <main class> -f <Orion config file> -o <outputFile> tessera.jdbc.password <password> tessera.jdbc.url <url> tessera.jdbc.user <username>
    ```

=== "Example"

    ```bash
    ~/workspace/tessera/migration/orion-to-tessera/build/install/migrate/bin/migrate -f ~/workspace/orion/orion.conf -o=~/workspace/tessera/tessera-migrated.conf tessera.jdbc.password password tessera.jdbc.url jdbc:h2:./workdir/tessera/tessera1 tessera.jdbc.user username
    ```

=== "Result"

    ```
    === Migration report ===
    Migrated 2156 of 2156 transactions
    Migrated 56 of 56 privacy groups
    ```
1. On a successful migration, the count of transactions and privacy groups migrated will match expected values.

1. Start Besu and Tessera using the new Tessera config file and database.

1. Verify the state on your Besu and Tessera nodes using `priv_debugGetStateRoot` and `priv_getTransactionCount`, it should be identical to the results from earlier.

### Options

You must specify the following options in order to run the migration tool:

`main class`= Migration tool location

`Orion config file`= Orion config file location

`outputFile`= Target Tessera config file location

`username`= Target Tessera DB username

`password`= Target Tessera DB password

`url`= Target Tessera DB JDBC connection string
