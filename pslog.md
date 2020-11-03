PS D:\ATFWB\New folder\WebdriverIO-angular> npm test wdio.conf.js

> wdio@1.0.0 test D:\ATFWB\New folder\WebdriverIO-angular
> wdio "wdio.conf.js"


Execution of 1 spec files started at 2020-11-03T13:55:38.233Z

Starting ChromeDriver 86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}) on port 4444
Only local connections are allowed.
Please see https://chromedriver.chromium.org/security-considerations for suggestions on keeping ChromeDriver safe.
ChromeDriver was started successfully.
[0-0] RUNNING in chrome - D:\ATFWB\New folder\WebdriverIO-angular\tests\example.test.js

DevTools listening on ws://127.0.0.1:57024/devtools/browser/8c7835f3-286f-4695-adbd-0ab0df2ee573
[0-0] 1
[0-0] PASSED in chrome - D:\ATFWB\New folder\WebdriverIO-angular\tests\example.test.js

 "Video" Reporter:
Using reporter config:[
  "spec",
  [
    "allure",
    {
      "outputDir": "allure-results",
      "disabledWebdriverStepsReporting": true,
      "disabledWebdriverScreenshotReporting": false
    }
  ],
  [
    null,
    {
      "saveAllVideos": true,
      "videoSlowdownMultiplier": 10
    }
  ]
]

Using config:{
  "debugMode": false,
  "logLevel": "info",
  "videoRenderTimeout": 5,
  "outputDir": "_results_",
  "allureOutputDir": "D:\\ATFWB\\New folder\\WebdriverIO-angular\\allure-results",
  "rawPath": "rawSeleniumVideoGrabs",
  "usingAllure": true,
  "saveAllVideos": true,
  "videoSlowdownMultiplier": 10,
  "excludedActions": [],
  "jsonWireActions": [
    "url",
    "forward",
    "back",
    "refresh",
    "execute",
    "size",
    "position",
    "maximize",
    "click",
    "submit",
    "value",
    "keys",
    "clear",
    "selected",
    "enabled",
    "displayed",
    "orientation",
    "alert_text",
    "accept_alert",
    "dismiss_alert",
    "moveto",
    "buttondown",
    "buttonup",
    "doubleclick",
    "down",
    "up",
    "move",
    "scroll",
    "doubleclick",
    "longclick",
    "flick",
    "location"
  ]
}


Max waiting time: 5s

--- Video D:\ATFWB\New folder\WebdriverIO-angular\_results_\Init--Create-User--CHROME--11-03-2020--19-25-44-155.mp4 ---
Waiting for video to exist: 0s
Waiting for video to exist: 1s
Waiting for video to exist: 2s
Waiting for video to be ready: 0s

--- Video D:\ATFWB\New folder\WebdriverIO-angular\_results_\Init--Login-and-Deposit--CHROME--11-03-2020--19-25-52-510.mp4 ---
Waiting for video to exist: 0s
Waiting for video to be ready: 0s

Generated:[
  "D:\\ATFWB\\New folder\\WebdriverIO-angular\\_results_\\Init--Create-User--CHROME--11-03-2020--19-25-44-155.mp4",
  "D:\\ATFWB\\New folder\\WebdriverIO-angular\\_results_\\Init--Login-and-Deposit--CHROME--11-03-2020--19-25-52-510.mp4"
]



Done!


 "spec" Reporter:
------------------------------------------------------------------
[chrome 86.0.4240.111 windows #0-0] Spec: D:\ATFWB\New folder\WebdriverIO-angular\tests\example.test.js
[chrome 86.0.4240.111 windows #0-0] Running: chrome (v86.0.4240.111) on windows
[chrome 86.0.4240.111 windows #0-0] Session ID: 4491fa71587efd7ff5323ea982b6def4
[chrome 86.0.4240.111 windows #0-0]
[chrome 86.0.4240.111 windows #0-0] Init
[chrome 86.0.4240.111 windows #0-0]    ✓ Create User
[chrome 86.0.4240.111 windows #0-0]    ✓ Login and Deposit
[chrome 86.0.4240.111 windows #0-0]
[chrome 86.0.4240.111 windows #0-0] 2 passing (12.1s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:21