title: Dependencies
description: Orion dependencies
<!--- END of page meta data -->

# Dependencies

## libsodium

Orion requires the [Sodium cryptographic library](https://download.libsodium.org/doc/) (libsodium) to provide the encryption primitives.

### Install libsodium

#### MacOS

Install using [Homebrew](https://brew.sh/):

```bash
brew install libsodium
```

#### Linux

Download the [latest stable version](https://download.libsodium.org/libsodium/releases/LATEST.tar.gz)
of libsodium.

Execute:

```bash
./configure
make && make check
sudo make install
```

#### Linux / macOS

See the [libsodium installation docs](https://download.libsodium.org/doc/installation/).

#### Windows

Reach out to us on [Orion Discord channel]({{support.channel}}) or at [{{support.email}}](mailto:{{support.email}}) if you need support to install on Windows.
