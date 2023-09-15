```Project Title:  HNG10 Task Two - API```
```
    `Base URL: https://hngtasktwo.vercel.app`
   
    
```

Certainly! Here's the documentation for all the endpoints in your Express.js router:

---

# API Documentation

## Introduction

This document provides comprehensive documentation for the [Your API Name] API. It outlines the available endpoints, request and response formats, sample usage, limitations, and instructions for local or server deployment.

## Base URL

The base URL for accessing the API is:

```
https://hngtasktwo.vercel.app`
```

## Authentication

///NILL (NO AUTHENTICATION REQUIRED)

## Endpoints

### 1. Create a User

#### Request

- **URL**: `/api/users`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
 

#### Request Body

```json
{
  "name": "GODSWILL EFFIONG",
  "dob": "1992-02-26",
  "gender": "male",
  "email": "ask4gdswill@gmail.com",
  "phone": "8029403129",
  "address": {
    "home": "123 home St",
    "billing": "456 address St"
  },
  "socialMedia": [
    {
      "platform": "facebook",
      "url": "https://www.facebook.com/donnilzy"
    },
    {
      "platform": "twitter",
      "url": "https://twitter.com/donnwilzy"
    }
  ],
  "occupation": "Software Engineer",
  "interest": ["Programming", "Traveling"],
  "bio": "A software engineer with a passion for coding and exploring new places."
}
```

#### Response

- **Status Code**: `201 Created`
- **Response Body**

```json
{
  "id": "12345",
  "name": "GODSWILL EFFIONG",
  "dob": "1992-02-26",
  "gender": "male",
  "email": "ask4gdswill@gmail.com",
  "phone": "8029403129",
  "address": {
    "home": "123 home St",
    "billing": "456 address St"
  },
  "socialMedia": [
    {
      "platform": "facebook",
      "url": "https://www.facebook.com/donnilzy"
    },
    {
      "platform": "twitter",
      "url": "https://twitter.com/donnwilzy"
    }
  ],
  "occupation": "Software Engineer",
  "interest": ["Programming", "Traveling"],
  "bio": "A software engineer with a passion for coding and exploring new places."
}
```

### 2. Get User by ID

#### Request
// USE THE ACTUAL USERID FROM OBJECTID ON DATABASE
- **URL**: `/api/users/{user_id}` 
- **Method**: `GET`

#### Response

- **Status Code**: `200 OK`
- **Response Body**

```json
{
  "id": "12345",
  "name": "GODSWILL EFFIONG",
  "dob": "1992-02-26",
  "gender": "male",
  "email": "ask4gdswill@gmail.com",
  "phone": "8029403129",
  "address": {
    "home": "123 home St",
    "billing": "456 address St"
  },
  "socialMedia": [
    {
      "platform": "facebook",
      "url": "https://www.facebook.com/donnilzy"
    },
    {
      "platform": "twitter",
      "url": "https://twitter.com/donnwilzy"
    }
  ],
  "occupation": "Software Engineer",
  "interest": ["Programming", "Traveling"],
  "bio": "A software engineer with a passion for coding and exploring new places."
}
```

### 3. Update User

#### Request

- **URL**: `/api/users/{user_id}`
- **Method**: `PUT`
- **Headers**:
  - `Content-Type: application/json`

#### Request Body

```json
{
  "id": "12345",
  "name": "GODSWILL EFFIONG",
  "dob": "1992-02-26",
  "gender": "male",
  "email": "ask4gdswill@gmail.com",
  "phone": "8029403129",
  "address": {
    "home": "123 home St",
    "billing": "456 address St"
  },
  "socialMedia": [
    {
      "platform": "facebook",
      "url": "https://www.facebook.com/donnilzy"
    },
     {
      "platform": "zuriChat",
      "url": "https://www.zuriChat.com/donnilzy"
    },
     {
      "platform": "other",
      "url": "https://www.godswilleffiong.com/"
    },
    {
      "platform": "linkedIn",
      "url": "https://linkedin/in/.com/donnwilzy"
    }
  ],
  "occupation": "Software Engineer",
  "interest": ["Programming", "Traveling"],
  "bio": "A software engineer with a passion for coding and exploring new places."
}
```



### 4. Delete User

#### Request
////// REPLACE WITH THE CTUAL USER ID
- **URL**: `/api/users/{user_id}`
- **Method**: `DELETE`

#### Response

- **Status Code**: `204 No Content`

### 5. Get All Users

#### Request

- **URL**: `/api/users`
- **Method**: `GET`

#### Response

- **Status Code**: `200 OK`
- **Response Body**

```json
[
  {
    "id": "12345",
    "name": "User 1

",
   
  },
  {
    "id": "67890",
    "name": "User 2",
   
  }

]
```

## Known Limitations and Assumptions

/// LIST OF LIMITTIONS

## Local Setup and Deployment

INTRUCTION ON LOAL SETUPS AND DEPENDEN
---

@startuml

class CRUD {
  + create(object: Object): Object
  + read(id: int): Object
  + update(object: Object): Object
  + delete(id: int): void
}

@enduml

---------------------
|      User         |
---------------------
| - id: String      |
| - name: String    |
| - email: String   |
| - dob: Date       |
| - gender: String  |
| - address: String |
| - phone: String   |
---------------------
| + createUser()   |
| + getUserById()  |
| + updateUser()   |
| + deleteUser()   |
| + getAllUsers()  |
---------------------

----------------------
|   Address          |
----------------------
| - home: String     |
| - billing: String  |
----------------------

-------------------------
|   SocialMedia         |
-------------------------
| - platform: String    |
| - url: String         |
-------------------------



You are free to clone and also contribute