function adicionarMusic() {

var myMusicDoHtml = document.getElementById("linkMusic");
var myMusicInput = myMusicDoHtml.value;
var myMusicInputID = myMusicInput.substr(17) 

//console.log(myMusicInput2)




var linkMusicNaTela = document.getElementById("video");
var linkEmbedID = "https://www.youtube.com/embed/" + myMusicInputID
var linkIframe = '<iframe width="670" height="640" src="' +linkEmbedID+ '" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>'
var linkArtista = '<h1><font color="white">Faixa Desconhecida</font><h1><h1><font color="gray">Artista Desconhecido</font></h1>'
var linkFinal = linkIframe + linkArtista

console.log(linkFinal)

linkMusicNaTela.innerHTML = linkFinal



}
//<iframe width="450" height="370" src="https://www.youtube.com/embed/_YMXB9qzc2I" title="player" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>


//https://youtu.be/zp9mQbGvndw









