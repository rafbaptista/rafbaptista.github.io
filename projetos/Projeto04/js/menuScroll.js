$(function(){
    $('nav a').click(scrollSuave);

    function scrollSuave() {
        //ID de cada elemento que clicarmos
        var href = $(this).attr('href');

        //Distância do ID para o topo do nosso documento
        //Precisamos pegar nosso elemento que possui o ID passado no href. Por isso utilizamos $(href), pois precisamos do elemento que contém esse ID, não só o ID em si. A distância está contida no elemento. O ID em si é só uma string.
        var offsetTop = $(href).offset().top;
        
        //Utilizamos o efeito de scrollTop (rolar a página para baixo) no valor de distância do nosso ID para o topo, em 1 segundo.
        //Utlizamos html e body por razões de conflitos de navegador
        $('html, body').animate({'scrollTop': offsetTop},1000)
        
        //Evitar que nossa página fique sem animação
        event.preventDefault();
    }
})