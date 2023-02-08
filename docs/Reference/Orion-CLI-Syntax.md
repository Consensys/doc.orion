---
title: Orion command line
description: Orion command line interface reference
sidebar_position: 1
---

# Orion command line

This reference describes the syntax of the Orion Command Line Interface (CLI) options and subcommands.

```bash
orion [options] [configFile]
```

Runs Orion private transaction manager.

## Options

### `clear-known-nodes`

```bash
    --clear-known-nodes
```

Clears known nodes. By default, known nodes are stored in memory but can be stored persistently to enable [high availability](../HowTo/High-Availability.md). `knownnodestorage` is defined in the [configuration file](../Reference/Configuration-File.md).

### `generatekeys`

<!--tabs-->

# Syntax

```bash
-g, --generatekeys <names>
```

# Example

```bash
--generatekeys orion
```

<!--/tabs-->

Generates public/private key pairs for each name supplied where `<names>` is a comma-separated list.

### `help`

```bash
-h, --help
```

Displays help and exits.

### `version`

```bash
    -v, --version
```

Displays version information and exits.

## Configuration file

<!--tabs-->

# Syntax

```bash
orion <configFile>
```

# Example

```bash
orion orion.conf
```

<!--/tabs-->

Specifies the [configuration file](../Reference/Configuration-File.md) with which to start Orion.
