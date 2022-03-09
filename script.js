function adicionarMusic() {

var myMusicDoHtml = document.getElementById("linkMusic");

var myMusicInput = myMusicDoHtml.value;




var LinkMusicNaTela = document.getElementById("video");
var link1 = '<iframe width="600" height="600" src="'
var link2 = myMusicInput
var link3 = '" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>'
var link4 = '<h2><font color="white">Artista Desconhecido - Faixa Desconhecida</font></h2>'
var linkFinal = link1+link2+link3+link4

console.log(linkFinal)

LinkMusicNaTela.innerHTML = linkFinal



}
//<iframe width="450" height="370" src="https://www.youtube.com/embed/_YMXB9qzc2I" title="player" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>












