class RatesBoard {
    constructor() {
        this.items = document.getElementById('items')
    }

    fillItem(code, value){
        let item = document.createElement('div')
        item.className = 'item'
        let itemCode = document.createElement('div')
        itemCode.className = 'item__code'
        itemCode.textContent = code
        item.appendChild(itemCode)
        let itemValue = document.createElement('div')
        itemValue.className = 'item__value'
        itemValue.textContent =  value
        item.appendChild(itemValue)
        let itemCurrency = document.createElement('div')
        itemCurrency.className = 'item__currency'
        itemCurrency.textContent = 'руб.'
        item.appendChild(itemCurrency)
        this.items.appendChild(item)
    }
}

const loader = document.getElementById('loader')

let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        const valutesObject = (JSON.parse(xhr.responseText)).response.Valute
        Object.values(valutesObject).forEach(element => {
            loader.classList.remove('loader_active')
            const ratesBoard = new RatesBoard()
            ratesBoard.fillItem(element.CharCode, element.Value)
        });
    }
})