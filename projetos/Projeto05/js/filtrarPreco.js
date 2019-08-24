$(function(){
    //Barra de progresso
    var currentValue = 0;

    var preco_maximo = 70000;
    var preco_atual = 0;
        
    //Não há nenhum evento de "arrastar" o mouse, utilizaremos a variável isDrag.
    //isDrag é true enquanto estamos clicados com mouse em pointer-barra.
    var isDrag = false;
        
    //Caso clicado, altera o valor do isDrag.
    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })
        
    //Caso o usuário pare de arrastar o pointer, altera novamente o isDrag.
    $(document).mouseup(function(){
        isDrag = false;
        //Já que não estamos mais filtrando, ativamos novamente a opção de ativar a seleção de texto na página
        enableTextSelection();
    })
        
    //Barra preço só irá funcionar caso o mouse esteja se movendo e o isDrag seja true.
    $('.barra-preco').mousemove(function(e){
        if (isDrag == true) {
            //Enquanto estamos filtrando o preço, desativamos a opção de selecionar o texto para uma melhor performance
            disableTextSelection();
            
            //Objeto barra-preco
            var elBase = $(this);
            
            //e.pageX = distância no eixo X entre o mouse e o documento
            //elBase.offset().left = distância no eixo X entre o documento e a barra de preço
            //mouseX = Distância em pixels entre o mouse e nossa barra de preço.
            var mouseX = e.pageX - elBase.offset().left;
            
            //Restringindo de 0 até a largura do elemento pai (barra de preço)
            if (mouseX < 0) {
                mouseX = 0;
            } else if (mouseX > elBase.width()) {
                mouseX = elBase.width();
            }

            //Valor de mouseX em porcentagem
            var currentValue = (mouseX / elBase.width())*100;
            
            //Largura da cor da barra vai ser currentValue em porcentagem
            $('.barra-preco-fill').css('width', currentValue+'%');

            //Nossa bolinha irá se movimentar conforme o movimento do nosso mouse. Subtraímos metade da largura da bolinha (13) para ficar centralizado.
            $('.pointer-barra').css('left', mouseX-13);

            //Nosso preço atual será baseado na posição do nosso mouse.
            preco_atual = (currentValue/100 * preco_maximo);

            //Formatado para $
            preco_atual = formatarPreco(preco_atual);

            //Nosso preço 'inicial' será o preço atual conforme nosso mouse se movimenta.
            $('.preco_pesquisa').html('R$'+preco_atual);
                    
        }
    })
        
    //Desativa a seleção de texto
    function disableTextSelection() {
        $('body').css("-webkit-user-select", "none");
        $('body').css("-moz-user-select", "none");
        $('body').css("-ms-user-select", "none");
        $('body').css("-o-user-select", "none");
        $('body').css("user-select", "none");
    }
        
    //Ativa a seleção de texto
    function enableTextSelection() {
        $('body').css("-webkit-user-select", "auto");
        $('body').css("-moz-user-select", "auto");
        $('body').css("-ms-user-select", "auto");
        $('body').css("-o-user-select", "auto");
        $('body').css("user-select", "auto");
    }
        
    function formatarPreco(preco_atual) {
        //Limitando 2 casas após a vírgula
        preco_atual = preco_atual.toFixed(2);

        //Splitando com base no ponto e criando um array
        preco_array = preco_atual.split('.');
        var novo_preco = formatarTotal(preco_array);
        return novo_preco
    }
        
    //Essa função só funciona até 99.9k pois nosso preço_max só vai até 70k
    function formatarTotal(preco_array) {
        if (preco_array[0] < 1000) { //465,78 > 465.78
            return preco_array[0]+', '+preco_array[1] 
        } else if (preco_array[0] < 10000) { //9,875,89 > //9875.89
            return preco_array[0][0]+'.'+preco_array[0].substr(1,preco_array[0].length)+','+preco_array[1]
        } else { //56.736,12 > //56736.12
            return preco_array[0][0]+preco_array[0][1]+'.'+preco_array[0].substr(2,preco_array[0].length)+','+preco_array[1]
        }
    }
})