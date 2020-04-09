description: Install Orion from binary distribution
<!--- END of page meta data -->

# Install binary distribution

## Prerequisites

* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [libsodium](Dependencies.md)

!!!important
    Orion requires Java 11+; earlier versions are not supported.

    For production systems, we recommend running Besu and Orion in separate instances. If running Besu
    and Orion in the same instance, restrict the amount of memory used by each JVM to ensure each has
    enough memory.

## Install binaries

Download the Orion [packaged binaries](https://bintray.com/consensys/binaries/orion/_latestVersion#files).

Unpack the downloaded files and change into the `orion-<release>` directory.

Display Orion command-line help to confirm installation:

```bash tab="Linux/macOS"
$ bin/orion --help
```

```bat tab="Windows"
bin\orion --help
```
