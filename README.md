### AngularJS

## Configuration

3 configuration file :
- package.json
- bower.json
- Gruntfile.js

# Package.json 

Configuration file used by npm, describes the application.
Contains the name, version and dependencies of our application

# Bower.json 

Configuration file containing pure front-end dependency (ex : angular, jquery)

# Gruntfile.js

Known as the **Task Runner**, used by the devloper to automate tasks such as minifying->compiling->unit test executing. The "default" task is executed when `grunt` is prompted at the root, it contains 3 tasks :

	1. 1 Code verification task using 'jshint'
	2. 1 Test task
	3. 1 Build task  

Notify the 'connect' section, the tell that a web server will be functional if `grunt serve` is prompted 




> note: Node modules are located in *node_modules* directory, Bower modules are in *bower_components*
