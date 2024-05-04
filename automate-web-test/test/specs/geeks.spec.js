const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('F001 - Fitur Login Geeks for Geeks', () => {
    it('L001 - Error when login with invalid email', async () => {
        await browser.url('https://www.geeksforgeeks.org/')
        
        // signInButton only showed in wider window
        await browser.maximizeWindow()

        const signInButton = await $('a[href="https://auth.geeksforgeeks.org/?to=https://www.geeksforgeeks.org/"]')
        // await signInButton.click()
        if (await signInButton.isClickable()) {
            await signInButton.click()
            console.log('signInButton is clickable')
        } else {
            console.log('signInButton is NOT clickable')
        }


        const signUpTab = await $('input#tab2')
        // await signUpTab.waitForDisplayed(30000)
        if (await signUpTab.isExisting()) {
            await signUpTab.click()
            console.log('signUpTab is clickable')
        } else {
            console.log('signUpTab is NOT clickable')
        }

        const emailInput = await $('#email')
        const passwordInput = await $('#reg-password')
        const organizationInput = await $('#organization')
        const captchaInput = await $('#recaptcha-anchor')
        const submitButton = await $('button[type="submit"]')
        
        // await emailInput.setValue('invalid.email@invalid')
        if (await emailInput.isExisting()) {
            await emailInput.setValue('invalid.email@invalid')
            console.log('email is exist')
        } else {
            console.log("email is NOT exist")
        }

        // await passwordInput.setValue('justPassword')
        if (await passwordInput.isExisting()) {
            await passwordInput.setValue('justPassword')
            console.log('pass is exist')
        } else {
            console.log('pass is NOT exist')
        }

        // await organizationInput.setValue('Automate Web Test')
        if (await organizationInput.isExisting()) {
            await organizationInput.setValue('Automate Web Test')
            console.log('org is exist')
        } else {
            console.log('org is NOT exist')
        }
        // await captchaInput.click()
        // await submitButton.click()

        // const alertMessage = await $('.alert-danger.=Email Invalid')
        // await expect(alertMessage).toHaveText(expect.stringContaining('email invalid'))


        await browser.pause(5000)
    })
})

