let divDepartamento = document.getElementById('departamento')

let divDepartamentoAtual = {
    titulo : document.getElementById('titulo_departamento'),
    texto : document.getElementById('texto_departamento'),
    img : document.getElementById('img_departamento')
}

let depAdministracao = {
    titulo : "Administração e Financeiro",
    texto : "Administração é a tomada de decisão sobre recursos disponíveis, trabalhando com e através de pessoas para atingir objetivos.<br><br>O financeiro é responsável pela administração dos recursos financeiros da empresa. Seu papel é garantir uma boa gestão de patrimônio, a fim de que a organização possa reduzir seus gastos e maximizar seus lucros.",
    img : "../images/departamentos/administracao/foto_lider.jpeg"
}
let depComunicacao = {
    titulo : "Comunicação",
    texto : "A comunicação é a ação de transmitir uma mensagem e está associada à linguagem e interação. A comunicação não é somente a fala, mas sim um tipo de linguagem, seja verbal ou não verbal ou até mesmo o uso simultâneo destes dois tipos. A comunicação é, portanto, um elemento essencial da interação social humana.",
    img : "../images/departamentos/comunicacao/foto_lider.jpeg"
}
let depInovacao = {
    titulo : "Tecnologia e Inovação",
    texto : "Inovação é criar algo novo, é introduzir novidades, renovar, recriar. A inovação é sempre tida como sinônimo de mudanças e/ou melhorias de algo já existente<br><br>Tecnologia é o uso de técnicas e do conhecimento adquirido para aperfeiçoar e(ou) facilitar o trabalho com a arte, a resolução de um problema ou a execução de uma tarefa específica.",
    img : "../images/departamentos/inovacao/foto_lider.jpeg"
}
let depLogistica = {
    titulo : "Logística e Eventos",
    texto : "Logística é uma especialidade da administração responsável por prover recursos e informações para a execução de todas as atividades de uma organização.<br><br>Evento é qualquer acontecimento que reúna pessoas em um espaço físico em torno de um objetivo.",
    img : "../images/departamentos/logistica/foto_lider.jpeg"
}
let depMarketing = {
    titulo : "Marketing",
    texto : "É a arte de explorar, criar e entregar valor para satisfazer as necessidades do mercado por meio de produtos ou serviços que possam interessar aos consumidores. A finalidade do marketing é criar o valor e chamar a atenção do cliente, gerando relacionamento lucrativos para ambas as partes.",
    img : "../images/departamentos/marketing/foto_lider.jpeg"
}
let depQualidade = {
    titulo : "Qualidade",
    texto : "Qualidade, segundo a ISO (International Standardization Organization), é a adequação e conformidade dos requisitos que a própria norma e os clientes estabelecem. Em outras palavras, a qualidade é o nível de perfeição de um processo, serviço ou produto entregue pela sua empresa.",
    img : "../images/departamentos/qualidade/foto_lider.jpeg"
}
let depResponsabilidade = {
    titulo : "Responsabilidade Social",
    texto : "A Responsabilidade social é tudo aquilo que beneficia o meio social, ou seja, ações que uma pessoa ou empresa adotam e trazem algum benefício à sociedade.",
    img : "../images/departamentos/responsabilidade/foto_lider.jpeg"
}
let depTreinamento = {
    titulo : "Treinamento e Desenvolvimento",
    texto : "É todo o processo de capacitação de colaboradores. Treinamento é uma prática de curta duração que prepara o colaborador para executar suas atividades com excelência dentro da empresa.<br><br>Já o Desenvolvimento é um conjunto de práticas educacionais de longo prazo para melhorar o desempenho pessoal dos colaboradores.",
    img : "../images/departamentos/treinamento/foto_lider.jpeg"
}

let departamentos = {
    administracao : depAdministracao,
    comunicacao : depComunicacao,
    inovacao : depInovacao,
    logistica : depLogistica,
    marketing : depMarketing,
    qualidade : depQualidade,
    responsabilidade : depResponsabilidade,
    treinamento : depTreinamento
}

let departAtual = 'inovacao'

function departAtualAdm(){departAtual = 'administracao'}
function departAtualCom(){departAtual = 'comunicacao'}
function departAtualIno(){departAtual = 'inovacao'}
function departAtualLog(){departAtual = 'logistica'}
function departAtualMar(){departAtual = 'marketing'}
function departAtualQua(){departAtual = 'qualidade'}
function departAtualRes(){departAtual = 'responsabilidade'}
function departAtualTre(){departAtual = 'treinamento'}

function trocarDepartamento(){
    divDepartamentoAtual.texto.innerHTML = departamentos[departAtual].texto
    divDepartamentoAtual.titulo.innerHTML = departamentos[departAtual].titulo
    divDepartamentoAtual.img.src = departamentos[departAtual].img

}






function departDisplayInitial(){
    divDepartamento.style.display = "initial"
}

function departDisplayNone(){
    divDepartamento.style.display = "none"
}