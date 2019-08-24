$('.btn1').click(scrollSuave);

function scrollSuave() {
    //ID de cada elemento que clicarmos
     var href = $(this).attr('href');

    //Caso não tenha um ID, para a execução para não dar erro e travar o restante do JS.
    if (href.length <= 0) {
        return false
    }

    //Distância do ID para o topo do nosso documento
    //Precisamos pegar nosso elemento que possui o ID passado no href. Por isso utilizamos $(href), pois precisamos do elemento que contém esse ID, não só o ID em si. A distância está contida no elemento. O ID em si é só uma string.
    var offsetTop = $(href).offset().top;
    
    // Utilizamos o efeito de scrollTop (rolar a página para baixo) no valor de distância do nosso ID para o topo, em 1 segundo.
    //Utlizamos html e body por razões de conflitos de navegador
    $('html, body').animate({'scrollTop': offsetTop},1000);

    $('nav.desktop a').css('color', 'black');
    $('footer nav a').css('color', 'white');
    $('nav a[href="#contato"]').css('color', 'red');
    
    
    //Evitar que nossa página fique sem animação
    event.preventDefault();
}