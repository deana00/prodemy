const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://dqlab.id/signup')

        const emailInput = await $('input#input_email')
        const phoneInput = await $('input#input_phone')
        const passwordInput = await $('input#input_password')
        const tncCheckbox = await $('#termcondint')
        const captchaCheckbox = await $('#g-recaptcha-area')
        const submitButton = await $('button[type="submit"]')
        const errorNotif = await $('#notiferror > .alert')

        await emailInput.setValue('invalid.email@invalid')
        await phoneInput.setValue('081234567891')
        await passwordInput.setValue('justPassword')
        await tncCheckbox.click()
        await captchaCheckbox.waitForDisplayed()
        await captchaCheckbox.click()
        await submitButton.click()

        await errorNotif.waitForDisplayed()
        await expect(errorNotif).toHaveText(expect.stringContaining('Email Not Valid'))

    })
})

