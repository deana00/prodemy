import Page from './page.js'


class ProductPage extends Page {
    get $productItem() { return $('a[href="https://kattoen.com/product/kattoen-crewneck-sweater-twotone-creamy-canvas"]') }
    // get $variance() { return $$('.cmn_flex_row > .cmn_flex_wrapper picture') }
    get $size() { return $('.cmn_flex_row > .cmn_flex_wrapper > .view > .view > .text') }
    get $qtyInput() { return $('.cntr_inp_content') }
    get $addToCartBtn() { return $('.button-tambah-ke-keranjang') }
    get $buyNowBtn() { return $('.button-beli-sekarang') }

    async open() {
        await super.open('')
    }

    async setQty(val) {
        await this.$qtyInput.waitForClickable()
        await this.$qtyInput.click()
        super.clearInput()

        return this.$qtyInput.addValue(val)
    }

    async chooseVariance(qty) {
        await this.$size.waitForClickable()
        await this.$size.click()
        await this.setQty(qty)
    }

    async addToCart(qty) {
        await this.chooseVariance(qty)
        await this.$addToCartBtn.waitForClickable()
        await this.$addToCartBtn.click()
    }

    async buyNow(qty) {
        await this.chooseVariance(qty)
        await this.$buyNowBtn.waitForClickable()
        await this.$buyNowBtn.click()
    }

}

export default new ProductPage()
