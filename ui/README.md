## DEMO ::: UI

##### "Introduction":
1- ui is angular 4 based sub module of this project, its maven based project. On maven level it uses frontend-maven-plugin to run the npm/ng commands you can either use maven commands or you can directly use npm/ng/node commands to run and test this module (ui).

2- this project is intended to use front-end mocks when using protractor e2e testing aiming we should not go to backend to fetch the data.
 
3- For front-end mocks it uses ng-apimocks plugin (all the configuration related required for this plugin resides in e2e/configuration folder) - https://www.npmjs.com/package/ng-apimock

4- All the protractor tests resides in e2e/tests and e2e/mocks contains the mocking data and mocking api
 

##### "NOTE":
In case project is not building please delete "node_module" folder and "pacakge-lock.json" files, i had to delete them every time when running ui module using npm directly if i had ran it before using maven and vice versa.  

##### How it works

###### using npm/ng/node directory (Without mock and with backend server)

~ cd ui (if you are at the root of this project)
~ npm install
~ npm install protractor 
~ npm run start

- Access the url localhost:4200 from the browser i used chrome
- try to navigate through links from the application you will notice that you are able to move from links but you are not able to see the data. I guess you know why because your backend server is not running.
- Run the backend (from cd web using spring boot commands) server which will serve the rest resources
- Now you will notice while navigating through links you are able to see the data as well.

lets run the tests using protractor without mocks

~ protractor protractor.conf.js # this will run all the test under e2e/tests folder without mock tests will fail because tests verifies on mock data.

###### using npm/ng/node directory (with mocks and wihtout backend server)

-- open 1st terminal and run following commands
~ npm run mocks

-- open second terminal and run following commands

 ~ npm install
 
 ~ npm install protractor
 
 ~ install ng-apimock --save-dev
  
 ~ npm run start_with_mocks 
 
- Stop the backend server
- Access the url localhost:4200 from the browser i used chrome
- try to navigate through links from the application you will notice that you are able to move from links and this time you are seeing some data as well in the pages this is mocked data.

lets run tests using this method
~ protractor protractor.conf.js # this will run all the test under e2e/tests this time all tests should pass.


Note: All of this can be done in one command which is "npm run test" will run the mocks and e2e tests as well see the package.json for details about these scripts what they are doing. However you need to install "npm-run-all" before it by running npm install npm-run-all --save-dev"


###### using maven

~ cd ui (if you are at the root of this project)

~ "mvn clean install" or "mvn test" # this will run the e2e tests as well using the mocks and protractor see the ui/pom.xml for detail

mvn will run all the npm run commands which we have manually ran as we saw in previous section
