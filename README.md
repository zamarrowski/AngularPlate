# AngularPlate
Scaffolding for AngularJS

# Install dependencies
npm install

# Run:
```
node app.js
```

# How to use:

Now you can create:

### 1. Factories:

You can indicate:
 * Name (Required)
 * Attributes: separated by # (name:type:value). Value is optional. Data types allowed: String, Number, Boolean and Array. Example: firstName:string:sergio#age:number:23#hobbies:array:[football,basket]
 * Dependencies: separated by commas. Example: $http,$q


### 2. Controller + View

You can indicate:

 * Name of controller (Required)
 * Attributes: separated by # (name:type:value). Value is optional. Data types allowed: String, Number, Boolean and Array. Example: firstName:string:sergio#age:number:23#hobbies:array:[football,basket].
 * Dependencies: separated by commas. Example: $http,$q, ($scope already added).
 * Name of view (Required)
