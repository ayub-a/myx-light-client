type Currency = 'SUM' | 'RUB'

export const priceFormatter = {
    symbol: {
        SUM: ' сум',
        RUB: ' ₽',
    },
    defaultPrice(price: number, currency: Currency) {
        return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + this.symbol[currency]
    },
    priceWithDiscount(price: number, discount: number, currency?: Currency) {
        const priceWithDiscount = Math.trunc(price * (1 - discount / 100))
        const formated = String(priceWithDiscount).replace(/\B(?=(\d{3})+(?!\d))/g, currency ? ' ' : '')

        return currency ? formated + this.symbol[currency] : formated
    },
}
