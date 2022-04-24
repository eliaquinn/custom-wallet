class Wallet {
    constructor () {
        this.elementArr = []
    }

    addElement (element) {
        this.elementArr.push(element)

        this.validateInputs()
    }

    validateInputs () {
        this.elementArr.forEach(data => {
            
        })
    }
}

const allInputs = document.querySelectorAll('.inputs')

const client = new Wallet()

client.addElement(allInputs)