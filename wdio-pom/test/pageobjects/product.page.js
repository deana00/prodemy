import Page from './page.js'


class ProductPage extends Page {
    get productItem() { return $('a[href="https://kattoen.com/product/kattoen-crewneck-sweater-twotone-creamy-canvas"]')}
    get size() { return $('.cmn_flex_row > .cmn_flex_wrapper > .view > .view > .text') }
    get addToCartBtn() { return $('.button-tambah-ke-keranjang') }
    get buyNowBtn() { return $('.button-beli-sekarang') }

    async open() {
        await super.open('')
    }

}

export default new ProductPage()
