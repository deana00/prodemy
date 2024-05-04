const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('F001 - Fitur Login Udemy', () => {
    it('L001 - Error when login with invalid email', async () => {
        await browser.url('https://www.udemy.com/join/signup-popup/')

        const fullnameInput = await $('input[name="fullname"]')
        const emailInput = await $('input[name="email"]')
        const passwordInput = await $('input[name="password"]')
        const submitButton = await $('form[data-disable-loader="true"] > button[type="submit"]')

        await fullnameInput.setValue('It is Fullname')
        await emailInput.setValue('invalid.email@invalid')
        await passwordInput.setValue('justPassword')
        await submitButton.click()
        
        const alertMessage = await $('div[role="alert"]')
        await expect(alertMessage).toHaveText(expect.stringContaining('not a valid email address'))
        
        await browser.pause(5000)
    })
})

