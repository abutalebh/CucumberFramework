$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/FlighRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Register link functionlaity in Flight page",
  "description": "",
  "id": "testing-register-link-functionlaity-in-flight-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6934124648,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Checking the Register link on Home page",
  "description": "",
  "id": "testing-register-link-functionlaity-in-flight-page;checking-the-register-link-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on the Register link in the Home page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.openFlightApplication()"
});
formatter.result({
  "duration": 3243466179,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.navigatetoregisterpage()"
});
formatter.result({
  "duration": 591696374,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.registerpagedisplayed()"
});
formatter.result({
  "duration": 18612973,
  "status": "passed"
});
formatter.after({
  "duration": 1251075000,
  "status": "passed"
});
});