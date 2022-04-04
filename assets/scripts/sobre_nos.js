let divDepartamento = document.getElementById('departamento')

let divDepartamentoAtual = {
    titulo : document.getElementById('titulo_departamento'),
    texto : document.getElementById('texto_departamento'),
    img : document.getElementById('img_departamento')
}

let depAdministracao = {
    titulo : "Administração",
    texto : "O setor administrativo é uma ampla parte da empresa responsável pelo planejamento estratégico e pela gestão de pessoal e atividades que fazem o negócio acontecer.<br><br>A área administrativa pode acumular funções de outras áreas que se tornam parte deste setor, como os recursos humanos ou as finanças.<br><br>A administração é uma área abrangente que atua como a liderança de setores da empresa, como a produção, compras, marketing, comercial ou logística, e a interação entre estes.",
    img : "../images/departamentos/administracao/foto_grupo.jpg"
}
let depComunicacao = {
    titulo : "Comunicação",
    texto : "A comunicação é o processo por meio do qual uma pessoa codifica uma mensagem contendo as suas ideias, de modo que outra pessoa possa decodificar a mensagem e ter acesso àquilo que estava na mente da primeira pessoa. Em termos mais simples, é o ato de transmitir o que pensamos, o que pode ser feito por meio da fala, da escrita, do desenho, dos símbolos, dos gestos, da linguagem corporal, das expressões faciais, e por aí vai.<br><br>Na vida de uma empresa, a comunicação é extremamente necessária, tanto no que diz respeito aos seus públicos internos (colaboradores e parceiros de negócios) quanto aos seus públicos externos (os clientes, o governo, a concorrência e a sociedade como um todo).",
    img : "../images/departamentos/comunicacao/foto_grupo.jpg"
}
let depInovacao = {
    titulo : "Inovação e Tecnologia",
    texto : "O objetivo de uma área de inovação é explorar novas oportunidades de mercado e olhar para ferramentas que podem melhorar suas atividades. Para isso, a área deve se conectar e estar informada sobre tecnologias, métodos, processos, programas e projetos<br><br>Tais como: <br>• Criação de estratégias novas;<br>• Desenvolvimento da cultura de inovação;<br>• Busca por inovações no mercado;<br>• Desenvolvimento do intraempreendedorismo;<br>• Aquisições de outras empresas inovadoras;<br>• Análise de mercado e concorrentes.",
    img : "../images/departamentos/inovacao/foto_grupo.jpg"
}
let depLogistica = {
    titulo : "Logística",
    texto : "É o responsável por gerenciar os materiais, produtos e recursos de uma empresa e pela organização operacional. Ele administra o estoque, controla o armazenamento, cuida da compra de suprimentos necessários, planeja a movimentação interna, gerencia a distribuição entre fábricas, centros e varejo, bem como é encarregado pelo transporte e entrega dos produtos. Ele trabalha em áreas da empresa como almoxarifado, recebimento, planejamento e controle da produção, compras, entre outros, sempre de forma integrada.<br><br>Além disso, o profissional de logística faz planejamento estratégico, para que a empresa funcione da melhor forma possível, visando sempre a agilidade, rapidez, otimização dos processos e o menor custo possível. ",
    img : "../images/departamentos/logistica/foto_grupo.jpg"
}
let depMarketing = {
    titulo : "Marketing",
    texto : "é um conjunto de táticas de mercado que auxiliam no crescimento da empresa. O marketing tem como objetivo descobrir quem é o seu cliente, conhecer melhor o seu público-alvo e criar estratégias, a fim de chamar sua atenção e conquistá-lo. O departamento de marketing é um dos principais setores de uma empresa e vem ganhando importância cada vez mais. Muitas vezes confundido com o setor de vendas, o marketing exerce uma função diferente, pois não atua diretamente na venda do produto ou serviço.<br><br>O departamento de marketing tem como principal tarefa o estudo do mercado e dos clientes, além da elaboração de estratégias que atingem de forma efetiva e tornem a marca relevante para esses futuros clientes, resultando em mais vendas.",
    img : "../images/departamentos/marketing/foto_grupo.jpg"
}
let depQualidade = {
    titulo : "Qualidade",
    texto : "O setor de qualidade de uma empresa conta com uma grande quantidade de atribuições. Estabelecer padrões de produção, checar o que está sendo realizado e corrigir falhas são alguns exemplos disso. Exatamente por isso, ele contribui de diversas formas com o sucesso da empresa.<br><br>Esse setor permite a redução de erros operacionais, o aumento da margem líquida do negócio e o reaproveitamento de recursos estratégicos. Em última análise, tais vantagens contribuem para a construção de um negócio mais próspero, perene e competitivo.",
    img : "../images/departamentos/qualidade/foto_grupo.jpg"
}
let depResponsabilidade = {
    titulo : "Responsabilidade Social",
    texto : "Empresas socialmente responsáveis são àquelas que possuem a capacidade de repensar seus conceitos, posturas e condutas. Além disso, conseguem se reestruturar para participar mais ativamente do bem-estar de todos os envolvidos em suas relações.<br><br>São várias as possibilidades de ações e elas podem ser tanto externas, como reuso de água, plantio de árvores, distribuição de alimentos em comunidades carentes quanto internas, como cursos de capacitação dos colaboradores, incentivos às famílias, alimentação saudável e balanceada nos refeitórios.",
    img : "../images/departamentos/responsabilidade/foto_grupo.jpg"
}
let depTreinamento = {
    titulo : "Treinamento e Desenvolvimento",
    texto : "Quando falamos em treinamento, a ideia é exercitar ou melhorar algo que já é desenvolvido ou trabalhado de certa maneira. Por isso, este termo é designado para aquele tipo de aprendizado considerado mais técnico. Ou seja, quando o colaborador irá passar por um processo de aprendizagem de sua atividade técnica do dia a dia ou que já é desempenhada.<br><br>Já o Desenvolvimento, é o tipo de aprendizado que busca trabalhar certos aspectos ou características que abrangem também os aspectos humanos e pessoais de cada colaborador. Como por exemplo, incentivar o trabalho em equipe, incentivar o relacionamento ou até mesmo trabalhar os processos de engajamento.",
    img : "../images/departamentos/treinamento/foto_grupo.jpg"
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