const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('F001 - Fitur Login Udemy', () => {
    it('L001 - Error when login with invalid email', async () => {
        // await browser.url('https://www.udemy.com/')
        // const signUpButton = await $('a[data-purpose="header-signup"]')
        // signUpButton.click()
        
        // const verifyHumanCheckbox = await $('input[type="checkbox"]')
        // if ( verifyHumanCheckbox.isExisting() ) {
        //     verifyHumanCheckbox.click()
        // }
        
        await browser.url('https://www.udemy.com/join/signup-popup/')
        
        // using CSS :nth-child
        // const fullnameInput = await $('.ud-compact-form-control-container:nth-child(1)')
        // const emailInput = await $('.ud-compact-form-control-container:nth-child(2)')
        // const passwordInput = await $('.ud-compact-form-control-container:nth-child(3)')
        
        const fullnameInput = await $('input[name="fullname"]')
        const emailInput = await $('input[name="email"')
        const passwordInput = await $('input[name="password"')
        const submitButton = await $('button[type="submit"]')

        // cant call getText because element wasn't found
        // await emailInput.setValue('invalid.email@invalid')

        await fullnameInput.setValue('It is Fullname')
        await emailInput.setValue('invalid.email@invalid.com')
        // await emailInput.setValue('xiboke3974@amankro.com')
        await passwordInput.setValue('justPassword')
        
        await submitButton.click()

        await browser.pause(60000)
        // const alertMessage = await $('[role="alert"]')
        // await console.log(alertMessage.isExisting())

        // const alertMessage = await $('.ud-form-note')
        // console.log(alertMessage.getText())
        // await expect(alertMessage).toHaveText(expect.stringContaining('not a valid email address'))
        

        // const homePage = await $('[data-testid="my-courses"]')
        // await expect(homePage.isClickable())

        const alertMessage = await $('[data-purpose="safely-set-inner-html:auth:error"]')
        console.log(await alertMessage.isExisting())
        // await expect(alertMessage).toHaveText(expect.stringContaining('problem creating your account'))
        
        await browser.pause(5000)
    })
})

