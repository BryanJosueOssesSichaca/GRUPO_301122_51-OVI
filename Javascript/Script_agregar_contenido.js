(function(){
	$(document).ready(function(){

		function cargarContenido(id,contenido){
			$(id).click(function(){
				$("#contenido").load(contenido);

				var padre = $(id).parent()[0];
				$("div.panel ul li").css({"background":"#fff"});

				for(i = 0; i < $("div.panel ul li").length; i++){

					if(padre == $("div.panel ul li")[i]){
						$(padre).css({"background":"#ECECEC"});
					}
				}
			});

		}
		$("#contenido").load("contenido_principal.html");

		/* Para agregar Contenido llamar a la función cargarContenido() 

			parametro 1: el Id del elemento que actua como boton
			parametro 2: pagina.html del contenido
		*/

		//contenido del index.html
		cargarContenido("#index","contenido_principal.html");
		//contenido autores.html
		cargarContenido("#autores","autores.html");

		/* Agregar contenido de Github */
		cargarContenido("#Articulo-Git","Principal_git.html");
		cargarContenido("#configuracion-Git","configuracionGIT.html");
		cargarContenido("#inicial-Git","CreandoClonandoGit.html");
		cargarContenido("#gitWork-Git","TrabajandoConGit.html")
		cargarContenido("#github-video","videoGithub.html");
		/* Agregar contenido de HTML */
		cargarContenido("#Articulo1-HTML5","Principal_HTML5.html");
		/* Agregar contenido de CSS */
		cargarContenido("#Articulo1-CSS3","Principal_CSS3.html");
		/* Agregar contenido de Editores de codigo */
		cargarContenido("#editor_notepad","EditorNotepad_HTML5.html");
	});
})();