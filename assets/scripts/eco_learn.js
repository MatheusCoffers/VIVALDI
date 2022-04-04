let reportagem1 = {
    titulo : "Ecologia",
    p1 : "A Ecologia é a parte da Biologia que estuda as relações dos seres vivos entre si e destes com o meio. O termo, que foi usado pela primeira vez em 1866 por Ernest Haeckel, vem da junção de duas palavras gregas: Oikos, que significa casa, e logos, que quer dizer estudo. Assim sendo, ecologia significa o “estudo da casa” ou o “estudo do habitat dos seres vivos”.",
    p2 : "Ciência ampla e complexa, a Ecologia preocupa-se com o entendimento do funcionamento de toda a natureza. Assim como vários outros campos de estudo da Biologia, ela não é uma ciência isolada.",
    p3 : "Para entendê-la, é necessário, por exemplo, conhecer um pouco de Evolução, Genética, Biologia Molecular, Fisiologia e Anatomia.",
    img : "../images/reportagens/foto_reportagem_1.jpg"
}
let reportagem2 = {
    titulo : "Por que é importante estudar Ecologia?",
    p1 : "Ao estudar a Ecologia, os ecólogos conseguem visualizar de maneira clara como as espécies interagem entre si e conseguem coexistir em determinado ambiente, além de conseguir informações para a compreensão dos motivos que levam uma espécie a viver em uma área e a ausentar-se de outros locais. Também é possível compreender como uma espécie é capaz de influenciar uma determinada comunidade e os impactos gerados por ela.",
    p2 : "Por meio dessas análises, é possível fazer previsões a respeito do futuro de determinadas espécies e as consequências das mudanças nos padrões de uma comunidade.",
    p3 : "É importante destacar também que a Ecologia é fundamental para a compreensão do futuro do planeta. A partir do momento que entendemos as espécies e suas necessidades, conseguimos analisar claramente como nossas atividades influenciam o meio. Sendo assim, o entendimento da Ecologia e a conscientização da população podem ajudar a garantir um futuro sustentável para o planeta.",
    img : "../images/reportagens/foto_reportagem_2.jpg"
}
let reportagem3 = {
    titulo : "Importância da reciclagem",
    p1 : "A Reciclagem é importante tanto para o Meio Ambiente, quanto para as pessoas, é uma ação continuada de coleta e processamento de resíduos que de outra forma seriam jogados como lixo; mas que podem ser reaproveitados e transformados em novos produtos.",
    p2 : "Reciclar ajuda na conservação de recursos naturais como madeira, água e minerais, reduzindo a necessidade de extração de novas matérias-primas. Os materiais de reciclagem não requerem muita energia para serem remanufaturados em comparação com a conversão de novas matérias-primas em produtos utilizáveis, portanto, gera economia.",
    p3 : "Quanto mais reciclar, mais diminuirá os custos com limpeza urbana, além de evitar a poluição reduzindo as emissões de gases de efeito estufa que provocam a mudança climática global, mantendo o Meio Ambiente sustentável para as gerações futuras. A produção de alguns materiais, como o plástico, resulta em grande emissão de fumaça que polui o ar. Muitos produtos químicos utilizados pelas indústrias são nocivos e seus rejeitos são despejados na natureza acabando por poluir a água e o solo.",
    img : "../images/reportagens/foto_reportagem_3.jpg"
}
let reportagem4 = {
    titulo : "Descarte de lixos eletrônico",
    p1 : "A coleta seletiva e a reciclagem desempenham papel fundamental na preservação da espécie humana e oferecem potencial de redução de desigualdades. E o lixo eletrônico demanda atenção especial.",
    p2 : "Ao todo, entre pilhas, baterias de celulares e notebooks e baterias para usos específicos, são descartadas aproximadamente 800 milhões de unidades anualmente no país, o que torna o Brasil um dos principais mercados consumidores de eletrônicos no mundo.",
    p3 : "Quando descartadas de forma incorreta, expostas aos elementos da natureza, a decomposição dessas pilhas e baterias demora entre 100 a 500 anos e no curto prazo esses materiais para liberam substâncias tóxicas que contaminam o solo e a água de lençóis freáticos e nascentes de rios. Materiais como cádmio, cobre, chumbo, manganês, mercúrio e lítio são considerados altamente perigoso à nossa saúde e são liberados por pilhas e bateria em geral. Essas substancias são potencialmente cancerígenas e podem causar problemas neurológicos e anemia.",
    img : "../images/reportagens/foto_reportagem_4.jpg"
}
let reportagem5 = {
    titulo : "Isopor é reciclável?",
    p1 : "Totalmente! O isopor é um plástico inflado e 100% reciclável. Ao descartá-lo na lixeira destinada aos plásticos, garanta que esteja limpo e não contenha partes metálicas, adesivos ou papel. Isso evita prejuízo à máquina que retira o ar presente em seu interior e o prepara para a reciclagem.",
    p2 : "Apesar de ser reciclável, o material é bem pouco reciclado no Brasil, apenas 34% do total produzido no país tem esse fim. Além disso, ele nunca volta a ser isopor. O destino é sempre para novas aplicações em diferentes segmentos.",
    p3 : "Quando descartado corretamente, o isopor pode ser reciclado de diferentes formas:\n- Reciclagem energética: produção de energia elétrica térmica;\n- Reciclagem mecânica: fabricação de novos objetos de plástico;\n- Reciclagem química: fabricação de colas, solventes e, inclusive, sola de calçados.",
    img : "../images/reportagens/foto_reportagem_5.jpg"
}
let reportagem6 = {
    titulo : "Descarte do óleo",
    p1 : "O óleo de cozinha usado pode parecer inocente, mas é um grande contaminante. Um litro de óleo descartado no ralo da pia pode poluir um milhão de litros de água potável. É a quantia equivalente ao consumo de uma pessoa em 14 anos de vida.",
    p2 : "Além disso, quando o óleo usado é descartado na pia, acumula no encanamento e retém resíduos, entope a rede de esgoto e o fluxo de água, o que causa graves problemas de higiene e até gastos com a limpeza da caixa de gordura. Sem contar que a sujeira atrai insetos, baratas e ratos.",
    p3 : "Por isso nunca jogue o óleo de cozinha em ralos, pias ou no solo. O correto é guardar o óleo usado em garrafas de refrigerante (PET) e fazer o descarte em locais próprios para a coleta.",
    img : "../images/reportagens/foto_reportagem_6.jpg"
}

let reportagens = [reportagem1, reportagem2, reportagem3,  reportagem4, reportagem5, reportagem6]

let reportagem_atual = {
    titulo : document.getElementById('titulo'),
    p1 : document.getElementById('p1'),
    p2 : document.getElementById('p2'),
    p3 : document.getElementById('p3'),
    img : document.getElementById('img')
}

let numReportagem = 1

function valor1(){
    numReportagem = 1
}
function valor2(){
    numReportagem = 2
}
function valor3(){
    numReportagem = 3
}
function valor4(){
    numReportagem = 4
}
function valor5(){
    numReportagem = 5
}
function valor6 (){
    numReportagem = 6
}

function trocarReportagem(){
    reportagem_atual.titulo.innerText = reportagens[numReportagem-1].titulo
    reportagem_atual.p1.innerText = reportagens[numReportagem-1].p1
    reportagem_atual.p2.innerText = reportagens[numReportagem-1].p2
    reportagem_atual.p3.innerText = reportagens[numReportagem-1].p3
    reportagem_atual.img.src = reportagens[numReportagem-1].img
    window.scrollTo(0, 0);
}

