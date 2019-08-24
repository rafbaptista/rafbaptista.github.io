$(function(){
    //Tempo em segundos do nosso slider
    var delay = 3000;

    //Index atual
    var curIndex = 0;

    //Quantidade de slides
    var amt;

    //Div bullet que conterá nossos <span>
    var bullet;

    initSlider();
    autoPlay();

    //Inicia nosso slider
    function initSlider(){
        //Quantidade de slides
        amt = $('.sobre-autor').length;

        //Tamanho do nosso container(scrollWrapper)
        //Será 100 multiplicado pela quantade de slides. (1 slide 100%, 2 slides: 200%)
        var sizeContainer = (100 * amt);

        //Tamanho de cada slide. 
        //Para termos todos os slides um do lado do outro, pegamos 100% do tamanho do nosso container, e dividimos pela qtde de slides
        var sizeBoxSingle = (100 / amt);

        //Pegamos cada slide e aplicamos a sua nova largura
        $('.sobre-autor').css('width', sizeBoxSingle+'%');

        //Pegamos nosso container e aplicamos seu novo tamanho, baseado na qtd de slides
        $('.scrollWrapper').css('width', sizeContainer+'%');


        //div bullet
       bullet = $('.slider-bullets');
        
        //Popula bullets
        for (i=0; i< amt; i++) {
             if (i==0) {
                 //Se i = 0, já atribui background para nosso bullet, caso contrário só cria o bullet
                 $(bullet).append('<span style="background-color:grey;"></span>');
            } else {
                $(bullet).append('<span></span>');
            }
        }        
        
    }

    //Função para trocar de slide a partir de um index atual.
    function goToSlider(curIndex) {
        //Pega a distância entre cada slide e a parte left do documento.
        //Pega a distâcnia do pai dos nossos slides (scrollWrapper) da parte left do documento.
        //Subtrai ambas, restanto: a distância entre os próximos slides
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWrapper').offset().left; 
    
        //Animamos para alterar o slide, utilizando scrollLeft em 1 segundo
        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX},1000);
    }

    //Se dermos resize na janela, nossa animação irá parar imediatamente, e irá retornar para a sua posição inicial (scrollLeft: 0), até pararmos de dar resize na janela
    //O stop se certifica de acabar uma animação antes de exibir outra
    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0},1000);
    })

    //Troca nosso slide automaticamente de tempos em tempos
    function autoPlay() {
        setInterval(function(){
            curIndex++;
            if (curIndex == amt) {
                curIndex = 0;
            }
            
            coloreBullet(curIndex);
            goToSlider(curIndex);
            
        },delay)
    }

    function coloreBullet(curIndex) {
        var spanBullet = bullet.find('span');
        spanBullet.css('backgroundColor', 'rgb(200,200,200)');
        spanBullet.eq(curIndex).css('backgroundColor', 'grey');

    }

    

})