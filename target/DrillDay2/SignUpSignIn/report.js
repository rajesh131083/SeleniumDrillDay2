$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Rajesh_login_drillday2.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up and Login to TechFish Bank",
  "description": "",
  "id": "sign-up-and-login-to-techfish-bank",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 11,
  "name": "Sign in into Bank site",
  "description": "",
  "id": "sign-up-and-login-to-techfish-bank;sign-in-into-bank-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User reopens the bank application with the URL_Rajesh",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters the login credentials_Rajesh",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User login will be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_drillday2_Rajesh.user_reopens_the_bank_application_with_the_URL_Rajesh()"
});
formatter.result({
  "duration": 38291389592,
  "status": "passed"
});
formatter.match({
  "location": "Login_drillday2_Rajesh.user_enters_the_login_credentials_Rajesh()"
});
formatter.result({
  "duration": 76391546990,
  "status": "passed"
});
formatter.match({
  "location": "Login_drillday2_Rajesh.user_login_will_be_successful()"
});
formatter.result({
  "duration": 1546452884,
  "status": "passed"
});
});