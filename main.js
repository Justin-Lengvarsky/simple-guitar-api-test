document.querySelector('button').addEventListener('click', fetchName);


async function fetchName () {
const guitarName = document.querySelector('input').value

try {
    const response = await fetch(`http://localhost:8000/api/${guitarName}`)
    const data = await response.json()

    console.log(data)
    document.querySelector('#weight').innerText = data.weight;
}
catch (error) {
    console.log(error)
}
}