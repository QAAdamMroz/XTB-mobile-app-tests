
# Type Script Appium webdriver IO Mocha Native app tests

## Prepare appium inspector
- [NodeJS](https://nodejs.org/en/download/) should be installed on the local machine where tests needs to be run.
- [Appium](https://appium.io/docs/en/2.0/quickstart/install/) npm i --location=global appium
- appium driver install uiautomator2
- install [android studio](https://developer.android.com/studio?hl=pl)  and create new device (image) + added path do sdk (rpm on my computer > settings > advanced settings > variable envi) default path is C:\Users\{user}\AppData\Local\Android\Sdk\platform-tools
- install java JDK and add path envi variable (rpm on my computer > settings > advanced settings > variable envi)
- install [appium inspector](https://github.com/appium/appium-inspector)


Daily run appium inspector:
1. Turn on console >> "cmd" and type "appium -p 4724" (port number could be different, but it have to be the same as in Appium inspector)
2. Run android studio + device (must be added sys Path Variable (rpm on my computer > settings > advanced settings > variable envi) to C:\Users\{user}\AppData\Local\Android\Sdk\platform-tools if correctly is created image of android)
3. Android inspector 
Change port for 4724
and type
{
  "platformName": "Android",
  "appium:platformVersion": "13.0", /MUST BE the same as soft version
  "appium:deviceName": "Android", //should be the same as "adb devices"
  "appium:app": "", //path to APK file for instance "C:\\umpalumpa.apk"
  "appium:automationName": "UIAutomator2"
}
Save suit
4. push start session

## Running the tests 
- [NodeJS](https://nodejs.org/en/download/) should be installed on the local machine where tests needs to be run.
- [Appium](https://appium.io/docs/en/2.0/quickstart/install/) type in console (cmd) `npm i --location=global appium`
- type in console (cmd) `appium driver install uiautomator2`
- type in console (cmd) `npm install typescript ts-node --save-dev`
- Clone this repository using the command `git clone https://github.com/royal-gambit/betting_test_scripts.git`
- Navigate to the root folder "betting_test_scripts\ts-appium\webdriverio-ts-appium" of the project and Run the command `npm install`
- Change: config.capabilities in webdriverio-ts-appium\config\wdio.android.conf.ts for yours config
- If config is for emulator turn on it in Android Studio; else make sure device is connected and visible in console (cmd) adb devices
- type in console (cmd) `npm install @wdio/cli`
- from directory "betting_test_scripts\ts-appium\webdriverio-ts-appium" in cmd `npx wdio config` 
- a.) A project was detected at "X:\", correct? `Y` 
- b.) What type of testing would you like to do? `E2E Testing - of Web or Mobile Applications`
- c.) Where is your automation backend located?`On my local machine`
- d.) Which environment you would like to automate? `Mobile - native, hybrid and mobile web apps, on Android or iOS`
-  e.) Which mobile environment you'ld like to automate? `Android - native, hybrid and mobile web apps, tested on emulators and real devices    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)`
-  f.)Which framework do you want to use? `Mocha (https://mochajs.org/)`
-  g.) Do you want to use a compiler?`TypeScript (https://www.typescriptlang.org/)`
-  h.) Do you want WebdriverIO to autogenerate some test files? `n`
-  i.) Which reporter do you want to use?`spec`
-  j.)Do you want to add a plugin to your test setup? hit `ENTER`
-  k.) Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! `N`
-  l.) Do you want to add a service to your test setup? `appium`
-  m.)  Do you want me to run `npm install` > `Y`
-  n.) Continue with Appium setup using appium-installer (https://github.com/AppiumTestDistribution/appium-installer)? `n`
- Remove `wdio.conf` we have already config files in config folder
- To run the tests in console type- `npm run ` and extension like "test-XTB"


  **_Any troubles? Contact with Adam Mróz._**

## Add new runner script
- add row in package "test-{appName}"
- add new config file (copied from other )
- create new folder in tests/specs for test script
- create new folder in pageobjects/mobile with selectors

# **_Any troubles? Contact with Adam Mróz._**
