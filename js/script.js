const inputDesc = document.getElementById('description')
const inputCash = document.getElementById('cash')
const buttonAdd = document.getElementById('add')

const template = document.querySelector('.recents')

const addResource = () => {
    buttonAdd.addEventListener('click', () => {
        if(inputCash.value !== '' && inputDesc.value !== '') {
            let insertRecents = `
            <div class="resource positive">
                <span>${inputDesc.value}</span>
                <div class="cash">
                    <h3>R$ ${inputCash.value}</h3>
                    <i class='bx bx-trash' ></i>
                </div>
            </div>
            `

            template.innerHTML += insertRecents
        }
        return
    })
}


addResource()