import Page from "./page.js"

class PaymentPage extends Page {
    get $form() { return $('.chkfm_f > .cmn_flex_wrapper > div > .view > .cmn_flex_wrapper > .view > .text') }

    async getFormTitle() {
        await this.$form.waitForDisplayed()
        const title = await this.$form.getText()
        return title
    }
}

export default new PaymentPage()