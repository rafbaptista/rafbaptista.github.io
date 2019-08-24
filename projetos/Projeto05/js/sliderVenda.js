$(function(){
    //Qtd de imgs a serem exibidas
    var imgShow = 3;

    // Qtd de imagens puladas ao clicar na seta
    var qtdSlides = 1;

    
    // Máximo de índice que podemos ter baseado na qtde de imagens que estamos exibindo no momento, qtd de imagens que faltam ser exibidas e qtd de imagens puladas ao clicar na seta. 
    //Math..ceil sempre arredonda o maior número inteiro caso nossa divisão seja quebrada.
    var maxIndex = Math.ceil((($('.mini-img-wrapper').length - imgShow)/qtdSlides));
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider() {
        // Qtd de imagens (amount)
        var amt = $('.mini-img-wrapper').length;

        // Box pai, contendo as imgs
        var elScroll = $('.nav-galeria-wrapper');

        //Cada img
        var elSingle = $('.mini-img-wrapper');
        
        // Nova largura do container das imagens.
        // Quantidade de imgs, multiplicado por 100.
        // Exemplo: 6 imagens = 600% a nova largura, para quebrarmos a página.
        elScroll.css('width', 100*amt+'%');

        // Nova largura de cada imagem.
        // 100 dividido pela qt de imagens. Ex: 100/6 = 16.66% por imagem.
        // Porém neste caso, como nosso container terá 600% de largura, e cada imagem irá ocupar 16.66% de largura, irá aparecer uma imagem por vez.
        // Logo, se quisermos exibir mais de uma imagem por vez, dividimos o 100 pela quantidade de imagens que queremos exibir.
        elSingle.css('width', (100/imgShow)/amt+'%');
    }

    function navigateSlider() {
        
        $('.arrow-right-nav').click(function(){
            //Caso ainda não esteja no maxIndex, ainda temos imgs a exibir.
            if (curIndex < maxIndex) {
                //Portando incrementamos o index
                curIndex++;
                //Distância em px da nossa próxima img para o começo de nossa galeria.
                var elOff = $('.mini-img-wrapper').eq(curIndex*qtdSlides).offset().left - $('.nav-galeria-wrapper').offset().left;
                //Efeito de scroll
                $('.nav-galeria').animate({'scrollLeft': elOff});
            } 
        })

        $('.arrow-left-nav').click(function(){
            //Caso seja > 0, já exibimos alguma img
            if (curIndex > 0) {
                curIndex--;
                //Distância em px da img anterior para o começo de nossa galeria
                var elOff = $('.mini-img-wrapper').eq(curIndex*qtdSlides).offset().left - $('.nav-galeria-wrapper').offset().left; 
                //Efeito de scroll
                $('.nav-galeria').animate({'scrollLeft': elOff});
            }
        })
    }


    function clickSlider() {
        $('.mini-img-wrapper').click(function(){
            $('.mini-img-wrapper').css('backgroundColor', 'transparent');
            $(this).css('backgroundColor', 'rgb(210,210,210)');
            var img = $(this).children().css('backgroundImage')
            //OU: var img = $(this).find('.mini-img').css('backgroundImage')
            $('.foto-destaque').css('backgroundImage', img);
        })

        //Começa nossa página com a primeira foto já clicada
        $('.mini-img-wrapper').eq(0).click();
    }

})