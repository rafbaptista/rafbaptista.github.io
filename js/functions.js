$(function(){
    var menuLateral = $('.menuLateral');
    var navDesktop = $('nav.menuDesktop');
    var imgLogo = $('.imgLogo');
    var menuLateralAltura = menuLateral.height();
    var navDesktopAltura = navDesktop.height();
    var seta = $('.fa-angle-double-down');
    var about = $('.about');
    var dist = calculaDist();
    var previousScrollPosition;
    var menuMobile = $('.fa-bars');
    var slideProjeto = $('.slider');

    centralizarMenuDesktop();


    //Some com o menuMobile e o botão de fechar
    menuMobile.click(function(){
        $('.menuMobile').fadeIn();
        $('.fa-times').fadeIn();
    })

    //Some com o menuMobile e o botão de fechar
    $('.fa-times').click(function(){
        $('.menuMobile').fadeOut();
        $(this).fadeOut();
    })

    
    //Recalcula a distância do nosso Menu ao entrarmos no responsivo.
    //Recalcula o offTop da variável dist (responsável pelo nosso botão de scrollDown na página inicial).
    $(window).resize(function(){
        centralizarMenuDesktop();
        dist = calculaDist();
        // verificaScrollDirecao();
        // location.reload();
    })

    //Animação ao clicarmos no botão
    seta.click(function(){
        $('html, body').animate({'scrollTop': dist}, 1000);
    })

    //TO DO
    $('.sliderSingle').click(function(){
        var el = $(this);
        verificarLinksProjetos(el);
    })

    //Scroll suave no menu
    $('.menuDesktop ul li a').click(scrollSuave);


    
    //Configuração do slider
    slideProjeto.slick({
        'infinite': true,
        'slidesToShow': 1,
        'arrows': false,
        'dots': true,
        'autoplay': true,
        'autoplaySpeed': 3000,
        'pauseOnHover': false,
        'pauseOnFocus': false,
        'speed': 2000,
    });


    //Ao clicarmos em qlqr item do nosso menu Mobile
    //Fecha o menu e o botão de fechar e realiza animação até determinada section.
    $('.menuMobile li a').click(function(){
        event.preventDefault();
        $('.menuMobile').fadeOut();
        $('.fa-times').hide();
        var href = $(this).attr('href');
        var offsetTop = $(href).offset().top;
        $('html, body').animate({'scrollTop': offsetTop - menuLateralAltura},1000)
    });
    

    
    function centralizarMenuDesktop() {
        navDesktop.css('top', (menuLateralAltura/2) - (navDesktopAltura/2) - 54);
    }



    function verificarLinksProjetos(el) {
        console.log(el.attr('attr'));
    }

    function scrollSuave() {
        //ID de cada elemento que clicarmos
        var href = $(this).attr('href');

        var offsetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop': offsetTop},1000)
        
        //Evitar que nossa página fique sem animação
        event.preventDefault();
    }

    function calculaDist() {
        if ($(window).width() > 768) {
            dist = $('.projetos').offset().top;
        } else {
            dist = $('.projetos').offset().top - menuLateralAltura;
        }
            return dist
    }

    function verificaScrollDirecao() {
        if ($(window).width() > 768) {
            menuLateral.show();
        } else {

        var currentScrollPosition= $(window).scrollTop();
        
        if (currentScrollPosition > previousScrollPosition) {
        //   console.log('down')
          menuLateral.stop().fadeIn();
        }else if(currentScrollPosition < previousScrollPosition){
        //   console.log('up')
          menuLateral.stop().fadeOut();
        }
        previousScrollPosition = currentScrollPosition;
    }
}
})