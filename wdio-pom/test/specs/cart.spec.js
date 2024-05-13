import { expect } from '@wdio/globals'

import cartPage from '../pageobjects/cart.page.js'
import productPage from '../pageobjects/product.page.js'
import paymentPage from '../pageobjects/payment.page.js'
import categoryPage from '../pageobjects/category.page.js'

describe('F001 - Fitur Cart Kattoen', async () => {
    before('Add Product Item', async () => {
        // assume to be empty
        // then add product item to the cart first
        await productPage.open()
        await productPage.$productItem.click()
        await productPage.addToCart(1)
    })

    describe('Positive Test Cases', async () => {
        it('CART_001 - Add quantity by using Add Button', async () => {
            try {
                await cartPage.open()
                const qty = await cartPage.getQty()
                await cartPage.$addQtyBtn.click()
                const newQty = await cartPage.getQty()

                await expect(qty).toEqual(expect.any(Number))
                await expect(newQty).toEqual(expect.any(Number))
                await expect(newQty).toEqual(qty + 1)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_002 - Subtract quantity by using Subtract Button', async () => {
            try {
                await cartPage.open()
                const qty = await cartPage.getQty()
                await cartPage.$subtractQtyBtn.click()
                const newQty = await cartPage.getQty()

                await expect(qty).toEqual(expect.any(Number))
                await expect(newQty).toEqual(expect.any(Number))
                await expect(newQty).toEqual(qty - 1)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_003 - Add quantity by input a value more than current quantity', async () => {
            try {
                await cartPage.open()
                const qty = await cartPage.getQty()
                await cartPage.setQty(5)
                const newQty = await cartPage.getQty()

                await expect(qty).toEqual(expect.any(Number))
                await expect(newQty).toEqual(expect.any(Number))
                await expect(newQty).toBeGreaterThan(qty)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_004 - Subtract quantity by input a value less than current quantity', async () => {
            try {
                await cartPage.open()
                const qty = await cartPage.getQty()
                await cartPage.setQty(3)
                const newQty = await cartPage.getQty()

                await expect(qty).toEqual(expect.any(Number))
                await expect(newQty).toEqual(expect.any(Number))
                await expect(newQty).toBeLessThan(qty)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_005 - Click payment button', async () => {
            try {
                await cartPage.open()
                await cartPage.$paymentBtn.click()
                const title = await paymentPage.getTitle()
                const url = await paymentPage.getUrl()
                const checkoutForm = await paymentPage.getFormTitle()
    
                await expect(title).toHaveText('Checkout')
                await expect(url).toHaveText(expect.stringContaining('https://kattoen.com/checkout/'))
                await expect(checkoutForm).toHaveText('Form Pemesanan')
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_006 - Click choose another product button', async () => {
            try {
                await cartPage.open()
                await cartPage.$chooseAnotherBtn.click()
                const title = await categoryPage.getTitle()
                const url = await categoryPage.getUrl()
                
                await expect(title).toHaveText('Semua Produk')
                await expect(url).toHaveText('https://kattoen.com/product/category/')
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_007 - Total price of an item should be Unit Price * Quantity', async () => {
            try {
                await cartPage.open()
                const totalPriceStated = await cartPage.getPrice('tp')
                const unitPrice = await cartPage.getPrice('up')
                const qty = await cartPage.getQty()
                const totalPrice = qty * unitPrice
                
                await expect(totalPriceStated).toEqual(expect.any(Number))
                await expect(totalPrice).toEqual(expect.any(Number))
                await expect(totalPrice).toEqual(totalPriceStated)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_008 - Remove an item from the cart', async () => {
            try {
                await cartPage.open()
                await cartPage.$removeItemBtn.click()
                // const emptyMsg = await cartPage.getEmptyCartMsg()
                const emptyMsg = await cartPage.$emptyCart

                // await expect(emptyMsg).toHaveText(expect.stringContaining('Kosong'))
                await expect(emptyMsg).toBeDisplayed()
            } catch (error) {
                throw new Error(error)
            }
        })

        // it.skip('CART_009 - Subtotal of products should be sum of Total price of all items', async () => {
        //     await cartPage.open()
        //     const subtotalStated = await cartPage.getPrice('sub')
        //     const totalPrice = await cartPage.getPrice('tp')
        //     const subtotal = 
        // })
    })

    describe('Negative Test Cases', async () => {
        it('CART_009 - Change quantity to be less than 1', async () => {
            
                await cartPage.open()
                await cartPage.setQty(0)
                await cartPage.$paymentBtn.click()
                // const errorMsg = await cartPage.getErrorMsg()
                const errorMsg = await cartPage.$errorMsg
                
                // await expect(errorMsg).toHaveText('Produk tidak ditemukan')
                await expect(errorMsg).toBeDisplayed()
            
        })
    })
})

// getText() untuk dapatkan textnya
// const ukuran = await cartPage.size.getText()
// await expect(cartPage.size).toHaveText('M')

// await browser.url('https://kattoen.com/product/category/')
// const categoryTab = await $('span.=Kategori')
// await expect(categoryTab).toHaveText('Kategori')

// await browser.url('https://kattoen.com/')
// const size = await $('.cmn_flex_row > .cmn_flex_wrapper > .view > .view > .text')
// console.log(size)



// TUGAS

// - cari website ecommerce yang memiliki fungsi keranjang
// - buat positive dan negative test case untuk fitur memasukkan barang ke keranjang menggunakan wdio
// - pastikan sudah menggunakan metode POM
// - push ke github
// - kumpulkan linknya disini