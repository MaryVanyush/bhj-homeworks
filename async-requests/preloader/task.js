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

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

xhr.addEventListener('load', () => {
    if(xhr.status != 200){
        return
    } else {
        const valutesObject = (JSON.parse(xhr.responseText)).response.Valute
        Object.values(valutesObject).forEach(element => {
            loader.classList.remove('loader_active')
            const ratesBoard = new RatesBoard()
            ratesBoard.fillItem(element.CharCode, element.Value)
        });
    }
})

xhr.addEventListener('error', () => {
    loader.classList.remove('loader_active')
    alert('Запрос не удался')
})