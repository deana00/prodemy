import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

import CartPage from '../pageobjects/cart.page.js'
import ProductPage from '../pageobjects/product.page.js'

describe('F001 - Fitur Cart Kattoen', async () => {
    describe('Positive Test Cases', async () => {
        it.only('CART_001 - Add quantity by using Add Button', async () => {
            try {
                // assume to be empty
                // then add product item to cart first
                await ProductPage.open()
                await ProductPage.productItem.click()
                await ProductPage.size.click()
                await ProductPage.addToCartBtn.click()

                // then open Cart Page
                await CartPage.open()
                const qty = await CartPage.getQty()
                await CartPage.addBtn.click()
                const newQty = await CartPage.getQty()
                await expect(newQty).toEqual(qty + 1)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_002 - Subtract quantity by using Subtract Button', async () => {
            try {
                await CartPage.open()
                const qty = await CartPage.getQty()
                await CartPage.subtractBtn.click()
                await expect(CartPage.qtyInput).toEqual(qty - 1)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_003 - Add quantity by input a value more than current quantity', async () => {
            try {
                await CartPage.open()
                const qty = await CartPage.getQty()
                await CartPage.setQty(5)

                // for triggering value change
                await CartPage.priceTotal.click()
                
                const newQty = await CartPage.getQty()
                await expect(qty).toBeLessThan(newQty)
                await expect(qty).toEqual(newQty)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_004 - Subtract quantity by input a value less than current quantity', async () => {
            try {
                await CartPage.open()
                const qty = await CartPage.getQty()
                await CartPage.setQty(1)
                await CartPage.priceTotal.click()
                const newQty = await CartPage.getQty()
                await expect(newQty).toBeGreaterThan(qty)
                await expect(qty).toEqual(newQty)
            } catch (error) {
                throw new Error(error)
            }
        })

        it('CART_005 - Remove an item from the cart', async () => {
            await CartPage.open()


        })

        it('CART_006 - Click payment button', async () => {
            await CartPage.open()


        })

        it('CART_007 - Click choose another product button', async () => {
            await CartPage.open()


        })

        it('CART_008 - Click Add Button when quantity reach maximum value', async () => {

        })

        it('CART_009 - Click Subtract Button when quantity reach maximum value', async () => {

        })
    })

    describe('Negative Test Cases', async () => {
        it('CART_010 - Change quantity to be more than stocks', async () => {
            
        })

        it('CART_011 - Change quantity to be less than 1', async () => {

        })
    })
})

// getText() untuk dapatkan textnya
// const ukuran = await CartPage.size.getText()
// await expect(CartPage.size).toHaveText('M')

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