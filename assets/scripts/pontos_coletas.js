let section4 = document.querySelector('section.section4')
let sectionState = 'none'
let botao = document.getElementById('botao')

function display(){
    if(sectionState == 'none'){
        section4.style.display = 'initial'
        section4.style.backgroundColor = '#4CAF50'
        sectionState = 'initial'
        botao.innerHTML = 'Saiba Menos'
    } else {
        section4.style.display = 'none'
        sectionState = 'none'
        botao.innerHTML = 'Saiba Mais'
    }
}