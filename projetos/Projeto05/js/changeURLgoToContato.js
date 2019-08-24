$(function(){
    //Manipulação de URL para irmos para a página de contato com efeito de scroll a partir de todas as páginas.

    //Diretório atual do projeto
    var directory = 'C:/Users/Rafael/Desktop/Projeto 05/';

    //Alterando a URL
    $('a[goto=contato]').click(function(){
        location.href = directory+'index.html?contato';
        return false;       
    })

    checkUrl();

    function checkUrl() {
        //Array dividindo a URL
        var url = location.href.split('/');

        //Pega a última posição do array e divide pelo caractere ?, desta maneira, nosso elemento [1] será a página alvo. (contato)
        var curPage = url[url.length-1].split('?');
        
        //Caso o elemento [1] esteja preenchido..
        if (curPage[1] != undefined && curPage[1] == 'contato') {
            $('header nav a').css('color', 'black');
            $('footer nav a').css('color', 'white ');
            $('a[goto=contato]').css('color', '#EB2D2D');
            $('html, body').animate({'scrollTop': $('#contato').offset().top});           
        }   
    }
})