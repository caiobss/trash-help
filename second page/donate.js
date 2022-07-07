const comunidades =[
    {
        imgcomunidades: '/img/comunidade do pilar.jpg',
        txtcomunidade: 'Do alto de um corredor no primeiro andar, em um dos blocos, Maria Lúcia Gomes, 62 anos, aposentada, observa de máscara o movimento na rua e a entrada do seu prédio. “Eu tenho varizes e feridas nas pernas, aí não posso andar muito”, disse. Ela mora sozinha em um apartamento com um quarto, sala, cozinha e banheiro.'
    },

    {
        imgcomunidades: '/img/danilo-alvesd-RZlA_V9DhvE-unsplash.jpg',
        txtcomunidade: 'Leandra Patrícia, 40, trabalha como ambulante e faz bicos como manicure. Ela destaca o trabalho das ONGs e empresas junto à comunidade. “O pessoal da Ponte entregou algumas cestas na semana passada. O Porto Digital também”, afirmou. Na última sexta-feira (27), a ONG Visão Mundial fez uma ação junto à Pilar distribuindo kits com material de prevenção contra a contaminação, como álcool em gel, desinfetante e álcool para limpeza. A organização também distribuiu cestas básicas.'
    },

    {
        imgcomunidades: '/img/comunidade2.jpg',
        txtcomunidade: 'Jairo Walterlan da Silva, 28, não tem emprego fixo. Ele conta que a falta de trabalho formal é um problema crônico da comunidade. “Boa parte das pessoas daqui está desempregada. O pessoal trabalha com comércio, vendendo bebida. Com essa situação toda, todo mundo está sem ter de onde tirar o sustento”, relatou. Segundo ele, seus vizinhos estão procurando se cuidar na medida do possível. “A gente busca lavar as mãos e zela para os mais velhos não irem muito à rua”, contou.'
    },

    {
        imgcomunidades: '/img/comunidade3.jpg',
        txtcomunidade: 'Rosineide Santana, 59, tem artrose e faz terapia no posto de saúde da localidade. Ela teve que parar o tratamento por conta da pandemia. “Não estou podendo mais ir desde que essa situação começou”, disse. Auxiliar de serviços gerais, está desempregada e recebe Bolsa Família. Mora com um filho adulto e dorme na sala de casa, juntando cadeiras numa cama improvisada.'
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