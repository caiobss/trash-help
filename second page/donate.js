const comunidades =[
    {
        imgcomunidades: '/img/comunidade do pilar.jpg',
        txtcomunidade: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae quaerat, aut itaque sunt ullam maxime rem totam, eaque asperiores facere nihil cumque veritatis distinctio consectetur! Et voluptatibus nulla aperiam.'
    },

    {
        imgcomunidades: '/img/danilo-alvesd-RZlA_V9DhvE-unsplash.jpg',
        txtcomunidade: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae quaerat, aut itaque sunt ullam maxime rem totam, eaque asperiores facere nihil cumque veritatis distinctio consectetur! Et voluptatibus nulla aperiam.'
    },

    {
        imgcomunidades: '/img/comunidade2.jpg',
        txtcomunidade: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae quaerat, aut itaque sunt ullam maxime rem totam, eaque asperiores facere nihil cumque veritatis distinctio consectetur! Et voluptatibus nulla aperiam.'
    },

    {
        imgcomunidades: '/img/comunidade3.jpg',
        txtcomunidade: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae quaerat, aut itaque sunt ullam maxime rem totam, eaque asperiores facere nihil cumque veritatis distinctio consectetur! Et voluptatibus nulla aperiam.'
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