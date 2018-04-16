//Autor Bryan Josue Osses Sichaca

/*
	se declara una función auto-invocada para crear un espacio de nombre independiente y evitar que
	puedan existir coliciones de nombres.
*/
(function(){
	//la función .ready() de jQuery indica que el codigo solo se ejecutará en el momento que document este cargado por completo
	$(document).ready(function(){

		/*
			La función cargarContenido se encarga de cargar el contenido de los documentos HTML en un div con
			el identificador contenido en el index.html.
		*/
		function cargarContenido(id,contenido){
			$(id).click(function(){
				$("#contenido").load(contenido);

				//selecciono el padre del elemento id que se pasa como parametro a la función
				var padre = $(id).parent()[0];
				//cambio la propiedad css background de los li que estan dentro de div.panel a blanco
				$("div.panel ul li").css({"background":"#fff"});
				/*
					recorro cada uno de los li que estan dentro de div.panel y en caso de que el padre
					del elemento id que es pasado como parametro sea uno de esos li cambio la propiedad
					css background a gris claro.
				*/ 
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
		cargarContenido("#Selectores-CSS","Selectores-CSS.html");
		cargarContenido("#Novedades-CSS","Novedades_CSS3.html");
		cargarContenido("#Media-queries-CSS","media-query-css.HTML");
		cargarContenido("#Ejemplo-Basico-CSS","Ejemplo-CSS.html");

		/* Agregar contenido  editores de codigo */
		cargarContenido("#intro_editores","Principal_editores.html");		
		cargarContenido("#editor_notepad","EditorNotepad_HTML5.html");
		cargarContenido("#editor_brackets","EditorBrackets.html");
		cargarContenido("#editor_sublime","EditorSublime.html");
	});
})();