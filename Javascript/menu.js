//Autor Bryan Josue Osses Sichaca

/*
	se declara una función auto-invocada para crear un espacio de nombre independiente y evitar que
	puedan existir coliciones de nombres.
*/
(function(){
	/*
		al objeto window se le asigna una función anonima en el evento onload
		lo cual evita que el codigo se ejecute antes de que la pagina cargue.
	*/ 
	window.onload = function(){

		//seleccionamos los elementos que tengan la clase acordeon del DOM del documento HTML.
		var acordeon = document.getElementsByClassName("acordeon");
		//var hora = document.querySelector(".hora");
		//var now = new Date();

		/*
			con un bucle for se recorre la selección de elementos con la clase acordeon y a cada uno
			se le asigna una función anonima que se ejecutará cuando ocurrá el evento click.
		*/
		for(i=0; i<acordeon.length; i++){
			acordeon[i].addEventListener("click",function(e){
				//con el método toggle() de classList podemos alternar entre clases en este caso la clase active de css
				this.classList.toggle("active");
				/*
					con un bloque if comprobamos si la clase es icon-minus o icon-plus y se alterna.
				*/
				var panel = this.nextElementSibling;
				var icon = this.childNodes[0];
				if(icon.classList == "icon-minus"){
					icon.classList.remove("icon-minus");
					icon.classList.add("icon-plus");
				}else{
					icon.classList.remove("icon-plus");
					icon.classList.add("icon-minus");
				}
				panel.classList.toggle("desplegable");
			});
		}

		//hora.textContent = now.getDate() + " / " + now.getFullYear() ;

		var menu = document.querySelector("button.menu-toggle");
		console.log(menu);
		menu.addEventListener("click",function(e){
			var panel = document.querySelector("nav.pane");
			this.classList.toggle("activo");
			panel.classList.toggle("plegable");

		});

		
	}
})();
