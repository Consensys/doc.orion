---
title: Migrating from Orion to Tessera
description: Migrate your Orion configuration and data to Tessera.
---

# Migrating from Orion to Tessera

## Migration Process

A utility is included in Tessera which enables migration of an Orion configuration
file and database to a Tessera configuration file and database. No changes are required to the Besu configuration file to migrate.

A full migration workflow would be as follows:

1. [Build](#build-migration-utility) or [download](#download-migration-utility) the migration utility.
1. Shut down the Orion and Hyperledger Besu nodes.
1. Perform [configuration and database migration](#migrate).
1. Start Tessera with the new configuration and database files.
1. Start Hyperledger Besu nodes.

## Build Migration Utility

The utility can be built from the [Tessera repository](https://github.com/ConsenSys/tessera/).

First clone the Tessera repository:

```bash
git clone https://github.com/ConsenSys/tessera
```

Navigate to the project root directory:

```bash
cd tessera
```

Build the migration utility with the Gradle wrapper `gradlew`:

```bash
./gradlew clean migration:orion-to-tessera:installDist -x test
```

## Download Migration Utility

Or download the migration utility binaries, which are available at the following [download link](to be added).

## Verify Installation

Verify the installation by running the migration utility with the `--help` flag.

=== "Command"

    ```bash
    ./bin/migrate --help
    ```

=== "Result"

    ```bash
    ./bin/migrate --help
    Usage: orion-to-tessera/bin/migrate [-h] -f=Orion config file -o=<outputFile>
                                    tessera.jdbc.password=<password> tessera.
                                    jdbc.url=<url> tessera.jdbc.user=<username>
    -f, orionfile, orionconfig=Orion config file
                       Orion config file
    -h, help, --help   Print this message
    -o, outputfile=<outputFile>
                       Output Tessera config file
        tessera.jdbc.password=<password>
                       Target Tessera DB password
        tessera.jdbc.url=<url>
                       Target Tessera DB JDBC connection string
        tessera.jdbc.user=<username>
                       Target Tessera DB username
    ```

## Migrate

By default Tessera uses an H2 database. However, you can configure alternative databases.
Refer to the [SQL Data Definition Language files](https://github.com/consensys/tessera/tree/master/ddls/create-table)
for help with other databases.

!!! warning
    If migrating from an SQL database to Tessera, you must add the JDBC driver
    to the `CLASSPATH` environment variable and to the start script at `./bin/migrate`.

!!! note
    Password protected keys are renamed to `.orion` on migration and added to the Tessera configuration file.

### Stop Services

Verify the state on your Besu and Orion network using `priv_debugGetStateRoot` and `priv_getTransactionCount`.

Stop your Besu and Orion nodes.

### Run Migration

Begin the migration by running `migrate` with all required options.
Substitute `Orion config file`, `outputFile`, `password`, `url` and `username` with your own values.

    === "Request"

    ```bash
    ./bin/migrate -f <Orion config file> -o <outputFile> tessera.jdbc.password <password> tessera.jdbc.url <url> tessera.jdbc.user <username>
    ```

    === "Example"

    ```bash
    ./bin/migrate -f "orion.conf" -o="tessera-migrated.conf" tessera.jdbc.password "My Secret Pass" tessera.jdbc.url "jdbc:h2:tessera1" tessera.jdbc.user "user1"
    ```

    === "Result"

    ```bash
    === Migration report ===
    Migrated 2156 of 2156 transactions
    Migrated 56 of 56 privacy groups
    ```

On a successful migration, the count of transactions and privacy groups migrated will match expected values.

### Restart Services

Start Besu and Tessera using the new Tessera configuration file and database.

1. Verify the state on your Besu and Tessera nodes using `priv_debugGetStateRoot` and `priv_getTransactionCount`, it should be identical to the results from earlier.

### Options

You must specify the following options in order to run the migration tool:

`Orion config file`= Orion configuration file location

`outputFile`= Target Tessera configuration file location

`username`= Target Tessera database username

`password`= Target Tessera database password

`url`= Target Tessera database JDBC connection string
