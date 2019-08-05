/** 
 * Drag and Drop Disponible con HTML5
*/


   function allowDrop(ev) {
                ev.preventDefault();
            }

            function drag(ev) {//----------arastrar
                ev.dataTransfer.setData("text", ev.target.id);
            }

            function drop(ev) {//----------soltar
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                //ev.target.appendChild(document.getElementById(data));  -------- es para que se quede el billete en el destino(y no queremos eso verdad?)

                comprobate(data)

            }
            function dropDollars(ev) {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                //ev.target.appendChild(document.getElementById(data)); -------- es para que se quede el billete en el destino(y no queremos eso verdad?)

                comprobateDollars(data);
            }
            function dropBilletera(ev) {//--------billetera, origen de la moneda
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                ev.target.appendChild(document.getElementById(data));
                drag();

            }
            ///-------------------FIN Funciones para arrastrar y pegar

            //----------------------------Comprobar la imagen arrastrada en dispositivo de centavos  (vertical)

            function comprobate(name) {

                var FirstValue = document.getElementById("moneyInserted").value;

                if (name == "1dolarcent") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 1.00).toFixed(2);
                } else if (name == "50cent") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 0.5).toFixed(2);
                } else if (name == "25cent") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 0.25).toFixed(2);
                } else if (name == "10cent") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 0.1).toFixed(2);
                } else if (name == "5cent") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 0.05).toFixed(2);
                } else if (name == "1cent") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + (0.01)).toFixed(2);
                } else {
                    document.getElementById("moneyInserted").value = "No Aceptado";
                    alert("Inserte el dato correcto");
                    document.getElementById("moneyInserted").value = FirstValue;
                }
            }
            //----------------------------FIN Comprobar la imagen arrastrada en dispositivo de centavos  (vertical)

            //----------------------------Comprobar la imagen arrastrada en dispositivo de dolares  (horizontal)

            function comprobateDollars(name) {

                var FirstValue = document.getElementById("moneyInserted").value;

                if (name == "1dollar") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 1.00).toFixed(2);
                    Efectsaudio();
                } else if (name == "5dollar") {
                    document.getElementById("moneyInserted").value = parseFloat(parseFloat(FirstValue) + 5).toFixed(2);
                    Efectsaudio();
                } else {
                    document.getElementById("moneyInserted").value = "No Aceptado";

                    alert("Inserte el dato correcto");
                    document.getElementById("moneyInserted").value = FirstValue;

                }



            }
            //----------------------------FIN Comprobar la imagen arrastrada en dispositivo de dolares  (horizontal)

            //-------------------------     Mostrar producto comprado (funcion final) ---------------------------------------------------
            function BuyProductExample() {
                var nombre = document.getElementById("write").value;
                var path = document.getElementById(nombre).src;
                path = path.replace("http://localhost/view/view", ".");
                alert(path);
                document.getElementById("moneyInserted").value =0.00;
                document.getElementById("write").value ="";

                document.getElementById("exitSnack").innerHTML = '<img id="Saled" src="' + path + '" width="50" height=80">\n\
                                                                        <br>\n\
                                                                    <input type="submit" class="btn btn-primary" name="Refresh" value="Retirar" onClick="location.reload()" style="width="100";">';


            }
            
            function Efectsaudio(Path) {

                var audio = document.createElement("audio");
                audio.src = Path;
                audio.play();
            }

