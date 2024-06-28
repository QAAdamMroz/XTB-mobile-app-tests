import { join } from 'path';
import config from './wdio.shared.local.conf';
import{ yourPlatformName,yourPlatformVersion, yourDeviceName, } from './device.settings';

// ============
// Specs
// ============
config.specs = [
    '../tests/specs/XTB/*.ts',
];

// ============
// Capabilities ./apps/app-fuksiarz.apk
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: yourPlatformName,
        "appium:platformVersion": yourPlatformVersion,
        "appium:deviceName": yourDeviceName,
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/XTB.apk'),
        // @ts-ignore
        'appium:noReset': false,
        'appium:appWaitForLaunch': false,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;