description: Install Orion from binary distribution
<!--- END of page meta data -->

# Install binary distribution

## Prerequisites

* [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
* [libsodium](Dependencies.md)

!!!important
    Orion requires Java 11+; earlier versions are not supported.

    For production systems, we recommend running Besu and Orion in separate instances. If running Besu
    and Orion in the same instance, restrict the amount of memory used by each JVM to ensure each has
    enough memory.

### Version compatibility

The latest minor version of Orion is compatible with the latest minor version of Hyperledger Besu.
That is, upgrading Besu from 1.4.x to 1.5 requires upgrading Orion from 1.5.x to 1.6. Upgrading from
Besu 1.4.x to Besu 1.4.y does not require an Orion upgrade.

| Besu version              | Orion version         |
|---------------------------|-----------------------|
| 1.5.x                     | 1.6.x                 |
| 1.4.x                     | 1.5.x                 |

## Install binaries

Download the Orion [packaged binaries](https://cloudsmith.io/~consensys/repos/orion/packages/).

Unpack the downloaded files and change into the `orion-<release>` directory.

Display Orion command-line help to confirm installation:

=== "Linux/macOS"

    ```bash
    $ bin/orion --help
    ```

=== "Windows"

    ```bat
    bin\orion --help
    ```
