import { remote } from "webdriverio";

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': '95675c76',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings'
}

const wdOpts = {
    hostname: '127.0.0.1' || 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities
}

async function runTest() {
    const driver = await remote(wdOpts)
    try {
        const soundAndVibration = await driver.$('//android.widget.TextView[@resource-id="android:id/title" and @text="Sound & vibration"]')
        await soundAndVibration.click()

        const vibrateWhenSilent = await driver.$('(//android.widget.LinearLayout[@resource-id="android:id/widget_frame"])[2]')
        await vibrateWhenSilent.click()
        
        await driver.pause(1000) 

        const vibrateWhenRinging = await driver.$('(//android.widget.LinearLayout[@resource-id="android:id/widget_frame"])[3]')
        await vibrateWhenRinging.click()
        
        // masih belum fleksibel
        const alarmAudioSet = await driver.$('//android.widget.SeekBar[@resource-id="com.android.settings:id/seek_bar" and @text="280.0"]')
        await alarmAudioSet.click()

        // const autoLock = await driver.$('//android.widget.ListView[@resource-id="android:id/list"]/android.widget.LinearLayout[7]/android.widget.RelativeLayout/android.widget.RelativeLayout')
        // await autoLock.click()

        // const autoLock2Min = await driver.$('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="2 minutes"]')
        // await autoLock2Min.click()
    } finally {
        await driver.pause(3000) 
        await driver.deleteSession(); 
    }
}

runTest(console.error)