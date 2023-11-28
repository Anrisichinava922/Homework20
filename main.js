const button = document.querySelector('.kamateli')
const dushashi = document.querySelector('.dushashi')
let h2 = document.querySelector('h2')
let span = document.querySelector(".Advice span")

button.addEventListener('click', () => {
    dushashi.classList.toggle('active');
    getData();
})

async function getData(){
    h2.textContent = "Loading..."

    button.setAttribute('disabled', true)
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();
    button.removeAttribute('disabled')

    span.textContent = data.slip.id
    h2.innerHTML = data.slip.advice
}