window.onload = function() { //Função executada após nossa página carregar 100%
	var map; //Variável que irá conter nosso mapa juntamente com nossos parâmetros
		
	function initialize() { //Função com todos os objetos e seus parâmetros para iniciar nosso mapa
		var mapProp = { //Objeto mapProp, que têm algumas propriedades do nosso mapa.
			center: new google.maps.LatLng(-23.675067, -46.544814), //Determina a latitude e longitude de onde nosso mapa irá iniciar (a partir do centro do mapa)
			scrollwheel: false, //se permite zoom no mapa com o scroll do mouse
			zoom: 12, //zoom do mapa
			mapTypeId: google.maps.MapTypeId.ROADMAP //tipo de terreno, onde temos satélite, roadmap entre outros
		}
		
		map = new google.maps.Map(document.getElementById("mapa"),mapProp); //Atribuimos a nossa variavel nosso mapa passando como parâmetro nossa div com id mapa e passando como parâmetro nosso objeto mapProp.

		var currCenter = map.getCenter();
		map.setCenter(currCenter);
	}
	
	function addMarker(lat, long, icon, content, click) { //Função para adicionarmos nosso marcador no mapa, adicionamos 5 parâmetros: latitude e longitude (do marcador), o icone (se é o default da API ou algum personalizado, content (caixa de texto), e click, que irá determinar se para aparecer nosso texto tem que clicar em cima ou não).
		var LatLng = {'lat':lat, 'lng': long}; //Quando iniciarmos a função addMarker, iremos passar lat e long como parâmetro, e iremos popular em LatLng.
		
		var marker = new google.maps.Marker({ //Adicionando um marcador no mapa
			position: LatLng, //Setando sua posição
			map: map, //Mesmo mapa 
			icon: icon //Icone default que iremos passar ao chamar a funcao
		});
		
		var infoWindow = new google.maps.InfoWindow({ //Adicionando uma caixa de texto
			content: content, //Texto que iremos passar ao chamar a funcao
			maxWidth: 200, //largura maxima
			pixelOffset: new google.maps.Size(0,20) //Calcula a posição da nossa caixa de texto em relação ao nosso icone. Deixar como está para ficar centralizado.
		});
		
		//Caso true, um clique em cima do nosso ícone será necessário para abrir a nossa caixa de texto.
		//Caso false, irá simplesmente carregar junto com o mapa.
		if (click == true ) {
			google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
			});
		} else {
			infoWindow.open(map,marker);
		}
	}
	
	initialize();//Inicia nosso mapa.
	
	var conteudo = '<p style="color:black;font-size:13px;padding: 10px;"><b>Venha nos visitar! :)</b></p>'; //Conteudo da nossa caixa de texto, que aceita tags em html.
	addMarker(-23.675067, -46.544814, '', conteudo, false); 
	
}


