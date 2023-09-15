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
## Project Objectives
```

User Creation: Implement a feature to create user profiles with various details, including personal information, contact information, and social media profiles.

User Retrieval: Develop functionality to retrieve user profiles by user ID or specific search criteria.

User Update: Enable users to update their profiles and administrators to modify user information as needed.

User Deletion: Implement a feature to delete user profiles..

Listing Users: Create a user listing feature that allows users to view a list of registered users based on specified criteria.
```

## Key Features:
User Registration: Capture user details, including name, date of birth, gender, email, phone, and address.
Social Media Profiles: Allow users to associate social media profiles (e.g., Facebook, Twitter) with their accounts.
Search and Filtering: Implement search and filtering options for user retrieval.
User Profile Management: Enable users to update their profiles
User Deletion: Implement a secure process for user account deletion.
User Listing: Provide an interface for listing users based on various criteria.

## Technologies and Tools:
Programming Languages: JavaScript (Node.js)
Web Framework: Express.js
Database: MongoDB 
API Testing: Postman, or similar tools
Version Control: Git and GitHub
Deployment: Vercel.com


## Getting Started:
Clone the project repository from GitHub using ``git clone https://github.com/DONNWILZY/HNGTaskTwo``
Install the necessary dependencies using Node.js package manager (npm).
Configure the database connection. `process.env.YourOwnDataBase`
Start the application locally for development and testing

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

## Test Suites and Frameworks
Mocha
Description: `Mocha` is a JavaScript test framework used for writing and running unit tests and integration tests.
Installation: Install Mocha globally using npm:

``npm install -g mocha``
````Chai````
Description: Chai is an assertion library for Node.js that works seamlessly with Mocha. It provides expressive and readable assertions.
Installation: Install Chai as a development dependency in your project directory:
``npm install chai --save-dev``

`Test Execution`
Running Unit Tests
Navigate to the project's root directory.
Run the following command to execute unit tests:

mocha test/unit
Running Integration Tests
Navigate to the project's root directory.
Run the following command to execute integration tests:


mocha test/integration
Running API Tests with Postman (Optional)
Open Postman.
Import the provided Postman collection and environment files.
Run the collection to execute API tests.
Test Reports
Test reports will be generated automatically during test execution. You can view test reports in the console or res.json

## Known Limitations and Assumptions

/// LIST OF LIMITTIONS

## Local Setup and Deployment

INTRUCTION ON LOAL SETUPS AND DEPENDEN
clone the project, Setup databse (mongodb), Install dependencies and run `npm run start` or type ``nodemon``

.
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

## Future Enhancements:
Implement user authentication for secure access.
Develop user roles and permissions.
Enhance user interface for improved user experience.
Add support for more database systems.
Expand social media integration options.
.
---
You are free to clone and also contribute