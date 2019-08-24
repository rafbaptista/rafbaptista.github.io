$(function(){
    //Qtd de depoimentos
    var amtDepoimento = $('.depoimento-single').length;
    var curIndex = 0;


    exibirDepoimentos();
    navegarDepoimentos();
    
    setInterval(function(){
        exibirDepoimentos();
        curIndex++;
    },5000);
    

    function exibirDepoimentos() {
        if (curIndex >= amtDepoimento) {
            curIndex = 0;
        } else if (curIndex < 0) {
            curIndex = amtDepoimento -1 ;
        }

        $('.depoimento-single').hide();
        $('.depoimento-single').eq(curIndex).stop().fadeIn(1500);
    }

    function navegarDepoimentos() {
        $('[next]').click(function(){
            curIndex++;                  
            exibirDepoimentos();
        });

        $('[prev]').click(function(){
            curIndex--;
            exibirDepoimentos();
        });
    }

})