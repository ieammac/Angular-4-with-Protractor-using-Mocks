## Springboot + Angular 4 + Protractor (e2e testing) using mocks (ng-apimocks)

### Note: (Its recommended to read ui/README.md before reading this readme file because it will give you more idea how things are working and the main focus of this project is ui module) 

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

This project uses Java 8 and maven version 3.5.2. Until a proper maven wrap is in place to allow project building using lower version
of maven, ensure the correct version is available locally. Additionally ensure that JAVA_HOME and M2_HOME are correctly set up.

## Angular Development server

Please "cd ui" and execute "npm start" to start Angular server then write Angular code.
Angular server will use "src/proxy.conf.json" to reverse API call to Spring Boot and will be accessible at http://localhost:4200
Starting the Angular Server enables Hot Reload on the Frontend.

cd src/
* install modules: npm install

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##### "NOTE":
In case project is not building please delete "node_module" folder and "pacakge-lock.json" files from ui module, i had to delete them every time when running ui module using npm directly if i had ran it before using maven and vice versa.  

##NPM Commands
   # Build Angular in ui/src
        npm install                                        # install node modules
        npm run build                                      # Build the project
        npm start                                          # Starts Angular server
        
## Maven Commands
        
        # Build and Test
        mvn clean install  # note: this will run ui e2e tests using mocks, there is no backend tests existing yet
        
        # Test
        mvn test # note: this will run ui e2e tests using mocks, there is no backend tests existing yet
    
        # Running locally
        mvn -f web/pom.xml spring-boot:run                  # starts backend application to serve the restful services          

### How the build process works
There are only  configuration files involved:

- [package.json](ui/src/package.json) where we have a "build" script that runs `ng build`.
- [pom.xml](../pom.xml#L139) in which we configure the frontend-maven-plugin to run this "build" script during the `generate-resources` phase.
- The [.angular-cli](src/.angular-cli.json) file where we specify the output directory for the compiled frontend files, which is
`target/classes/static`.


When we run `mvn clean install` in the UI module, the frontend source files will be compiled and generated at `target/classes/static`,
which is one of the default locations that Spring Boot specifies for static content (the others are /META-INF/resources, /resources and /public).
The generated airfleet-ui.jar is then referenced as a dependency in airfleet-web.


### Features

* ng proxy to spring boot application
* frontend-maven-plugin to help to build angular app with Spring Boot

### Reference

* A Maven plugin that downloads/installs Node and NPM locally, runs NPM install, Grunt, Gulp and/or Karma： https://github.com/eirslett/frontend-maven-plugin
