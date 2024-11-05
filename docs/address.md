# Address API Spec

## Create Address

Endpoint : POST api/contacts/:idContact/addresses

Request Header :

- X-API-TOKEN : token

Request Body:

```json
{
  "street": "Jl. Central Jakarta",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postal_code": "4123"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Central Jakarta",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "4123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Get Address

Endpoint : GET api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Central Jakarta",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "4123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found"
}
```

## Update Address

Endpoint : PUT api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Request Body:

```json
{
  "street": "Jl. Central Jakarta",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postal_code": "4123"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Central Jakarta",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "4123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Remove Address

Endpoint : DELETE api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found"
}
```

## List Address

Endpoint : GET api/contacts/:idContact/addresses

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jl. Central Jakarta",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postal_code": "4123"
    },
    {
      "id": 2,
      "street": "Jl. Central Jakarta",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postal_code": "4123"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Contact is not found"
}
```
