description: Disaster recovery strategies
<!--- END of page meta data -->

# Disaster recovery

!!! danger
    If the Orion database is deleted or corrupted, all private transaction payloads for the node are lost.
    You cannot recover a lost database without a backup.

Orion supports using relational databases [PostgreSQL](../Tutorials/Using-PostgreSQL.md) and [Oracle](../Tutorials/Using-Oracle.md).
To enable disaster recovery for Orion, use a relational database and backup.

To recover after a failure:

1. Start Orion pointing to your database
1. Start Hyperledger Besu. As Besu synchronizes to the current world state it
    [processes the privacy marker transactions](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Private-Transaction-Processing/)
    and requests the private transactions from Orion to execute.
