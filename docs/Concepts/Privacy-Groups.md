# Privacy groups

When [transactions are sent](../Reference/API-Methods.md#send) to:

* List of recipients, Orion creates a privacy group containing the recipients.
* Privacy group, the transaction is distributed to all members of the privacy group.

Hyperledger Besu maintains a [private state per privacy group](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Groups/).

Endpoints are provided to create, delete, and privacy groups:

* [`createPrivacyGroup`](../Reference/API-Methods.md#createprivacygroup)
* [`deletePrivacyGroup`](../Reference/API-Methods.md#deleteprivacygroup)
* [`findPrivacyGroup`](../Reference/API-Methods.md#findprivacygroup)




