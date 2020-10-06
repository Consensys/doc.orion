description: Orion command line interface reference
<!--- END of page meta data -->

# Orion command line

This reference describes the syntax of the Orion Command Line Interface (CLI) options and subcommands.

```bash
orion [options] [configFile]
```

Runs Orion private transaction manager.

## Options

### `clear-known-nodes`

=== "Syntax"

    ```bash
      --clear-known-nodes
    ```

Clears known nodes. By default, known nodes are stored in memory but can be stored persistently to
enable [high availability](../HowTo/High-Availability.md). `knownnodestorage` is defined in the
[configuration file](../Reference/Configuration-File.md).

### `generatekeys`

=== "Syntax"

    ```bash
    -g, --generatekeys <names>
    ```

=== "Example"

    ```bash
    --generatekeys orion
    ```

Generates public/private key pairs for each name supplied where `<names>` is a comma-separated list.

### `help`

=== "Syntax"

    ```bash
    -h, --help
    ```

Displays help and exits.

### `version`

=== "Syntax"

    ```bash
      -v, --version
    ```

Displays version information and exits.

## Configuration file

=== "Syntax"

    ```bash
    orion <configFile>
    ```

=== "Example"

    ```bash
    orion orion.conf
    ```

Specifies the [configuration file](../Reference/Configuration-File.md) with which to start Orion.
