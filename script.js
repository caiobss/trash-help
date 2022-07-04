const comunidades =[
    {
        imgcomunidades: '/img/comunidade do pilar.jpg',
        txtcomunidade: 'essa aqui falta tudo'
    },

    {
        imgcomunidades: '/img/danilo-alvesd-RZlA_V9DhvE-unsplash.jpg',
        txtcomunidade: 'Essa aqui agalou tudo'
    },

    {
        imgcomunidades: '/img/comunidade2.jpg',
        txtcomunidade: 'Essa aqui agalou tudo'
    },

    {
        imgcomunidades: '/img/comunidade3.jpg',
        txtcomunidade: 'essa comunidade ta so o pó'
    }
]

let indexComunidades = 0
let imagem = document.querySelector('.infos-content img')
let titulo = document.querySelector('.infos-content h1')
let txt = document.querySelector('.infos-content-txt p')

document.querySelector('.voltar').addEventListener('click', ()=>{
    indexComunidades--
    slider(indexComunidades)
})

document.querySelector('.proximo').addEventListener('click', ()=>{
    indexComunidades++
    slider(indexComunidades)
})

function slider(index){
    imagem.src = comunidades[index].imgcomunidades
    txt.textContent = ('.infos-content-txt p', comunidades[index].txtcomunidade)

}



document.querySelector('.hamburguer').addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('showSidebar')
})
document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('showSidebar')
})