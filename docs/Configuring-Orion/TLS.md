description: TLS 
<!--- END of page meta data -->

# TLS

Orion supports the Transport Layer Security (TLS) protocol to enable secure communications. TLS is used between Orion nodes only. It is not used between Pantheon and Orion nodes.

Enable TLS by setting the `tls` property to `strict` in the [Orion configuration file](Configuration-File.md).  

## Getting Started with TLS

To have Orion generate certificates, start the nodes with the TLS trust mode set to `insecure-no-validation` for `tlsclienttrust` 
and `tlsservertrust` until the `tlsknownclients` and `tlsknownservers` files are populated. When the files are populated, 
restart the nodes with the TLS trust mode set to `whitelist` for `tlsclienttrust` and `tlsservertrust`.

The following procedures explain how to generate certificates when the Common Name (CN) is either the public DNS or an IP address by using [OpenSSL](https://www.openssl.org/source/). Before you begin, ensure OpenSSL is installed.

Choose one of the following methods:

* [Generating certificates when the public DNS is the CN](#Generating-certificates-when-the-public-DNS-is-the-CN)
* [Generating certificates when the public IP address is the CN](#Generating-certificates-when-the-public-IP-address-is-the-CN)

### Generating certificates when the public DNS is the CN

If you want to use a public DNS as the CN, complete the following steps:

#### Generating a CA certificate

1. Generate a key file called orion_ca.key by running the following command:

    `openssl genrsa -out orion_ca.key 2048`
  
1. Generate a CA certificate called orion_ca.pem that uses orion_ca.key by running the follow command:

    `openssl req -x509 -new -nodes -key orion_ca.key -sha256 -days 1024 -out orion_ca.pem`

#### Generating a new certificate for a node

We recommend each node has its own certificate. To generate the certificate, complete the following process:

1. Generate a key file called orion_cer.key by running the following command:

    `openssl genrsa -out orion_cer.key 2048`
  
1. Generate a certificate signing request (CSR) called orion_cer.csr by running the following command:

    `openssl req -new -key orion_cer.key -out orion_cer.csr`
  
1. Answer each prompt for information that will be added to the certificate request. Ensure that the
value you specify for Common Name (CN) matches the host public DNS so that the requests from the server are accepted. The name 
is used in the configuration file for the `nodeurl` and `clienturl` options too.

1. Generate a certificate called orion_cer.pem signed by the CA certificate by runnig the following command:

    `openssl x509 -req -in orion_cer.csr -CA orion_ca.pem -CAkey orion_ca.key -CAcreateserial -out orion_cer.pem -days 500 -sha256`

#### Configuration file example that uses TLS and the created certificates

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

nodenetworkinterface = "0.0.0.0"
clientnetworkinterface = "0.0.0.0"
```

### Generating certificates when the public IP address is the Common Name (CN) 

If you want to use a public IP as the CN, complete the following steps:

#### Updating the `openssl.cfn` file

1. Find the `openssl.cfn` file, and create a copy of it.
1. In your copy of the `openssl.cfn` file, find the `[req]` section, and add the following lines:

  ```
  req_extensions = v3_req
  
  [ v3_req ]
  basicConstraints = CA:FALSE
  keyUsage = nonRepudiation, digitalSignature, keyEncipherment
  subjectAltName = @alt_names

  [alt_names]
  DNS.1 = <DNS-PUBLIC-RECORD>
  DNS.2 = <DNS-PRIVATE-RECORD>
  IP.1 = <PUBLIC-IP-ADDRESS>
  IP.2 = <PRIVATE-IP-ADDRESS>
  ```

1. For each DNS that you want to use as an alternate name, specify a DNS._n_ entry.
1. For each IP address that you want as an alternate IP address, specify an IP._n_ entry.

#### Generating a new CSR for a node

1. Run the following command. Ensure you substitute your values for all variables.

  `openssl req -new -key orion_cer.key -out orion_cer.csr -config <PATH-TO>/openssl.cnf`

1. Test whether the certificate was generated with the expected subject alternative names by running the following command:

  `openssl req -text -noout -in orion_cer.csr`

The following example shows the type of output this command generates:

```
[...]
Requested Extensions:
            X509v3 Subject Alternative Name:            
DNS:<DNS-PUBLIC-RECORD>,
DNS:<DNS-PRIVATE-RECORD>, 
IP Address:<PUBLIC-IP-ADDRESS>, 
IP Address:<PRIVATE-IP-ADDRESS>
[...]
```

#### Generating a new certificate

1. Run the following command. Ensure you substitute your values for all variables.

  `openssl x509 -req -in orion_cer.csr -CA orion_ca.pem -CAkey orion_ca.key -CAcreateserial -out orion_cer.pem -days 500 -sha256 -extfile <PATH-TO>/openssl.cnf -extensions v3_req`

1. Test whether the generated certificate contains the subject alternative names by running the following command:

  `openssl x509 -in orion_cer.pem -text -noout`

The following example shows the type of output this command generates:

```
[...]
X509v3 extensions:
          X509v3 Subject Alternative Name:
DNS:<DNS-PUBLIC-RECORD>,
DNS:<DNS-PRIVATE-RECORD>, 
IP Address:<PUBLIC-IP-ADDRESS>, 
IP Address:<PRIVATE-IP-ADDRESS>
[...]
```

## Configuring TLS 

TLS properties are specified in the [configuration file](Configuration-File.md). 

### tls 

TLS status options are:

* `strict` - All connections to and from this node must use TLS with mutual authentication. See [tlsservertrust](#tlsservertrust)
and [tlsclienttrust](#tlsclienttrust). 
* `off` - Mutually authenticated TLS is not used for in- and outbound connections. Unauthenticated 
connections to HTTPS hosts are still possible. Use only if another transport security mechanism like 
WireGuard is in place.

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

* `whitelist` - Only nodes that have previously connected to this node and have been added to `tlsknownclients`
 can connect. New clients are not added to `tlsknownclients`.

* `tofu` - Trust-on-first-use. Only the first node that connects identifying as a certain host can connect
 as the same host in the future. Nodes identifying as other hosts can still connect. To restrict access, change
 the mode to `whitelist` after populating the `tlsknownclients` list.

* `ca` -  Only nodes with a valid certificate and chain of trust to one of the system root certificates 
can connect.  Use the `SYSTEM_CERTIFICATE_PATH` environment variable to override the directory containing
 trusted root certificates.

* `ca-or-tofu` - Combination of `ca` and `tofu`. If a certificate is valid, it is always allowed and added 
to the `tlsknownclients` list. If it is self-signed, it is allowed only if it is the first certificate 
this node has seen for that host.

* `insecure-no-validation` - Any client can connect. Clients are added to the `tlsknownclients` file.

### tlsknownclients

TLS known clients for the server. The `tlsknownclients` contains the fingerprints of public keys of other
nodes that can connect to this node for the `ca-or-tofu`, `tofu`, and `whitelist` trust modes.

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

TLS trust mode for the client. The trust mode defines the servers to which the client connects. Options:

* `whitelist` - Nodes only connects to servers it has previously seen and have been added to `tlsknownservers`. 
New servers are not added to `tlsknownservers`.

* `tofu` - Trust-on-first-use. Node only connects same server for any given host. This is similar to how
OpenSSH works. 

* `ca` -  Node only connects to servers with a valid certificate and chain of trust to one of the system 
root certificates. Use the `SYSTEM_CERTIFICATE_PATH` environment variable to override the directory containing
 trusted root certificates.

* `ca-or-tofu` - Combination of `ca` and `tofu`. If a certificate is valid, it is always allowed and added 
to the `tlsknownservers` list. If it is self-signed, it is allowed only if it is the first certificate 
this node has seen for that host.

* `insecure-no-validation` - Node connects to any server. Servers are added to the `tlsknownservers` file.

### tlsknownservers 

TLS known servers for the client. The `tlsknownservers` contains the fingerprints of public keys of other
nodes that this node has encountered for the `ca-or-tofu`, `tofu`, and `whitelist` trust modes.