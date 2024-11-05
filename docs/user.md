# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "gilbert",
  "password": "confidential",
  "name": "Gilbert Hutapea"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "gilbert",
    "name": "Gilbert Hutapea"
  }
}
```

Request Body (Failed) :

```json
{
  "errors": "username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/login

Request Body :

```json
{
  "username": "gilbert",
  "password": "confidential"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "gilbert",
    "name": "Gilbert Hutapea",
    "token": "uuid"
  }
}
```

Request Body (Failed) :

```json
{
  "errors": "username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "gilbert",
    "name": "Gilbert Hutapea"
  }
}
```

Request Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "password": "confidential", // not mandatory
  "name": "Gilbert Hutapea" // not mandatory
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "gilbert",
    "name": "Gilbert Hutapea"
  }
}
```

Request Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Request Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```
