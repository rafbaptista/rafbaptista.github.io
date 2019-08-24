$(function(){        
    var imgs = $('.img-small-galeria');
    var modal = $('.bgModalSmall');
    var imgModal = $('.imgModalSmall');
    var arrowLeft = $('.arrowLeft');
    var arrowRight = $('.arrowRight');
    var btnClose = $('.btnClose');
    var miniImgBox = $('.miniImgBox');
    var imgMiniWrapper = $('.imgMiniWrapper');
    var scrollTop; 
    var urlAtual;
    var imgModalUrl;
    var urlMiniImg;
    var indexImgAtual;

    $(imgs).click(function(){
        //Pega o index da img atual clicada
        indexImgAtual = $(this).index();       

        //Endereço do backgroundImage da imagem atual
        urlAtual = recuperaBackgroundgImg(indexImgAtual);
        
        //Calcula o scrollTop da págona
        scrollTop = $(window).scrollTop();

        //Altera a posição do modal baseado no scrollTop. assim nosso modal ocupa 100% da viewport mesmo se a página estiver com algum scroll :)
        modal.css('top', scrollTop);

        //Verifica necessidade de conter setas baseado no index da imagem clicada
        verificaSeta(indexImgAtual);

        //Revela nosso modal
        modal.fadeIn();

        //Caso janela seja redimensionada, recalcula o scrollTop e ajusta o modal para a viewport atual
        $(window).resize(function(){
            scrollTop = $(window).scrollTop();
            modal.css('top', scrollTop);
        })

        //Exibe a img do Modal atual com base na iamgem que clicamos
        exibeImg(indexImgAtual);
          
        //Altera a borda do miniImg com base no clique da img na galeria
        verificaBordaNoClique(urlAtual);
    })

    arrowRight.click(function(){
        indexImgAtual = indexImgAtual + 1;
        verificaSeta(indexImgAtual);
        exibeImg(indexImgAtual);
        imgModalUrl = recuperaBackgroundgImgModal();
        verificaBordaNoClique(imgModalUrl);
    })

    arrowLeft.click(function(){
        indexImgAtual = indexImgAtual - 1;
        verificaSeta(indexImgAtual);
        exibeImg(indexImgAtual);
        imgModalUrl = recuperaBackgroundgImgModal();
        verificaBordaNoClique(imgModalUrl);
    })

    //Possibilita fecharmos o Modal apertando ESC
    $(document).keydown(function(e){
        if (e.keyCode == 27) {
            modal.fadeOut();
        }
    })

    //Ao clicarmos no bgModal, fecha o mesmo. 
    modal.click(function(){
        $(this).fadeOut();  
    })

    //Impede o fechamento de nosso Modal se clicarmos em algum filho (setas laterais, imagens exibidas)
    pararPropagacaoModal();

    //Ao clicarmos no botão de fechar, fecha nosso modal
    btnClose.click(function(){
        modal.fadeOut();
    })

    //Cria nossas miniImgs na mesma qtde da galeria    
    criaMiniImgsBaseadoNaGaleria();

    //Uma vez criadas nossas imagens, mapeamos em variáveis para utilizá-las
    var miniImg = $('.miniImgPadding');
    var miniImgQtd = miniImg.length;
    var mini = $('.miniImg');

    //Tamanho de cada miniImg incluindo padding, border e margin (pois está setado como true)
    var boxSize = miniImg.outerWidth(true);
    var sizeImgMiniWrapper = imgMiniWrapper.outerWidth(true);

    //Remove todas as bordas aplicadas ao MiniImg, exceto na imagem clicada.
    //Atualiza o index atual, verificamos necessidade de setas para a nova imagem, e exibimos a nova imagem.
    mini.click(function(){
        $('.miniImg').css('border', '0') ;
        $(this).css('border', '4px solid #EB2D2D');
        indexImgAtual = $(this).index();       
        // verificaSeta(indexImgAtual);
        urlMiniImg = $(this)[0].style.backgroundImage;
        imgModal.css('backgroundImage', urlMiniImg);
    });
    
    //Nova largura de cada imagem.
    defineNovaLarguraMiniImg();

    //Nova largura do container das imagens.   
    defineNovaLarguraMiniImgBox();
    
    
    //////////////////////////////////////////////Funções////////////////////////////////////////////

    function recuperaBackgroundgImg(indexImgAtual) {
        return imgs.eq(indexImgAtual)[0].style.backgroundImage.replace(/"/g, '');
    }

    function verificaBordaNoClique(url) {
        mini.each(function(){
            var urlImgPequena = $(this)[0].style.backgroundImage.replace(/"/g, '');

            if (url == urlImgPequena) {
                mini.css('border', '2px solid #ccc')
                $(this).css('border', '4px solid #EB2D2D');
                return false
            }
        })      
    }

    function recuperaBackgroundgImgModal() {
        return imgModal[0].style.backgroundImage.replace(/"/g, '');
    }

    function exibeImg(indexImgAtual) {
        imgModal.css('backgroundImage', '');

        //Endereço completo da img atual
        var bg = imgs.eq(indexImgAtual).attr('style');

        //Splitando para recuperarmos a url que ficará salva na posição 1 do array
        var bgImg = bg.split("'")[1];
    
        imgModal.css('transition', '1s');
        // Altera o background
        imgModal.css('backgroundImage', 'url('+bgImg+')');
    }

    function verificaSeta(index) {
        if (index == 0) {
            arrowLeft.css('display', 'none')
        } else if (index == imgs.length - 1) {
            arrowRight.css('display', 'none')
        } else {
            arrowLeft.css('display', 'inline-block')
            arrowRight.css('display', 'inline-block')
        }
    }

    function criaMiniImgsBaseadoNaGaleria() {
        for (i=0; i<imgs.length; i++) {
            var miniImgPaddingCriada = $('<div class="miniImgPadding"></div>');
            var miniImgCriada = $('<div class="miniImg"></div>');
            var urlImgAtual = imgs.eq(i)[0].style.backgroundImage;
    
            miniImgPaddingCriada.appendTo(miniImgBox);
            miniImgCriada.appendTo(miniImgPaddingCriada);
            miniImgCriada.css('backgroundImage', urlImgAtual);
        }
    }

    function pararPropagacaoModal(){
        imgModal.click(function(){
            event.stopPropagation();
        })
    
        arrowRight.click(function(){
            event.stopPropagation();
        })
    
        arrowLeft.click(function(){
            event.stopPropagation();
        })
    
        btnClose.mouseover(function(){
            event.stopPropagation();
        })

        imgMiniWrapper.click(function(){
            event.stopPropagation();
        });
    }

    function defineNovaLarguraMiniImg() {        
        //Nova largura de cada imagem.
        //100% do tamanho do pai dividido pela quantidade de imagens. Resultado em %
        miniImg.css ('width', 100/miniImgQtd+'%');
    }

    function defineNovaLarguraMiniImgBox(){
        //100% do tamanho do pai multiplicado pela qtd de imagens. Resultado em %
        miniImgBox.css('width', 100*miniImgQtd+'%');

        //Largura do imgBox será de: 
        //Largura total de cada miniImg (incluindo padding, margin, border) * qtd de imagens. Dividido pelo nosso wrapper (com padding, margin e border), e multiplicado por 100 para transformarmos em %.
        var newSize = (((boxSize * miniImgQtd)/sizeImgMiniWrapper)*100);
        //Arrendondamos sempre para cima para nosso box sempre quebrar (overflow), e colocamos o valor em % para ser responsivo.
        miniImgBox.css('width', Math.ceil(newSize)+"%");
    }

})