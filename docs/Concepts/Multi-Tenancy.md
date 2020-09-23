description: Orion Multi-tenancy
<!--- END of page meta data -->

# Multi-Tenancy

By default, each participant in a privacy network uses its own Hyperledger Besu
and Orion node.

Orion supports [multi-tenancy](https://besu.hyperledger.org/en/latest/Concepts/Privacy/Multi-Tenancy/) by allowing multiple participants in a privacy
network to use the same Besu and Orion node. [Configure multi-tenancy in Besu](https://besu.hyperledger.org/en/latest/Tutorials/Privacy/Configuring-Multi-Tenancy/).

!!! important
    Ensure the multi-tenant Orion node client API is configured to allow access
    only by the multi-tenant Besu node. Access to your data is secured through
    Besu using multi-tenancy mode.

    If not configured to allow access only by the multi-tenant Besu node, other
    Orion clients including other Besu nodes may be able to access tenant data.

    You can use [TLS](TLS-Communication.md) with the [`whitelist`](../Tutorials/TLS.md#clientconnectiontlsservertrust) trust mode to
    secure access.
