description: Run Orion using the official docker image
<!--- END of page meta data -->

# Running the Orion Docker Image

A Docker image is provided to run an Orion node in a Docker container.

Use this Docker image to run a single Orion node without installing Orion.

__Prerequisites__:

* [Docker](https://docs.docker.com/install/)

In this example, the [password file](#1-create-password-file), [public/private keypair](#2-generate-keys), and
[Orion configuration file](#3-create-a-configuration-file) are created in the
`/Users/user1/Node1/Orion` directory.

!!! important
    Do not mount a volume at the (`/opt/orion`) path, this prevents
    Orion from safely launching.

    In this example the required files are mounted at the `/data` path.

## 1. Create Password File

Create a file containing the password used to encrypt the key pair.

The password is specified when [generating the keys](#2-generate-keys) and the
file is specified for the `passwords` property in the [configuration file](#3-create-a-configuration-file).

## 2. Generate Keys

To generate a public/private keypair for the Orion node using Docker:

``` bash
docker run -i --rm --mount type=bind,source=/Users/user1/Node1/Orion,target=/data pegasyseng/orion:develop -g /data/testKey
```

At the prompt, enter the [password](#1-create-password-file) to encrypt the
key pair.

The public/private key pair is generated and the keys saved in the `nodeKey.pub`
and `nodeKey.key` files.

## 3. Create a Configuration File

Create a file called `orion.conf` and add the following [properties](../Reference/Configuration-File.md):

```
nodeurl = "http://127.0.0.1:8080/"
nodeport = 8080
nodenetworkinterface = "0.0.0.0"
clienturl = "http://127.0.0.1:8888/"
clientport = 8888
clientnetworkinterface = "0.0.0.0"
publickeys = ["/data/nodeKey.pub"]
privatekeys = ["/data/nodeKey.key"]
passwords = "/data/passwordFile"
workdir = "/data"
tls = "off"
```

The file locations specified in `orion.conf` must be relative the mounted path (`/data`).

## 4. Start Orion

To start the Orion node:

``` bash
docker run -p 8080:8080 -p 8888:8888 --mount type=bind,source=/Users/user1/Node1/Orion,target=/data pegasyseng/orion:develop /data/orion.conf
```
