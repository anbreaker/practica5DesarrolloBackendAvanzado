---
title: NodePopJWT v1.0
language_tabs:
  - javascript: javascript
language_clients:
  - javascript: ""
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="nodepopjwt">NodePopJWT v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://127.0.0.1:3000/api">http://127.0.0.1:3000/api</a>

<h1 id="nodepopjwt-misc">Misc</h1>

## Get all Ads

<a id="opIdGetallAds"></a>

> Code samples

```javascript

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://127.0.0.1:3000/api/ads/5f5912fbb1828432bd7a162f?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /ads/5f5912fbb1828432bd7a162f`

Get all the ads from the database.

Returns:

```json
[
  {
    "tags": ["technology", "developer", "work"],
    "_id": "5f5912fbb1828432bd7a162f",
    "name": "Vant Pc ultraMOOVE-s",
    "onSale": true,
    "cost": 789,
    "imagePath": "vant.png",
    "__v": 0
  },
  {
    "tags": ["technology", "lifestyle"],
    "_id": "5f5912fbb1828432bd7a1630",
    "name": "OnePlus 8",
    "onSale": false,
    "cost": 425,
    "imagePath": "oneplus.png",
    "__v": 0
  },
  {
    "tags": ["technology", "lifestyle"],
    "_id": "5f5912fbb1828432bd7a1631",
    "name": "Nikon D610",
    "onSale": true,
    "cost": 707,
    "imagePath": "nikon.png",
    "__v": 0
  },
  {
    "tags": ["work", "developer"],
    "_id": "5f5917f2aa4d152eb763077a",
    "name": "Advert Number 4",
    "onSale": true,
    "cost": 400,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  },
  {
    "tags": ["lifestyle", "technology"],
    "_id": "5f591c30482b993bb1327d0e",
    "name": "Advert Number 5",
    "onSale": false,
    "cost": 500,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  },
  {
    "tags": ["lifestyle"],
    "_id": "5f591c30682b993bb1327d0e",
    "name": "Advert Number 6",
    "onSale": true,
    "cost": 600,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  },
  {
    "tags": ["work", "technology"],
    "_id": "5f591c30682c993bb1327d0e",
    "name": "Advert Number 7",
    "onSale": false,
    "cost": 700,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  },
  {
    "tags": ["developer"],
    "_id": "5f591c30682b993bb1427d0e",
    "name": "Advert Number 8",
    "onSale": true,
    "cost": 800,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  }
]
```

<h3 id="get-all-ads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|Content-Type|header|string|true|none|
|Accept|header|string|true|none|

<h3 id="get-all-ads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Ad with form-data

<a id="opIdCreateAdwithform-data"></a>

> Code samples

```javascript
const inputBody = '{
  "name": "test Imagen",
  "onSale": true,
  "cost": 123,
  "image": "string",
  "tags": "work"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded'
};

fetch('http://127.0.0.1:3000/api/ads?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /ads`

## Create Ad with form-data

- Returns:

```json
{
  "tags": ["work", "developer"],
  "_id": "5f5caf28950a2567a632462b",
  "name": "test Imagen",
  "onSale": true,
  "cost": 123,
  "imagePath": "6ccc1b6d-90ae-476c-acd6-be5283f54a9b.jpg",
  "__v": 0
}
```

> Body parameter

```yaml
name: test Imagen
onSale: true
cost: 123
image: string
tags: work

```

<h3 id="create-ad-with-form-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|body|body|object|false|none|
|» name|body|string|true|none|
|» onSale|body|boolean|true|none|
|» cost|body|integer(int32)|true|none|
|» image|body|string|true|none|
|» tags|body|string|true|none|

<h3 id="create-ad-with-form-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Ads by Filters

<a id="opIdGetAdsbyFilters"></a>

> Code samples

```javascript

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://127.0.0.1:3000/api/ads?tags=technology&cost=700-&name=Ad&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /ads`

## Get ad by filters an params

- Return with this params:
  - tags: technology,
  - cost: 700-,
  - name: Ad

```json
[
  {
    "tags": ["work", "technology"],
    "_id": "5f591c30682c993bb1327d0e",
    "name": "Advert Number 7",
    "onSale": false,
    "cost": 700,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  }
]
```

### Other example:

- Return with this params:
  - tags: lifestyle,
  - onSale: true,

```json
[
  {
    "tags": ["technology", "lifestyle"],
    "_id": "5f5912fbb1828432bd7a1631",
    "name": "Nikon D610",
    "onSale": true,
    "cost": 707,
    "imagePath": "nikon.png",
    "__v": 0
  },
  {
    "tags": ["lifestyle"],
    "_id": "5f591c30682b993bb1327d0e",
    "name": "Advert Number 6",
    "onSale": true,
    "cost": 600,
    "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
    "__v": 0
  }
]
```

<h3 id="get-ads-by-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|string|true|none|
|cost|query|string|true|none|
|name|query|string|true|none|
|token|query|string|true|none|
|Content-Type|header|string|true|none|
|Accept|header|string|true|none|

<h3 id="get-ads-by-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Ad

<a id="opIdDeleteAd"></a>

> Code samples

```javascript

fetch('http://127.0.0.1:3000/api/ads/5fa2671ee10d5e37b06cc18e?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /ads/5fa2671ee10d5e37b06cc18e`

## Delete an ad using its id

<h3 id="delete-ad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|

<h3 id="delete-ad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Ad

<a id="opIdUpdateAd"></a>

> Code samples

```javascript
const inputBody = '{
  "name": "test",
  "onSale": false,
  "cost": 214
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://127.0.0.1:3000/api/ads/5f5912fbb1828432bd7a1630?name=test&onsale=true&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PATCH /ads/5f5912fbb1828432bd7a1630`

## Update an ad according to the parameters that we pass it after locating it by its id

- Return

```json
{
  "tags": ["technology", "lifestyle"],
  "_id": "5f5912fbb1828432bd7a1630",
  "name": "test",
  "onSale": false,
  "cost": 214,
  "imagePath": "oneplus.png",
  "__v": 0
}
```

> Body parameter

```json
{
  "name": "test",
  "onSale": false,
  "cost": 214
}
```

<h3 id="update-ad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|none|
|onsale|query|boolean|true|none|
|token|query|string|true|none|
|body|body|[UpdateAdRequest](#schemaupdateadrequest)|true|none|

<h3 id="update-ad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Ad by :_id

<a id="opIdGetAdby:_id"></a>

> Code samples

```javascript

fetch('http://127.0.0.1:3000/api/ads/5f5912fbb1828432bd7a1630?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /ads/5f5912fbb1828432bd7a1630`

## Get ad by :id (5f5912fbb1828432bd7a1630)

- Return of this id: (5f5912fbb1828432bd7a1630)

```json
{
  "tags": ["technology", "lifestyle"],
  "_id": "5f5912fbb1828432bd7a1630",
  "name": "test",
  "onSale": false,
  "cost": 214,
  "imagePath": "oneplus.png",
  "__v": 0
}
```

<h3 id="get-ad-by-:_id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|

<h3 id="get-ad-by-:_id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Post change notOnSale

<a id="opIdPostchangenotOnSale"></a>

> Code samples

```javascript

fetch('http://127.0.0.1:3000/api/ads/5f5912fbb1828432bd7a162f/notOnSale?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /ads/5f5912fbb1828432bd7a162f/notOnSale`

Post change notOnSale

<h3 id="post-change-notonsale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|

<h3 id="post-change-notonsale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Post change yesOnSale

<a id="opIdPostchangeyesOnSale"></a>

> Code samples

```javascript

fetch('http://127.0.0.1:3000/api/ads/5f5912fbb1828432bd7a162f/yesOnSale?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTI4YmIzMmIzMWUzNjgzOWM1YWNhNyIsImlhdCI6MTYwNDQ5MzI0MiwiZXhwIjoxNjA2MjIxMjQyfQ.AISxX7HBUUMvHsinkieNv37TWuF0e76iblOHIgbCYas',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /ads/5f5912fbb1828432bd7a162f/yesOnSale`

Post change yesOnSale

<h3 id="post-change-yesonsale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|

<h3 id="post-change-yesonsale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Signup User on private zone Postman

<a id="opIdGetSignupUseronprivatezonePostman"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "user1@user.com",
  "password": 123
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://127.0.0.1:3000/api/signup',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /signup`

> Body parameter

```json
{
  "email": "user1@user.com",
  "password": 123
}
```

<h3 id="get-signup-user-on-private-zone-postman-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetSignupUseronprivatezonePostmanRequest](#schemagetsignupuseronprivatezonepostmanrequest)|true|none|

<h3 id="get-signup-user-on-private-zone-postman-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Signin login existing user on private zone Postman

<a id="opIdGetSigninloginexistinguseronprivatezonePostman"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "user@user.com",
  "password": 123
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://127.0.0.1:3000/api/signin',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /signin`

> Body parameter

```json
{
  "email": "user@user.com",
  "password": 123
}
```

<h3 id="get-signin-login-existing-user-on-private-zone-postman-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetSigninloginexistinguseronprivatezonePostmanRequest](#schemagetsigninloginexistinguseronprivatezonepostmanrequest)|true|none|

<h3 id="get-signin-login-existing-user-on-private-zone-postman-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_UpdateAdRequest">UpdateAdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadrequest"></a>
<a id="schema_UpdateAdRequest"></a>
<a id="tocSupdateadrequest"></a>
<a id="tocsupdateadrequest"></a>

```json
{
  "name": "test",
  "onSale": false,
  "cost": 214
}

```

UpdateAdRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|onSale|string|true|none|none|
|cost|integer(int32)|true|none|none|

<h2 id="tocS_CreateAdwithJSONRequest">CreateAdwithJSONRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateadwithjsonrequest"></a>
<a id="schema_CreateAdwithJSONRequest"></a>
<a id="tocScreateadwithjsonrequest"></a>
<a id="tocscreateadwithjsonrequest"></a>

```json
{
  "name": "test1",
  "onSale": true,
  "cost": 707,
  "imagePath": "d1d50271-4b0a-4909-8a9f-b5ad48998d38.png",
  "tags": [
    "tecnology",
    "lifestyle"
  ]
}

```

CreateAdwithJSONRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|onSale|boolean|true|none|none|
|cost|integer(int32)|true|none|none|
|imagePath|string|true|none|none|
|tags|[string]|true|none|none|

<h2 id="tocS_GetSignupUseronprivatezonePostmanRequest">GetSignupUseronprivatezonePostmanRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsignupuseronprivatezonepostmanrequest"></a>
<a id="schema_GetSignupUseronprivatezonePostmanRequest"></a>
<a id="tocSgetsignupuseronprivatezonepostmanrequest"></a>
<a id="tocsgetsignupuseronprivatezonepostmanrequest"></a>

```json
{
  "email": "user1@user.com",
  "password": 123
}

```

GetSignupUseronprivatezonePostmanRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_GetSigninloginexistinguseronprivatezonePostmanRequest">GetSigninloginexistinguseronprivatezonePostmanRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsigninloginexistinguseronprivatezonepostmanrequest"></a>
<a id="schema_GetSigninloginexistinguseronprivatezonePostmanRequest"></a>
<a id="tocSgetsigninloginexistinguseronprivatezonepostmanrequest"></a>
<a id="tocsgetsigninloginexistinguseronprivatezonepostmanrequest"></a>

```json
{
  "email": "user@user.com",
  "password": 123
}

```

GetSigninloginexistinguseronprivatezonePostmanRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|password|string|true|none|none|

