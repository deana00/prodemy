import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get $emptyCart() { return $('span.*=Keranjang masih kosong') }
    get $addQtyBtn() { return $('.view > .cntr_inp_btn:last-child') }
    get $subtractQtyBtn() { return $('.view > .cntr_inp_btn:first-child') }
    get $qtyInput() { return $('.cntr_inp_content') }
    get $unitPrice() { return $('.bs_sh_crt .cmn_flex_row:last-child .text') }
    get $totalPrice() { return $('.cmn_show_hide') }
    get $subtotal() { return $('.scroll-view > .view > .view > .view > .view > .cmn_flex_row > .cmn_flex_wrapper:last-child > .text') }
    get $paymentBtn() { return $('.button-lanjut-ke-pembayaran') }
    get $chooseAnotherBtn() { return $('.button-mau-pilih-pilih-lagi') }
    get $removeItemBtn() { return $('.action_icon_circle') }
    get $errorMsg() { return $('.scroll-view > .view > .view > .text') } 

    async open() {
        await super.open('cart')
    }

    async getQty() {
        await this.$qtyInput.waitForDisplayed()
        return Number(await this.$qtyInput.getValue())
    }

    async setQty(val) {
        await this.$qtyInput.waitForClickable()
        await this.$qtyInput.click()
        super.clearInput()

        return this.$qtyInput.addValue(val) 
    }

    async getPrice(type) {
        // up stands for unitPrice
        if (type === 'up') {
            await this.$unitPrice.waitForDisplayed()
            const text = await this.$unitPrice.getText()
            const numStr = super.getNumberFromString(text)
            return Number(numStr)
        }
        // tp stands for totalPrice (unitPrice * qty)
        if (type === 'tp') {
            await this.$totalPrice.waitForDisplayed()
            const text = await this.$totalPrice.getText()
            const numStr = super.getNumberFromString(text)
            return Number(numStr)
        }
        // sub stands for subtotal
        if (type === 'sub') {
            await this.$subtotal.waitForDisplayed()
            const text = await this.$subtotal.getText()
            const numStr = super.getNumberFromString(text)
            return Number(numStr)
        }
    }

    async getEmptyCartMsg() {
        await this.$emptyCart.waitForDisplayed()
        const msg = await this.$emptyCart.getText()
        return msg
    }

    async getErrorMsg() {
        await this.$errorMsg.waitForDisplayed()
        const msg = await this.$errorMsg.getText()
        return msg
    }
}

export default new CartPage();