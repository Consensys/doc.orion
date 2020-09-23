description: Configuration File
<!--- END of page meta data -->

# Configuration file

The Configuration file is a TOML file that must be specified when
[starting Orion](../Reference/Orion-CLI-Syntax.md#configuration-file).

Configuration entries may be overridden by environment variables.

## Properties

| Property                          | Required | Environment variable name             | Description                                                                               | Default                           |
|-----------------------------------|--:- :----|---------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------|
| `nodeurl`                         | Required | ORION_NODEURL                         | URL advertised to Orion nodes                                                             | `"http://127.0.0.1:8080/"`        |
| `nodeport`                        | Required | ORION_NODEPORT                        | Port on which to listen for Orion nodes                                                   | `8080`                            |
| `nodenetworkinterface`            | Optional | ORION_NODENETWORKINTERFACE            | Host on which to listen for Orion nodes                                                   | `"127.0.0.1"`                     |
| `clienturl`                       | Optional | ORION_CLIENTURL                       | URL advertised to Ethereum clients                                                        | `"http://127.0.0.1:8888"`         |
| `clientport`                      | Optional | ORION_CLIENTPORT                      | Port on which to listen for Ethereum clients                                              | `8888`                            |
| `clientnetworkinterface`          | Optional | ORION_CLIENTNETWORKINTERFACE          | Host on which to listen for Ethereum clients                                              | `"127.0.0.1"`                     |
| `workdir`                         | Optional | ORION_WORKDIR                         | Data directory. This property is relevant only if you use file-based storage, such as LevelDB.  | `. (current directory)`           |
| `othernodes`                      | Optional | ORION_OTHERNODES                      | Bootnodes for Orion network                                                               | `[] (empty list)`                 |
| `publickeys`                      | Optional | ORION_PUBLICKEYS                      | List of files containing public keys hosted by node                                       | `[] (empty list)`                 |
| `privatekeys`                     | Optional | ORION_PRIVATEKEYS                     | List of files containing private keys hosted by node (corresponding order to public keys) | `[] (empty list)`                 |
| `libsodiumpath`                   | Optional | ORION_LIBSODIUMPATH                   | Path to libsodium shared library                                                          | [Dependent on OS](#libsodiumpath) |
| `alwayssendto`                    | Optional | ORION_ALWAYSSENDTO                    | List of files containing public keys to include as recipients for every transaction       | `[]`                              |
| `passwords`                       | Optional | ORION_PASSWORDS                       | File containing [passwords](#passwords) to unlock `privatekeys`                           | `Not set`                         |
| `knownnodestorage`                | Optional | ORION_KNOWNNODESTORAGE                | Known nodes storage for other Orion nodes. Must match `storage` in [highly available scenarios](../HowTo/High-Availability.md). Relational databases [PostgreSQL](../Tutorials/Using-PostgreSQL.md) and [Oracle](../Tutorials/Using-Oracle.md) are supported. | `"memory"` |
| `storage`                         | Optional | ORION_STORAGE                         | Storage for payloads and related information. Relational databases [PostgreSQL](../Tutorials/Using-PostgreSQL.md) and [Oracle](../Tutorials/Using-Oracle.md) are supported. | `"leveldb"`                       |
| `tls`                             | Optional | ORION_TLS                             | [TLS status options](../Tutorials/TLS.md)                                                              | `"strict"`                        |
| `tlsservercert`                   | Optional | ORION_TLSSERVERCERT                   | [Server TLS certificate](../Tutorials/TLS.md#tlsservercert)                                            | `"tls-server-cert.pem"`           |
| `tlsserverchain`                  | Optional | ORION_TLSSERVERCHAIN                  | [Files that make up the CA trust chain](../Tutorials/TLS.md#tlsserverchain)                            | `[]`                              |
| `tlsserverkey`                    | Optional | ORION_TLSSERVERKEY                    | [Private key for the server TLS certificate](../Tutorials/TLS.md#tlsserverkey)                         | `"tls-server-key.pem"`            |
| `tlsservertrust`                  | Optional | ORION_TLSSERVERTRUST                  | [TLS trust mode for the server](../Tutorials/TLS.md#tlsservertrust)                                    | `"tofu"`                          |
| `tlsknownclients`                 | Optional | ORION_TLSKNOWNCLIENTS                 | [TLS known clients for the server](../Tutorials/TLS.md#tlsknownclients)                                | `"tls-known-clients"`             |
| `tlsclientcert`                   | Optional | ORION_TLSCLIENTCERT                   | [Client TLS certificate](../Tutorials/TLS.md#tlsclientcert)                                            | `"tls-client-cert.pem"`           |
| `tlsclientchain`                  | Optional | ORION_TLSCLIENTCHAIN                  | [Files that make up the CA trust chain](../Tutorials/TLS.md#tlsclientchain)                            | `[]`                              |
| `tlsclientkey`                    | Optional | ORION_TLSCLIENTKEY                    | [Private key for the client TLS certificate](../Tutorials/TLS.md#tlsclientkey)                         | `"tls-client-key.pem"`            |
| `tlsclienttrust`                  | Optional | ORION_TLSCLIENTTRUST                  | [TLS trust mode for the client](../Tutorials/TLS.md#tlsclienttrust)                                    | `"ca-or-tofu"`                    |
| `tlsknownservers`                 | Optional | ORION_TLSKNOWNSERVERS                 | [TLS known servers for the client](../Tutorials/TLS.md#tlsknownservers)                                | `"tls-known-servers"`             |
| `clientconnectiontls`             | Optional | ORION_CLIENTCONNECTIONTLS             | [TLS status options](../Tutorials/TLS.md)                                                              | `"off"`                        |
| `clientconnectiontlsservercert`   | Optional | ORION_CLIENTCONNECTIONTLSSERVERCERT   | [Server TLS certificate](../Tutorials/TLS.md#clientconnectiontlsservercert)                                            | `"client-connection-tls-server-cert.pem"`    |
| `clientconnectiontlsserverchain`  | Optional | ORION_CLIENTCONNECTIONTLSSERVERCHAIN  | [Files that make up the CA trust chain](../Tutorials/TLS.md#clientconnectiontlsserverchain)                            | `[]`                              |
| `clientconnectiontlsserverkey`    | Optional | ORION_CLIENTCONNECTIONTLSSERVERKEY    | [Private key for the server TLS certificate](../Tutorials/TLS.md#clientconnectiontlsserverkey)                         | `"client-connection-tls-server-key.pem"`            |
| `clientconnectionTlsServerTrust`  | Optional | ORION_CLIENTCONNECTIONTLSSERVERTRUST  | [TLS trust mode for the server](../Tutorials/TLS.md#clientconnectiontlsservertrust)                                    | `"tofu"`                          |
| `clientconnectiontlsknownclients` | Optional | ORION_CLIENTCONNECTIONTLSKNOWNCLIENTS | [TLS known clients for the server](../Tutorials/TLS.md#clientconnectiontlsknownclients)                                | `"client-connection-tls-known-clients"`             |

### libsodiumpath

Depends on the operational system. Check the class LibSodiumSettings for more details.

### alwayssendto

Specifies list of files containing public keys to include as a recipient for every transaction sent
through the node (for example, for backup purposes). The specified public keys must be advertised by an
Orion node on the network. That is, there must be an Orion node with the specified public keys included in the node
`publickeys` list.

### passwords

File contains one password per line. Include an empty line for keys that are not locked.
