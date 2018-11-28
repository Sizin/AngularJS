# First, set up Homebrew: http://brew.sh/

# You have to have Xcode installed, and must run it at least once to install the command-line tools

# Install your own Ruby instead of using the system Ruby
# (so you can control version, install gems without sudo, etc.)
brew update
brew install rbenv

# Add these two lines to your .bashrc, then quit and restart Terminal
export RBENV_ROOT=/usr/local/var/rbenv
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi

# Install, globally set, and verify you have the Ruby you expect
brew install ruby-build
rbenv install 2.1.2   # or use 'rbenv install --list' to see which versions are available
rbenv global 2.1.2
ruby --version

# Install Sass and Compass
gem update --system && gem install compass && gem install sass

# Set up node/npm
brew install node

# Install Grunt CLI and the Compass plugin
npm install -g grunt-cli
npm install -g grunt-contrib-compass

# Install Yeoman
npm install -g yo

# Install the AngularJS and Karma generators
npm install -g generator-angular
npm install -g generator-karma

# Create project directory and cd into it
mkdir my-project && cd my-project

# Run yo angular, optionally passing in app name.
# Answer "Y" for all questions, and select all optional modules.
yo angular foo             # Will create AngularJS module "fooApp"

# Install grunt and grunt-karma in project
npm install grunt --save-dev
npm install grunt-karma --save-dev

# Build
grunt

# Run unit tests
# 
# (Note: Due to bugs in the Angular/Karma generators, tests may not work. Compare the
# contents of your test/karma.conf.js to the sample provided here. Also, in your
# Gruntfile.js, you may need to change the path of karma.conf.js to 'test/karma.conf.js')
grunt test

# By default, unit tests will run in PhantomJS. To test in Chrome also, do the following:
npm install karma-chrome-launcher --save-dev
# Then, in karma.conf.js, add 'Chrome' to the browsers section, and add 'karma-clone-launcher' to the plugins section.

# Run server and show webpage
# Changes to source files will cause browser to update and tests to be re-run
grunt serve

# Build distribution (files created in /dist directory)
grunt build
