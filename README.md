# AngularJS

## Configuration

3 configuration file :
- package.json
- bower.json
- Gruntfile.js

### Package.json 

Configuration file used by npm, describes the application.
Contains the name, version and dependencies of our application

### Bower.json 

Configuration file containing pure front-end dependency (ex : angular, jquery)

### Gruntfile.js

Known as the **Task Runner**, used by the devloper to automate tasks such as minifying->compiling->unit test executing. The "default" task is executed when `grunt` is prompted at the root, it contains 3 tasks :

	1. 1 Code verification task using 'jshint'
	2. 1 Test task
	3. 1 Build task  

Notify the 'connect' section, the tell that a web server will be functional if `grunt serve` is prompted.

More about Grunt [here](https://gruntjs.com/getting-started): 


## The application (/app)

Contains the code of the project

#### Image folder

#### Styles folder

#### Views folder
Contains HTML templates

#### Scripts folder

Core of the application.
Controller, Services and Angular directives are here

#### index.html

Entry point of our app

## Test folder (/test)

Tests constitutes an extremely important of the devlopment (even in JavaScript).

#### Spec forlder 

- Contains **controller** folder with a *main.js* file. Contains the tests of the main controller

- karma.conf.js file : It is a "Test runner", it automates tests execution

	run with `grunt test`


## Overview

- NPM is a server-side dependency manager. The package.json file describes the dependencies of the application. then dependencies are installed in the *node_module*  folder.

- Bower is a client-side dependency manager. The bower.json file describes the dependecies of the app and are stored in *bower_compomnents*.

- Grunt is a "Task Runner" used for automate tasks such as building, testing and launching the application. Grunt works with karma in ordor to automate test execution.

- Yeoman allows us to create the structure of our application, it uses Bower and Grunt. We need to install the corresponding generator for the type of application that we want to develop. Yeoman proposes several generators [here](http://yeoman.io/generators/).

- Everything that contains "ng" is called a directive (example : ng-controller, ng-model ...).

## MVC

Link between HTML and JavaScript controler are made with the `ng-controller` directive in a html tag

## Data-binding 

AngularJs uses a 2 way data-binding. No longer acting directly with the DOM is something complicated to assimilate at first.

- 1 Binding [Example](https://jsfiddle.net/6nwL3r1t/6/)
- Using ng-model and ng-show [Example](http://jsfiddle.net/7sh8a9oz/)
- Using $watch [Example](http://jsfiddle.net/hwzfm6nL/)









