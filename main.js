var SpeechRecognition=window.webkitSpeechRecognition;//Reconhece e converte fala em texto
//Chamando Api de reconhecimento de voz
var recognition = new SpeechRecognition();//Criando objeto de reconhecimento de voz

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
//Pegar o resultado salvo na variável recognition e aplicar o que está na função abaixo
recognition.onresult()=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;//texto convertido da nossa fala
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
}