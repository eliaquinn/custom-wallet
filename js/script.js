const inputDesc = document.getElementById('description')
const inputCash = document.getElementById('cash')
const buttonAdd = document.getElementById('add')

const template = document.querySelector('.recents')

class Wallet {
    constructor () {
        this.arrElements = []
    }

    insertElement(element) {
        this.arrElements.push(element)
    }

    insertData (arr) {
        
        let cash  = arr.filter(negative => negative.id == 'cash').pop('cash')

        if(arr[0].value == '' || arr[1].value == '') {
            alert('Prencha os todos os campos antes de adicionar-los')
            return
        }

        if(cash.value[0] === '-') {
            let resource = `
            <div class="resource negative">
                <span>${arr[0].value}</span>
                <div class="cash">
                    <h3>R$ ${arr[1].value}</h3>
                    <i class='bx bx-trash' ></i>
                </div>
            </div>
            `
            this.arrElements[3].innerHTML += resource
            return
        }

        let resource = `
            <div class="resource positive">
                <span>${arr[0].value}</span>
                <div class="cash">
                    <h3>R$ ${arr[1].value}</h3>
                    <i class='bx bx-trash' ></i>
                </div>
            </div>
            `
        this.arrElements[3].innerHTML += resource
    }

    validateInputs () {
        let inputs = this.arrElements.filter(data => data.id == 'description' || data.id == 'cash')

        this.insertData(inputs)
    }

    init () {
        if(this.arrElements[3].classList.contains('active'))  this.arrElements[3].innerHTML = `<p>Nenhuma atividade recente registrada</p>`
        
        this.arrElements.forEach(data => {
            if(data.id == 'add') {
                this.arrElements[3].classList.remove('active')
                data.addEventListener('click', this.validateInputs.bind(this))
            }
            return
        })
    }

    
}


const wallet = new Wallet()

wallet.insertElement(inputDesc)
wallet.insertElement(inputCash)
wallet.insertElement(buttonAdd)
wallet.insertElement(template)

wallet.init()

console.log(wallet)