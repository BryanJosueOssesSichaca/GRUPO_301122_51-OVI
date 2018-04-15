//Autor Bryan Josue Osses Sichaca

/*
	se declara una función auto-invocada para crear un espacio de nombres independiente y evitar que
	puedan existir coliciones de nombres.
*/
(function(){
	/*se le asigna una función anonima al objeto window en el evento load, para evitar que el codigo se eejcute antes
	de que cargue la pagina por completo*/
	window.addEventListener("load",function(){
		console.log("Autor: Bryan Josue Osses Sichaca - OVI diseño web - Grupo 51");
		
		//esta función se encarga de comprobar absolutamente todo el cuestionario
		function check(){
			//stopCrono();

			//primero selecciono todos los input type=radio o type=checkbox y que esten seleccionados (checked).
			var question1 = $("input[type=radio][name=question1]:checked");
			var question2 = $("input[type=checkbox][name=question2]:checked");
			var question3 = $("input[type=radio][name=question3]:checked");
			var question4 = $("input[type=radio][name=question4]:checked");
			var question5 =  $("input[type=checkbox][name=question5]:checked");
			var question6 = $("input[type=radio][name=question6]:checked");
			var question7 = $("input[type=radio][name=question7]:checked");
			var question8 = $("input[type=radio][name=question8]:checked"); 
			var question9 = $("input[type=checkbox][name=question9]:checked");;
 			var question10 = $("input[type=radio][name=question10]:checked");;
			var correcto = 0;
			//console.log(question1[0].value);

			//con un bloque condicional if compruebo que tengan valor los objetos jQuery que se encargan de seleccionar los checkbox y radiobuttons
			if(question1[0] && question2[0] && question3[0] && question4[0] && question5[0] && question6[0] && question7[0] && question8[0] && question9[0] && question10[0]){
				//console.log(question1 +"\n" + question2 +"\n" + question3 +"\n" + question4 +"\n" + question5);

				/*
					a través de un bloque condicional if compruebo si el valor del radio button o checkbox es el indicado
					y en caso de ser el indicado se incrementa la variable correcto y le asigno la clase good de lo contrario
					solo se asigna la clase wrong (esto aplica para los radio buttons). 
				*/
				if(question1[0].value == "3"){
					correcto++;
					question1.parent().addClass("good");
				}else{
					question1.parent().addClass("wrong");
				}

				/*
					a través de un bloque condicional if compruebo si se marcaron menos de 3 checkbox y en tal caso,
					a través de un bucle for recorro los checkobox y compruebo si su valor es el indicado en caso 
					de ser el indicado le agrego la clase good sino la clase wrong y correcto se incrementa 0.5.
					(Esto solo aplica para los checkbox).
				*/
				if(question2.length < 3){
					for(i = 0; i < question2.length; i++){

						question2[i].parentElement.classList.add("wrong");

						if(question2[i].value == "2"){
							correcto = correcto + 0.5;
							question2[i].parentElement.classList.add("good");
						}else if(question2[i].value == "4"){
							correcto = correcto + 0.5;
							question2[i].parentElement.classList.add("good");
						}
					}
				}

				if(question3[0].value == "1"){
					correcto++;
					question3.parent().addClass("good");
				}else{
					question3.parent().addClass("wrong");
				}


				if(question4[0].value == "3"){
					correcto++;
					question4.parent().addClass("good");
				}else{
					question4.parent().addClass("wrong");
				}

				if(question5.length < 3){
					for(i = 0; i < question5.length; i++){

						question5[i].parentElement.classList.add("wrong");

						if(question5[i].value == "2"){
							correcto = correcto + 0.5;
							question5[i].parentElement.classList.add("good");
						}else if(question5[i].value == "3"){
							correcto = correcto + 0.5;
							question5[i].parentElement.classList.add("good");
						}
					}
				}

				if(question6[0].value == "3"){
					correcto++;
					question6.parent().addClass("good");
				}else{
					question6.parent().addClass("wrong");
				}

				if(question7[0].value == "2"){
					correcto++;
					question7.parent().addClass("good");
				}else{
					question7.parent().addClass("wrong");
				}

				if(question8[0].value == "1"){
					correcto++;
					question8.parent().addClass("good");
				}else{
					question8.parent().addClass("wrong");
				}

				if(question9.length < 3){
					for(i = 0; i < question9.length; i++){

						question9[i].parentElement.classList.add("wrong");

						if(question9[i].value == "1"){
							correcto = correcto + 0.5;
							question9[i].parentElement.classList.add("good");
						}else if(question9[i].value == "4"){
							correcto = correcto + 0.5;
							question9[i].parentElement.classList.add("good");
						}
					}
				}

				if(question10[0].value == "2"){
					correcto++;
					question10.parent().addClass("good");
				}else{
					question10.parent().addClass("wrong");
				}

				//alert(correcto);

				/*
					el array messages contiene los mensajes que serán mostrados una vez que se califique el cuestionario
				*/
				var messages = ["Excelente trabajo has obtenido un puntaje perfecto, pero el aprendizaje de Git no termina aquí se recomienda seguir aprendiendo y experimentado con Git y Github.",
				"Muy bien, has obtenido un puntaje sobresaliente, es importante estudiar los temas en los que aun hay vaciós.", 
				"Has obtenido una nota baja, es importante comprender la importancia que tienen los sistemas de control de versiones en el desarrollo de software actual y seguir estudiando ya que existen muchos vaciós sobre Git y Github."];
				var puntaje;

				/*
					creo una seríe de elementos HTML que contendrán los resultados del cuestionario en el elemento 
					con el identificador aswer. 
				*/
				var message = document.createElement("p");
				var puntuacion = document.createElement("h2");
				var promedio = document.createElement("h2");
				var answer = document.getElementById("answer");
				
				/* a traves de condicionales if compruebo en rango la cantidad de puntos obtenidos y dependiendo
					de eso selecciono del array messages uno u otro mensaje a ser mostrado asi como le asigno
					una clase con un color diferente.
				*/
				if(correcto < 7){
					puntaje = 2;
					message.classList.add("parametro");
					promedio.classList.add("parametro");
				}
				if(correcto > 6 && correcto < 10){
					puntaje = 1;
					message.classList.add("init");
					promedio.classList.add("init");
				}
				if(correcto > 9){
					puntaje = 0;
					message.classList.add("clave");
					promedio.classList.add("clave");
				}

				/*
					agrego todo los resultados de las variables correcto, average, messages a answer con el 
					método appendChild. y finalmente le agrego la propiedad visible de css para que se muestre
				*/
				var average = correcto / 10 * 100;

				answer.classList.add("score");
				message.id = "message";
				message.textContent = messages[puntaje];
				puntuacion.id = "score";
				puntuacion.textContent = "Estimad@ estudiante ha obtenido " + correcto + " puntos de 10 maximos posibles";
				promedio.id= "avg";
				promedio.innerHTML = "<span class='big'>Promedio "+ average +"%</span>";
				answer.appendChild(puntuacion);
				answer.appendChild(promedio);
				answer.appendChild(message);
				answer.style.visibility = "visible";
				//document.getElementById("number_correct").innerHTML = "tienes " + correct + " respuestas correctas.";
				this.setAttribute("disabled","disabled");
				$('html, body').animate({scrollTop:0}, 'slow');
			/* en caso de que no esten todos los valores de los checkbox o radio buttons se mostrará este mensaje */
			}else{
				alert("Debes responder todas las preguntas para continuar");
			}
			
		}
		
		document.getElementById("button").addEventListener("click",check);

		/*
		//Timer
		var segundos = 58;
		var minutos = 10;
		var s = document.getElementById("segundos");
		var m = document.getElementById("minutos");

		var crono = setInterval(
			function(){
				
				if(segundos < 0){
					segundos = 59;
					minutos--;
					m.innerHTML = minutos;
				}
				s.innerHTML = segundos;
				if(segundos == 0 && minutos == 0){
					stopCrono();
				}
				segundos--;
			}
		,1000);

		function stopCrono(){
			clearInterval(crono);
			alert("parado");
		}
		*/
	});
})();