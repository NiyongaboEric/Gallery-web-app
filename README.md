# Gallery

#Travis-Ci
[![Build Status](https://travis-ci.org/NiyongaboEric/Gallery-web-app.svg?branch=develop)](https://travis-ci.org/NiyongaboEric/Gallery-web-app)

#Coverall
[![Coverage Status](https://coveralls.io/repos/github/NiyongaboEric/Gallery-web-app/badge.svg?branch=develop)](https://coveralls.io/github/NiyongaboEric/Gallery-web-app?branch=develop)

#codeClimate
[![Maintainability](https://api.codeclimate.com/v1/badges/1dc5fe40c69d3145accc/maintainability)](https://codeclimate.com/github/NiyongaboEric/Gallery-web-app/maintainability)

#Swagger Api Docs.
it is designed using swagger package.

```
		swagger-jsdoc	
		swagger-ui-express	
```

#i begin with user registration where i CRUD application.
    		#How user api works?
    - create a TAG to separate the Api created
    - create unique and reusable models
    - remember to combine api with the same path
    - repeat the same process for other API
					
		|HTTP|route |Example|
		|------|----|-------|
		|GET|/auth/register|get all signed users|
		|POST|/auth/register|create a new user|
		|GET|/auth/register/{id}|Get specific user with given ID|
		|PUT|/auth/register/{id}|updated specific user with given ID|
		|DELETE|/auth/register/{id}|delete given user with given ID|
