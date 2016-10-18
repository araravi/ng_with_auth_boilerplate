# Angular 1.x Boilerplate

## Libraries included
* [bootstrap](https://github.com/twbs/bootstrap)
* [ui-router](https://github.com/angular-ui/ui-router)
* [ng-token-auth](https://github.com/lynndylanhurley/ng-token-auth)

## Getting started
* sudo npm -g install grunt-cli karma bower
* npm install
* bower install
* grunt serve

## Deploying
* grunt build
* ./deploy.sh

##Note
* Environment config is done through ngconstant in Gruntfile. Injected into the app using ENV provider
* Authentication is through ng-token-auth
* Change deploy.sh credentials to your requirement
* Refer to nginx.conf for a sample configuration for nginx on the serverrver

##Things to do
* Proper testing structure and samples, coming soon!
