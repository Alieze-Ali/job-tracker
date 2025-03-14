# API Documentation

## USER

### Register
**POST**  http://localhost:9009/api/v1/user/register

#### Request Body
``` json
{
    "username": "openforwork",
    "password": "asecret",
    "email": "marysue@email.com",
    "display_name": "Mary"
}
```

#### Response Body
``` json
{
    "username": "openforwork",
    "password": "3N{ryPt3d.p@S5w0Rd",
    "email": "marysue@email.com",
    "display_name": "Mary"
}
```


### Login
**POST**  http://localhost:9009/api/v1/user/login

#### Request Body
``` json
{
    "username": "maryislooking",
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