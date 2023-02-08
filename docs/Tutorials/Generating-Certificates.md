---
title: Generate Orion Certificates
description: Generate Orion Certificates
sidebar_position: 4
---

# Generating certificates

You can generate certificates using Orion, or a third-party tool like OpenSSL or Keytool.

## Generating certificates using Orion

You can use Orion to generate certificates between Orion nodes. Start the nodes with the TLS trust mode set to `insecure-no-validation` for `tlsclienttrust` and `tlsservertrust` until the `tlsknownclients` and `tlsknownservers` files are populated. When the files are populated, restart the nodes with the TLS trust mode set to `whitelist` for `tlsclienttrust` and `tlsservertrust`.

!!! note For TLS connections between the client (Besu) and Orion, manually configure the client to trust the server connection.

## Generating certificates using OpenSSL

These procedures explain how to use [OpenSSL](https://www.openssl.org/source/) to generate certificates when the Common Name (CN) is either the [public DNS](#public-dns-is-cn) or an [IP address](#ip-address-is-cn). Before you begin, ensure OpenSSL is installed.

### Public DNS is CN

To use a public DNS as CN:

#### Generating a CA certificate

1. Generate a key file called `orion_ca.key`:

   `openssl genrsa -out orion_ca.key 2048`

1. Generate a certificate authority (CA) certificate called `orion_ca.pem` that uses `orion_ca.key`:

   `openssl req -x509 -new -nodes -key orion_ca.key -sha256 -days 1024 -out orion_ca.pem`

#### Generating a new certificate for a node

We recommend each node has its own certificate. To generate the certificate:

1. Generate a key file called `orion_cer.key`:

   `openssl genrsa -out orion_cer.key 2048`

1. Generate a certificate signing request (CSR) called `orion_cer.csr`: `openssl req -new -key orion_cer.key -out orion_cer.csr`
1. Answer each prompt for information to be added to the certificate request. Ensure the value you specify for Common Name (CN) matches the host public DNS so the requests from the server are accepted. The name is also specified in the configuration file for the `nodeurl` and `clienturl` options.
1. Generate a certificate called `orion_cer.pem` signed by the CA certificate: `openssl x509 -req -in orion_cer.csr -CA orion_ca.pem -CAkey orion_ca.key -CAcreateserial -out orion_cer.pem -days 500 -sha256`

### IP address is CN

To use a public IP address as CN:

#### Updating the `openssl.cnf` file

1. Find the `openssl.cnf` file, and create a copy of it.
1. In your copy of the `openssl.cnf` file, find the `[req]` section, and add:

   ```ini
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

1. For each DNS you want to use as an alternate name, specify a DNS._n_ entry.
1. For each IP address you want as an alternate IP address, specify an IP._n_ entry.

#### Generating a new CSR for a node

1.  Run the following command. Substitute your values for all variables.

    `openssl req -new -key orion_cer.key -out orion_cer.csr -config <PATH-TO>/openssl.cnf`

1.  Test whether the certificate was generated with the expected subject alternative names:

    `openssl req -text -noout -in orion_cer.csr`

    !!! Example "Example of command output"

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

1. Run the following command. Substitute your values for all variables.

   `openssl x509 -req -in orion_cer.csr -CA orion_ca.pem -CAkey orion_ca.key -CAcreateserial -out orion_cer.pem -days 500 -sha256 -extfile <PATH-TO>/openssl.cnf -extensions v3_req`

1. Test whether the generated certificate contains the subject alternative names:

   `openssl x509 -in orion_cer.pem -text -noout`

   ```bash title="Example of command output"
   [...]
   X509v3 extensions:
       X509v3 Subject Alternative Name:
   DNS:<DNS-PUBLIC-RECORD>,
   DNS:<DNS-PRIVATE-RECORD>,
   IP Address:<PUBLIC-IP-ADDRESS>,
   IP Address:<PRIVATE-IP-ADDRESS>
   [...]
   ```
