// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// noinspection JSAnnotator
const { SpecReporter } = require('jasmine-spec-reporter');

// noinspection JSAnnotator
exports.config = {
  // useAllAngular2AppRoots & ngApimockOpts required for ng-apimock
  useAllAngular2AppRoots: true,
  ngApimockOpts: {
    angularVersion: 2,
    hybrid: false
  },
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  // beforeLaunch & onPrepare required for ng-apimock
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    // noinspection JSAnnotator
    browser.ngApimock = require('./.tmp/ngApimock/protractor.mock.js');
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
