description: TLS 
<!--- END of page meta data -->

# TLS

Orion supports the Transport Layer Security (TLS) protocol to enable secure
communications between clients (for example [Besu](https://besu.hyperledger.org/en/latest/Concepts/TLS/)) and Orion, and
between Orion nodes. 

Enable TLS and set TLS properties in the [Orion configuration file](../Reference/Configuration-File.md):

* For client TLS, set the [`clientconnectiontls`](#clientconnectiontls) property to
`strict`.
* For TLS between Orion nodes set the [`tls`](#tls) property to `strict`.

[Generate Orion certificates](Generating-Certificates.md) before configuring TLS.

## Configure TLS

Configure TLS in the [Orion configuration file](../Reference/Configuration-File.md).

!!! Example "Example Orion configuration file using the created certificates"
    ```
    nodeurl = "<YOUR-COMMON-NAME>:8080/"
    nodeport = 8080

    clienturl = "<YOUR-COMMON-NAME>:8888/"
    clientport = 8888

    othernodes = ["<YOUR-COMMON-NAME>:8080"]

    workdir = "<PATH-TO>/orion/bin"

    publickeys = ["orion.pub"]
    privatekeys = ["orion.key"]

    tls = "strict"

    tlsservercert = "<PATH-TO>/orion/bin/orion_cer.pem"
    tlsserverchain = ["<PATH-TO>/orion/bin/orion_ca.pem"]
    tlsserverkey = "<PATH-TO>/orion/bin/orion_cer.key"

    tlsclientcert = "<PATH-TO>/orion/bin/orion_cer.pem"
    tlsclientchain = ["<PATH-TO>/orion/bin/orion_ca.pem"]
    tlsclientkey = "<PATH-TO>/orion/bin/orion_cer.key"

    tlsclienttrust = "ca"
    tlsservertrust = "ca"

    clientconnectiontls = "strict"
    clientconnectiontlsservercert = "<PATH-TO>/orion/bin/orion_cer.pem"
    clientconnectiontlscertchain = []
    clientconnectiontlsserverkey = "<PATH-TO>/orion/bin/orion_cer.key"
    clientconnectiontlsservertrust = "whitelist"
    clientconnectiontlsknownclients = "<PATH-TO>/orion/bin/orionKnownClients"
    
    nodenetworkinterface = "0.0.0.0"
    clientnetworkinterface = "0.0.0.0"
    ```

## Orion-to-Orion TLS Properties 

Properties to configure TLS between Orion nodes.

### tls 

TLS status options are:

* `strict` - All connections to and from other Orion nodes must use TLS with
mutual authentication. See [tlsservertrust](#tlsservertrust) and 
[tlsclienttrust](#tlsclienttrust). 
* `off` - Mutually authenticated TLS is not used between Orion nodes.
Unauthenticated connections to HTTPS hosts are still possible. Use only if
another transport security mechanism like WireGuard is in place.

### tlsservercert

File containing the server TLS certificate in Apache format. The certificate identifies this
node to other nodes when they connect to the node API. If the certificate does not exist, it
is created.

### tlsserverchain

List of files that make up the CA trust chain for the server certificate. The list can be empty for auto-generated/non-PKI-based 
certificates.

### tlsserverkey

File containing the private key for the server TLS certificate. If the private key does not exist, it is
created. 

### tlsservertrust

TLS trust mode for the server. The trust mode defines which nodes can connect to the server. Options:

* `whitelist` - Only nodes presenting certificates with fingerprints in `tlsknownclients`
 can connect.

* `tofu` - Trust-on-first-use. Only the first node that connects identifying as a certain host can connect
 as the same host in the future. Nodes identifying as other hosts can still connect. To restrict access, change
 the mode to `whitelist` after populating the `tlsknownclients` list.

* `ca` -  Only nodes with a valid certificate and chain of trust to one of the system root certificates 
can connect.  Use the `SYSTEM_CERTIFICATE_PATH` environment variable to override the directory containing
 trusted root certificates.

* `ca-or-whitelist` - Combination of `ca` and `whitelist`. 

* `ca-or-tofu` - Combination of `ca` and `tofu`. If a certificate is valid, it is always allowed and added 
to the `tlsknownclients` list. If it is self-signed, it is allowed only if it is the first certificate 
this node has seen for that host.

* `insecure-tofa` - Trust-on-first-access. On first connection, the Common Name
and fingerprint of the presented certificate is added to `tlsknownclients`.
In subsequent connections, the client connection is rejected if the fingerprint
has changed.

* `insecure-ca-or-tofa` - A combination of `ca` and `insecure-tofa`.

* `insecure-record` - Any client can connect. The client certificate fingerprint
is added to the `tlsknownclients` file.

* `insecure-ca-or-record` - A combination of `ca` and `insecure-record`.

* `insecure-no-validation` - Any client can connect. Clients are added to the `tlsknownclients` file.

### tlsknownclients

TLS known clients for the server. The `tlsknownclients` contains the fingerprints of public keys of other
nodes that can connect to this node for the `ca-or-tofu`, `tofu`, and `whitelist` trust modes.

You can [use Orion to generate certificates](Generating-Certificates.md#generating-certificates-using-orion) and automatically populate the
`tlsknownclients` file.

### tlsclientcert

File containing the client TLS certificate in Apache format. The certificate identifies this
node to other nodes when it is connecting to the node API. If the certificate does not
exist, it is created.

### tlsclientchain

List of files that make up the CA trust chain for the client certificate. The list can be empty for auto-generated/non-PKI-based 
certificates.

### tlsclientkey

File containing the private key for the client TLS certificate. If the private key does not exist, it is
created.

### tlsclienttrust

TLS trust mode for the client. The trust mode defines the servers to which this node connects. Options:

* `whitelist` - Nodes only connects to servers it has previously seen and have been added to `tlsknownservers`. 
New servers are not added to `tlsknownservers`.

* `tofu` - Trust-on-first-use. Node only connects to the same server for any given host. This is similar to how
OpenSSH works. 

* `ca` -  Node only connects to servers with a valid certificate and chain of trust to one of the system 
root certificates. Use the `SYSTEM_CERTIFICATE_PATH` environment variable to override the directory containing
 trusted root certificates.

* `ca-or-whitelist` - Combination of `ca` and `whitelist`.

* `ca-or-tofu` - Combination of `ca` and `tofu`. If a certificate is valid, it is always allowed and added 
to the `tlsknownservers` list. If it is self-signed, it is allowed only if it is the first certificate 
this node has seen for that host.

* `insecure-record` - This node connects to any server, regardless of
certificate, and is added to the `tlsknownservers` file.

* `insecure-ca-or-record` - Combination of `ca` and `insecure-record`.

* `insecure-no-validation` - Node connects to any server. Servers are added to the `tlsknownservers` file.

### tlsknownservers 

TLS known servers for the client. The `tlsknownservers` contains the fingerprints of public keys of other
nodes that this node has encountered for the `ca-or-tofu`, `tofu`, and `whitelist` trust modes.

You can [use Orion to generate certificates](Generating-Certificates.md#generating-certificates-using-orion) and automatically populate the
`tlsknownservers` file.

## Client-to-Orion TLS Properties

Properties to configure TLS between the client (for example [Besu](https://besu.hyperledger.org/en/latest/Concepts/TLS/)) and Orion.

### clientconnectiontls

TLS status options are:

* `strict` - All connections between the client and Orion must use TLS with
mutual authentication. See [clientconnectiontlsservertrust](#clientconnectiontlsservertrust). 
* `off` - Mutually authenticated TLS is not used for client connections.
Unauthenticated connections to HTTPS hosts are still possible. Use only if
another transport security mechanism like WireGuard is in place.

### clientconnectiontlsservercert

File containing the server TLS certificate in Apache format. The certificate
identifies this node to clients when they connect. If the certificate does
not exist, it is created.

### clientconnectiontlsserverchain

List of files that make up the CA trust chain for the server certificate. The
list can be empty for auto-generated/non-PKI-based certificates.

### clientconnectiontlsserverkey

File containing the private key for the server TLS certificate. If the private
key does not exist, it is created. 

### clientconnectiontlsservertrust

The trust mode defines which clients can connect. Options:

* `whitelist` - Only clients presenting certificates with fingerprints in
`clientconnectiontlsknownclients` are allowed to connect.

* `tofu` - Trust-on-first-use. The client is trusted to connect when first
connecting to the server. The Common Name and fingerprint of the presented
certificate is added to the `clientconnectiontlsknownclients` file. The client
must present the same fingerprint on subsequent connections.

* `ca` -  Only clients certificates signed by a trusted CA and chain of trust to
one of the system root certificates can connect. Use the `SYSTEM_CERTIFICATE_PATH`
environment variable to override the directory containing trusted root
certificates.

* `ca-or-whitelist` - Combination of `ca` and `whitelist` clients are allowed
to connect.

* `ca-or-tofu` - Combination of `ca` and `tofu`.

* `insecure-tofa` - Trust-on-first-access. The client is trusted to connect when
first connecting to the server. The Common Name and fingerprint of the presented
certificate is added to the `clientconnectiontlsknownclients` file. The client
must present the same fingerprint on subsequent connections.

* `insecure-ca-or-tofa` - Combination of `ca` and `insecure-tofa`.

* `insecure-record` - Any client can connect and the certificate fingerprint
is be added to the `clientconnectiontlsknownclients` file.

* `insecure-ca-or-record` - Combination of `ca` and `insecure-record`

* `insecure-no-validation` - Node connects to any server. Servers are added to
the `clientconnectiontlsknownclients` file.

### clientconnectiontlsknownclients

TLS known clients file for the client interface. Lists one or more clients
that are trusted to connect to Orion. The file contents use the format
`<common_name> <hex-string>` where:

* `<common_name>` is the Common Name used for the client's keystore
* `<hex-string>` is the SHA-256 fingerprint of the client's keystore.

Clients can connect to this node for the `ca-or-tofu`, `tofu`, and `whitelist`
trust modes.
