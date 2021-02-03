const quest  = require('readline')
const readline = quest.createInterface({
    input: process.stdin,
    output: process.stdout
})

function kalkulator(exit = false, resto='', name='', date='00/00/0000', makan = [{item: '', price: ''}]) {
    if (resto === '') {
        restourant(kalkulator)
    } else if (name === '') {
        kasir(resto, kalkulator)
    } else if (date === '00/00/0000') {
        calendar(resto, name, kalkulator)
    } else if(resto !== '' && name !== '' && date !== '00/00/0000' && exit === false) {
        menu(resto, name, date, makan, kalkulator)
    } else if(exit) {
        let space = ''
        let spaceDate = ''
        let spaceName = ''
        let spaceSlice = ''
        let is = ''
        let dot = ''
        let nameResto = resto.length > 30 ? resto.slice(0,30) : resto
        for (let i = 0; i <= (30 - nameResto.length) / 2; i++) {
            space += ' '
        }
        for (let index = 0; index < (30 - resto.slice(30, resto.length).length) / 2; index++) {
            spaceSlice += ' '
        }
        console.log(resto.length > 30 ? nameResto + '\n' + spaceSlice + resto.slice(30, resto.length) + spaceSlice + '\n': space + nameResto + space + '\n')
        for (let i = 0; i <= (20 - date.length); i++) {
            spaceDate += ' '
        }
        console.log(`Tanggal : ${spaceDate}${date}\n`)
        for (let i = 0; i <= (17 - name.length); i++) {
            spaceName += ' '
        }
        console.log(`Nama Kasir : ${spaceName}${name}\n`)
        for (let i = 0; i <= 30; i++) {
            is += '='
        }
        console.log(is + '\n')
        let sum = 0
        for (let i = 0; i < makan.length; i++) {
            let space = ''
            for (let j = 0; j <= ((28 - (makan[i].item.length > 18 ? 18 : makan[i].item.length)) - makan[i].price.length); j++) {
                space += '.'
            }
            if (makan[i].item.length === 0) {
                spaceDate += ''   
            } else {
                console.log(makan[i].item.length > 20 ? makan[i].item.slice(0,18) + space + 'Rp' + makan[i].price + '\n' + makan[i].item.slice(18, makan[i].item.length) + '\n' : makan[i].item + space + 'Rp' + makan[i].price + '\n')
                sum += parseInt(makan[i].price)
            }
        }
        for (let i = 0; i <= (23 - sum.toString().length); i++) {
            dot += '.'
        }
        console.log('\n\nTotal' + dot + 'Rp' + sum)
        readline.close()
    }
}

function restourant(cb) {
    readline.question('\nInput resto name: ', answer => {
        switch(answer){
            case 'exit':{
                return readline.close()
            }
            default: {
                cb(false, answer, '', '00/00/0000')
            }
        }
    })
}

function kasir(resto, cb) {
    readline.question('\nInput cashier name: ', answer => {
        switch(answer){
            case 'exit':{
                return readline.close()
            }
            default: {
                cb(false, resto, answer, '00/00/0000')
            }
        }
    })
}

function calendar(resto, kasir, cb) {
    readline.question('\nInput date of print (ex: 22/02/2021): ', answer => {
        if (answer.length < 10 || answer.length > 10) {
            console.log('\nWrong Input...!')
            calendar(resto, kasir, kalkulator)
        } else if (answer ==  'exit') {
            return readline.close()
        } else if (parseInt(answer.slice(3, 5)) > 12) {
            console.log('\nWrong Input...!')
            calendar(resto, kasir, kalkulator)
        } else if (parseInt(answer.slice(0, 2)) > 31) {
            console.log('\nWrong Input...!')
            calendar(resto, kasir, kalkulator)
        } else {
            cb(false, resto, kasir, answer)
        }
    })
}

function menu(resto, kasir, date, makan, cb) {
    readline.question("\nInput item or type 'exit' to show receipt: ", item => {
        switch(item){
            case 'exit':{
                return cb(true, resto, kasir, date, makan)
            }
            default: {
                readline.question('\nInput price of item (ex: 20000): ', price => {
                    if (isNaN(parseInt(price))) {
                        console.log('\nWrong Input')
                        menu(resto, kasir, date, makan, kalkulator)
                    } else {
                        let menu = makan
                        menu.push({item: item, price: price})
                        cb(false, resto, kasir, date, menu)
                    }
                })
            }
        }
    })
}

kalkulator()