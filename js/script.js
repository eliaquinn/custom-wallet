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

        if(arr[0].value == '' || arr[1].value == '') {
            alert('Digite uma descrição e o valor, para adicionar!')
            return
        }
        
        this.addLocalStorage(arr)
        this.arrElements[3].innerHTML = ''
        this.updateRecents()
        
        arr[0].value = ''
        arr[1].value = ''
    }

    updateRecents () {
        let dataStorage = JSON.parse(localStorage.getItem('resources'))

        if(dataStorage == null) return

        dataStorage.forEach(({description, value}) => {
            let isNegative = value[0] == '-'
            if(isNegative) {
                let resource = `
                    <div class="resource negative">
                        <span>${description}</span>
                        <div class="cash">
                            <h3>R$ ${value}</h3>
                            <i class='bx bx-trash' ></i>
                        </div>
                    </div>
                    `
                this.arrElements[3].innerHTML += resource
                return
            }

            let resource = `
                <div class="resource positive">
                    <span>${description}</span>
                    <div class="cash">
                        <h3>R$ ${value}</h3>
                        <i class='bx bx-trash' ></i>
                    </div>
                </div>
                `
            this.arrElements[3].innerHTML += resource
        })
    }

    addLocalStorage(objectArr) {
        const values = objectArr.map(arr => arr.value)

        const resources = [
            {description: values[0], value: values[1]}
        ]

        let isEmpty = localStorage.length <= 0

        if(isEmpty) {
            localStorage.setItem('resources', JSON.stringify(resources))
            return
        }

        let dataStorage = JSON.parse(localStorage.getItem('resources'))

        dataStorage.push(resources[0])

        localStorage.setItem('resources', JSON.stringify(dataStorage))
    }

    validateInputs () {
        let inputs = this.arrElements.filter(data => data.id == 'description' || data.id == 'cash')

        this.insertData(inputs)
    }

    init () {
        let paragraph = this.arrElements[3].querySelector('p')
        let hasContent = localStorage.getItem('resources')

        if(hasContent !== null) {
            paragraph.style.display = 'none'
        }        

        this.updateRecents()
        this.arrElements.forEach(data => {
            if(data.id == 'add') {
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