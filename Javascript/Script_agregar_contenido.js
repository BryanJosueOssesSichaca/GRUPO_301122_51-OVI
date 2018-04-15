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
		//contenido de actividades
		cargarContenido("#actividades","actividades.html")

		/* Agregar contenido de Github */
		cargarContenido("#Articulo-Git","Principal_git.html");
		cargarContenido("#configuracion-Git","configuracionGIT.html");
		cargarContenido("#inicial-Git","CreandoClonandoGit.html");
		cargarContenido("#gitWork-Git","TrabajandoConGit.html");
		cargarContenido("#gitHubWork-Git","TrabajandoConGithub.html");
		cargarContenido("#github-video","videoGithub.html");
		/* Agregar contenido de HTML */
		cargarContenido("#Articulo1-HTML5","Principal_HTML5.html");
		cargarContenido("#Sintaxis-HTML5","Sintaxis_HTML.html");
		cargarContenido("#Novedades-1-HTML5","Novedades_1_HTML5.html");
		cargarContenido("#Novedades-2-HTML5","Novedades_2_HTML5.html");
		/* Agregar contenido de CSS */
		cargarContenido("#Articulo1-CSS3","Principal_CSS3.html");
		/* Agregar contenido  editores de codigo */
		cargarContenido("#intro_editores","Principal_editores.html");		
		cargarContenido("#editor_notepad","EditorNotepad_HTML5.html");
		cargarContenido("#editor_brackets","EditorBrackets.html");
		cargarContenido("#editor_sublime","EditorSublime.html");
	});
})();