---
title: Client API methods
description: Orion RPC API
sidebar_position: 2
---

# Client API

The Client API is used by Ethereum clients (for example, Hyperledger Besu) to interact with Orion.

The port used by the Client API is defined by the `clientport ` property in the [configuration file](../Reference/Configuration-File.md). The default port is `8888`.

## Methods

### `createPrivacyGroup`

Creates a privacy group with the specified members.

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/json`

#### Request Body

`addresses` : _array of strings_ - Orion node keys to include in the privacy group

`from` : _string_ - Orion node key of node creating the privacy group

`name` : _string_ - Name of the privacy group

`description` : _string_ - Description for the privacy group

#### Returns

`privacy group` : _object_ - Privacy group object

<!--tabs-->

# curl HTTP request

```bash
curl -X POST http://127.0.0.1:8888/createPrivacyGroup \
  -H 'Content-Type: application/json' \
  -d '{
    "addresses": [
      "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",
      "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="
    ],
    "from": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",
    "name": "Organisation A",
    "description": "Contains members of Organisation A"
  }'
```

# Result

```json
{
  "privacyGroupId": "C68ZfeG6wHeXb+CyfwS6NjmmaMWwRaj8ZkrPq/o+S8Q=",
  "name": "Organisation A",
  "description": "Contains members of Organisation A",
  "type": "PANTHEON",
  "members": [
    "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",
    "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="
  ]
}
```

<!--/tabs-->

### `deletePrivacyGroup`

Deletes a privacy group.

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/json`

#### Request Body

`privacyGroupId` : _string_ - ID of the privacy group to delete

`from` : _string_ - Orion node key of node deleting the privacy group

#### Returns

`privacyGroupId` : _string_ - ID of the deleted privacy group

<!--tabs-->

# curl HTTP request

```bash
curl -X POST http://127.0.0.1:8888/deletePrivacyGroup \
  -H 'Content-Type: application/json' \
  -d '{
    "privacyGroupId": "C68ZfeG6wHeXb+CyfwS6NjmmaMWwRaj8ZkrPq/o+S8Q=",
    "from": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="
  }'
```

# With Privacy Group ID

```bash
    curl -X POST http://127.0.0.1:8888/send \
      -H 'Content-Type: application/json' \
      -d '{
        "payload": "SGVsbG8sIFdvcmxkIQ==",
        "from": "4xanJzyaDPcBVMUSwl/tLp+DbXzd3jF9MKk1yJuyewE=",
        "privacyGroupId": "kAbelwaVW7okoEn1+okO+AbA4Hhz/7DaCOWVQz9nx5M="
    }'
```

# Result

```json
"C68ZfeG6wHeXb+CyfwS6NjmmaMWwRaj8ZkrPq/o+S8Q="
```

<!--/tabs-->

### `findPrivacyGroup`

Finds all privacy groups containing only the specified members.

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/json`

#### Request Body

`addresses` : _array of strings_ - Orion node keys for which to return privacy groups

#### Returns

`array of objects` - Privacy group objects for all privacy groups containing only the specified members

<!--tabs-->

# curl HTTP request

```bash
curl -X POST http://127.0.0.1:8888/findPrivacyGroup \
  -H 'Content-Type: application/json' \
  -d '{
  "addresses" : [
      "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",
      "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="
  ]
}'
```

# Result

```json
[
  {
    "privacyGroupId": "DVMXn3N6VIerZOJjixFFoGQBu8AleyonJ1sK33aYdtg=",
    "type": "PANTHEON",
    "members": [
      "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",
      "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="
    ]
  }
]
```

<!--/tabs-->

### `knownnodes`

Returns the public key and URL of nodes discovered by Orion.

#### HTTP Verb

`GET`

#### Headers

None

#### Request Body

None

#### Returns

`array of objects` - Public key and URL of each discovered node.

<!--tabs-->

# curl HTTP request

```bash
curl -X GET http://127.0.0.1:8888/knownnodes
```

# Result

```json
[
  {
    "publicKey": "i/6jwvVSK/V2qvbXSuXG6/jEHZFcjkE/qLD3rs47PDs=",
    "nodeUrl": "http://127.0.0.1:8080/"
  },
  {
    "publicKey": "Gy/mgkqgCZ960o9pmYAONmPHRD0LDH/5ymywNLrzz08=",
    "nodeUrl": "http://127.0.0.1:9090/"
  }
]
```

<!--/tabs-->

### `receive`

Receives a payload from Orion using the payload key. The payload key is returned by the [send](#send) method.

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/json`

#### Request Body

`key` : _string_ - Key used to receive the payload

`to` : _string_ - Orion key of the receiver

#### Returns

`payload` : _string_ - Base64 encoded payload

<!--tabs-->

# curl HTTP request

```bash
curl -X POST http://127.0.0.1:8888/receive \
  -H 'Content-Type: application/json' \
  -d '{
    "key": "wS+RMprLKIuCaHzOBfPeHmkJWUdOJ7Ji/9U3qj2jbXQ=",
    "to": "YE5cJRJYTRO4XFo7yuAi/0K9DwjySGjsHB2YrFPnJXo="
}'
```

# Result

```json
{ "payload": "SGVsbG8sIFdvcmxkIQ==" }
```

<!--/tabs-->

#### receive with privacy group ID

To return the privacy group ID with the payload, use the `receive` method with the header `Content-Type: application/vnd.orion.v1+json`.

<!--tabs-->

# curl HTTP request

```bash
curl -X POST \
  http://127.0.0.1:8888/receive \
  -H 'Content-Type: application/vnd.orion.v1+json' \
  -d '{
    "key": "dRQUqPeGy6sj9LQJUYqNlUFroBiWm/tJO+CriTce6AA=",
    "to": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="
}'
```

# Result

```json
{
  "payload": "SGVsbG8sIFdvcmxkIQ==",
  "privacyGroupId": "68/Cq0mVjB8FbXDLE1tbDRAvD/srluIok137uFOaClM="
}
```

<!--/tabs-->

### `receiveraw`

Receives a raw payload from Orion using the payload key. The payload key is returned by the [`sendraw`](#sendraw) method

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/octet-stream`
- `c11n-key`: Key used to receive the payload

#### Request Body

None

#### Returns

Payload

<!--tabs-->

# curl HTTP request

```bash
curl -X POST \
  http://127.0.0.1:8888/receiveraw \
  -H 'Content-Type: application/octet-stream' \
  -H 'c11n-key: +3gnwO0oHXe4kXsr3kegd9jTTqsq3Y6Hm3w26WHR/RM='
```

# Result

```json
Hello, World!
```

<!--/tabs-->

### `send`

Sends a payload to Orion.

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/json`

#### Request Body

`payload` : _string_ - Base64-encoded payload

`from` : _string_ - Orion node key of sender

`to` : _array of strings_ - Orion node keys to receive this payload

or

`privacyGroupId` : _string_ - Privacy group to receive this payload

#### Returns

`key` : _string_ - Key used to receive the payload

<!--tabs-->

# curl HTTP request with to

```bash
curl -X POST http://127.0.0.1:8888/send \
  -H 'Content-Type: application/json' \
  -d '{
    "payload": "SGVsbG8sIFdvcmxkIQ==",
    "from": "4xanJzyaDPcBVMUSwl/tLp+DbXzd3jF9MKk1yJuyewE=",
    "to": ["YE5cJRJYTRO4XFo7yuAi/0K9DwjySGjsHB2YrFPnJXo="]
}'
```

# curl HTTP request with privacyGroupId

```bash
curl -X POST http://127.0.0.1:8888/send \
    -H 'Content-Type: application/json' \
    -d '{
      "payload": "SGVsbG8sIFdvcmxkIQ==",
      "from": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",
      "privacyGroupId": "DVMXn3N6VIerZOJjixFFoGQBu8AleyonJ1sK33aYdtg="
}'
```

# Result

```json
{ "key": "wS+RMprLKIuCaHzOBfPeHmkJWUdOJ7Ji/9U3qj2jbXQ=" }
```

<!--/tabs-->

### `sendraw`

Sends a raw payload to Orion.

#### HTTP Verb

`POST`

#### Headers

- `Content-Type: application/octet-stream`
- `c11n-from`: Orion node key of the sender
- `c11n-to`: List of Orion node keys to receive this payload

#### Request Body

`payload` : _string_ - Payload

#### Returns

Key used to receive the payload

<!--tabs-->

# curl HTTP request

```bash
curl -X POST http://127.0.0.1:8888/sendraw \
  -H 'Content-Type: application/octet-stream' \
  -H 'c11n-from: 4xanJzyaDPcBVMUSwl/tLp+DbXzd3jF9MKk1yJuyewE=' \
  -H 'c11n-to: YE5cJRJYTRO4XFo7yuAi/0K9DwjySGjsHB2YrFPnJXo=' \
  -d 'Hello, World!'
```

# Result

```json
+3gnwO0oHXe4kXsr3kegd9jTTqsq3Y6Hm3w26WHR/RM=
```

<!--/tabs-->

### `upcheck`

Confirms if Orion is running.

#### HTTP Verb

`GET`

#### Headers

None

#### Request Body

None

#### Returns

_string_ : `I'm up`

<!--tabs-->

# curl HTTP request

```bash
curl -X GET http://127.0.0.1:8888/upcheck
```

# Result

```json
I'm up
```

<!--/tabs-->
