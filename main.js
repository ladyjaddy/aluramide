function tocaSomPom(seletorAudio){
    const elemento = document.querySelector(seletorAudio).play('');
   
    if(elemento !=null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Elenento não encontrado');
    }
}

document.querySelectorAll('.tecla')



for(contador = 0; < listadeTeclas.length; contador++){


   const instrumento = listadeTlecas[contador]
   
   const tecla = listadeTlecas[contador];
   
   const ideAudio = `#som_${instrumento}`;

    tecla.onclick = fuction(){
           tocaSom(ideAudio);  
    };
        tecla.onkeydown = fuction(){
            if(evento.code === 'Space'||eveneto.code === 'Enter' ){
                tecla.classList.add('ativa');
            }
        }
        tecla.onkeyup = fuction(){
            tecla.classList.remove('ativa');
        }
            
}