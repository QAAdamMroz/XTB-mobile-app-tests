import { join } from 'path';
import config from '../config/wdio.shared.local.conf';

// ============
// Specs
// ============
config.specs = [
    '../tests/specs/*.ts',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "emulator-5554",
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:appWaitActivity': '*',
        //'appium:ignoreHiddenApiPolicyError':"true",
        // The path to the app
        'appium:app': join(process.cwd(), './apps/XTB.apk'),
        // @ts-ignore
        //'appium:appWaitActivity': 'pl.mealon.betting_app',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];
/*
 platformName: 'Android',
        //maxInstances: 1,
        'appium:deviceName': 'Pixel_XL_API_33',
        'appium:platformVersion': '13.0',


"platformName": "Android",
  "appium:platformVersion": "13.0",
  "appium:deviceName": "emulator-5554",
  "appium:app": "E:\\REPO\\betting_test_scripts\\js-appium\\sportsbook\\app-fuksiarz.apk",
  "appium:automationName": "UIAutomator2"
*/

exports.config= config;