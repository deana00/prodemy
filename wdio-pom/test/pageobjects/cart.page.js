import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emptyCart() { return $('span.*=Keranjang masih kosong') }
    get addBtn() { return $('.view > .cntr_inp_btn:last-child') }
    get subtractBtn() { return $('.view > .cntr_inp_btn:first-child') }
    get qtyInput() { return $('.cntr_inp_content') }
    get priceTotal() { return $('span.=Rp') }
    get paymentBtn() { return $('.button-lanjut-ke-pembayaran') }
    get chooseAnotherBtn() { return $('button-mau-pilih-pilih-lagi') }
    get removeItemBtn() { return $('.action_icon_circle') }

    async open() {
        await super.open('cart')
    }

    async getQty() {
        return Number(this.qtyInput.getValue())
    }

    async setQty(val) {
        return this.qtyInput.setValue(val) 
    }

    // async isEmpty() {
    //     const empty = await this.emptyCart.getText()
    //     return true
    // }
}

export default new CartPage();