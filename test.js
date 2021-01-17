const data = {
  displayedName: {
    displayedName: {
      value: ['Профиль маячковый ПВХ 10 мм L3м'],
      description: 'Полное наименование товара для клиента',
    },
  },
  stock: {
    stocks: {
      34: {
        2: '35',
        3: '42',
        4: '58',
        5: '57',
        6: '112',
        20: '51',
        22: '78',
        26: '34',
        32: '22',
        35: '358',
        40: '28',
        43: '68',
        45: '58',
        49: '31',
        51: '29',
        56: '42',
        62: '26',
        64: '0',
        65: '57',
        86: '15',
        114: '41',
        117: '46',
        143: '46',
        162: '4',
        171: '0',
        176: '12',
      },
    },
  },
}

class ServerResponseHandler {
  constructor(resData) {
    this.resData = resData
  }

  getName() {
    return this.resData.displayedName.displayedName.value[0]
  }
  getShopsInStock() {
    for (let region in this.resData.stock.stocks) {
      const shops = Object.keys(this.resData.stock.stocks[region])
      return shops.filter(
        (shop) => this.resData.stock.stocks[region][shop] !== '0'
      )
    }
  }
  getMostInRegion() {
    for (let region in this.resData.stock.stocks) {
      const shops = Object.keys(this.resData.stock.stocks[region])
      let max = 0
      let result
      shops.forEach((shop) => {
        if (parseInt(this.resData.stock.stocks[region][shop]) > max) {
          max = parseInt(this.resData.stock.stocks[region][shop])
          result = { [shop]: this.resData.stock.stocks[region][shop] }
        }
      })
      return result
    }
  }
}

const testRespons = new ServerResponseHandler(data)

console.log(testRespons.getName())
console.log(testRespons.getShopsInStock())
console.log(testRespons.getMostInRegion())
