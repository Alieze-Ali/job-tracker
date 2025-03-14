# Job Tracker API Documentation

NOTE: When running on local host, the port variable will fall back to 9000 if process.env.PORT is undefined.

## USER

### Register
**POST**  ```/api/v1/user/register```

- Returns the newly created user as the body of the response.
- If request body is missing any required fields, responds with a status code 400 and message: ```{"msg": "Please provide email, password, and name."}```.

| Field        | Data Type | Required? | Notes                           |
| ------------ | --------- | --------- | ------------------------------- |
| email        | string    | Yes       | Must be a valid email address.  |
| password     | string    | Yes       | Restraints: 6 character minimum |
| display_name | string    | Yes       | Restraints: 2 - 50 characters   |

#### Request Body
``` json
{
    "email": "marysue@email.com",
    "password": "asecret",
    "display_name": "Mary",
}
```

#### Response Body
``` json
{
    "email": "marysue@email.com",
    "password": "3N{ryPt3d.p@S5w0Rd",
    "display_name": "Mary",
    "_id": "v3ryl0ng1dnumb3r",
    "__v": 0
}
```

### Login
POST  ```/api/v1/user/login```

- Returns a success message and token as the body of the response.
- If request body is missing any required fields or field validation fails, responds with a status code 400 and message: Ex. ```{"msg": "Please provide email and password."}```.
- If credentials in request body cannot be authenticated, responds with a status code 401 and message: Ex. ```{"msg": "Invalid credentials."}```.

| Field        | Data Type | Required? | Notes                          |
| -----------  | --------- | --------- |------------------------------- |
| email        | string    | Yes       | Must be a valid email address. |
| password     | string    | Yes       | Restraints: 6 character minimum

#### Request Body
``` json
{
    "email": "marysue@email.com",
    "password": "asecret",
}
```

#### Response Body
``` json
{
    "msg": "login sucessful",
    "token": "v3rY./0nGm1x.0fch@rAct3r5"
}
```



## JOBS
*Coming soon!*