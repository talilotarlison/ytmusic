function adicionarMusic() {

var myMusicDoHtml = document.getElementById("linkMusic");
var myMusicInput = myMusicDoHtml.value;
var myMusicInputID = myMusicInput.substr(17) 

//console.log(myMusicInput2)




var LinkMusicNaTela = document.getElementById("video");
var link1 = '<iframe width="600" height="650" src="'
var link2 = "https://www.youtube.com/embed/" + myMusicInputID
var link3 = '" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>'
var link4 = '<h1><font color="white">Faixa Desconhecida</font><h1><h1><font color="gray">Artista Desconhecido</font></h1>'
var linkFinal = link1+link2+link3+link4

console.log(linkFinal)

LinkMusicNaTela.innerHTML = linkFinal



}
//<iframe width="450" height="370" src="https://www.youtube.com/embed/_YMXB9qzc2I" title="player" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>


//https://youtu.be/zp9mQbGvndw









