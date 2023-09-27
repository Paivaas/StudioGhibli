 fetch('https://ghibliapi.vercel.app/films').then(response => response.json()).then(dados => {
    console.log(dados);

    async function pegarCep(){
        const url = `https://ghibliapi.vercel.app/films`
        const response = await fetch(url)
        const dadosFilme = await response.json()
        return dadosFilme
    }
    
    async function preencherCampos(){
    
        const titulo = document.getElementById('h1')
        const bairro = document.getElementById('bairro')
        const cidade = document.getElementById('cidade')
        const estado = document.getElementById('estado')
        
        const dados = await pegarCep(dadosFilme.value)
    
        titulo.value = dados.logradouro
        bairro.value = dados.bairro
        cidade.value = dados.localidade
        estado.value = dados.uf
    }
  });

const button = document.getElementById('btn')
button.addEventListener('click', preencherCampos)

async function pegarCep(){
    const url = `https://ghibliapi.vercel.app/films`
    const response = await fetch(url)
    const dadosFilme = await response.json()
    return dadosFilme
}

async function preencherCampos(){

    const titulo = document.getElementById('h1')
    
    const dados = await pegarCep(dadosFilme.value)

    titulo.value = dados.title
    
}