// JavaScript Document
var crop = 12;
var intro = false;
var current = 1;
var pageTotale = 11;
var textPage = new Array(11);
var interactionPage1 = new Array(11);
var interactionPage2 = new Array(11);
var ocultdialog = false;
textPage[1] =
  "<span class='icone'></span>" +
  "<p><span class='space'></span>xistió un marcianito llamado Tico a quien le encantaba" +
  " pasear y compartir con su papá increíbles aventuras.</p>" +
  "<p>Una de las más grandes aventuras que Tico ha vivido fue el día" +
  " de su cumpleaños; aquel día Tico se levantó muy temprano," +
  " empacó su robot que tiene como mascota, varios juguetes y se" +
  " despidió de su mamá, muy emocionado, ya que por fin cumpliría" +
  " el sueño de viajar con su papá al planeta Mercurio.</p> <br> <br> <br> <br> <br>" +
  "<p style='font-size:19px'> ¡Dale click al interruptor para encender o apagar las luces! </p>";
textPage[2] =
  "<p>Sería un viaje fantástico, emocionante y muy tranquilo – pensó Tico" +
  " – seguramente como todos lo que había compartido con su papá.</p>" +
  "<p>Sin embargo esta vez algo inesperado estaba por ocurrir, pues" +
  " la nave espacial en la que se transportaban comenzó a fallar y" +
  " empezó a dar vueltas y más vueltas a gran velocidad.</p>" +
  "<p>Tico, entonces, sintió mucho miedo y confusión al observar a su papá" +
  " que intentaba por todos los medios reparar la nave espacial.</p>";
textPage[3] =
  "<p>Aquel miedo le duró un buen tiempo al pobre Tico, hasta cuando" +
  " la nave empezó a descender y a detenerse lentamente en un lugar" +
  " muy extraño, cruzado por varios ríos, con una ciudad enorme," +
  " aviones gigantescos y un mar grande y azul.</p>" +
  "<p>Fue este instante cuando su papá, aún muy sorprendido, le dijo a" +
  " Tico con una amplia sonrisa en su rostro:</p>" +
  "<p>- ¡Hijo, llegamos a la Tierra, el planeta más hermoso de cuantos" +
  " hay en el universo!.</p>";
textPage[4] =
  "<p>Como Tico aún estaba tan asustado, no se dio cuenta de lo que" +
  " sucedía, y cuando reaccionó descubrió que en efecto había llegado" +
  " a un planeta fantástico, que desde el aire se veía azul.</p>" +
  "<p>Entonces, muy entusiasmado, Tico le pidió a su papá que lo acercara" +
  " cuanto antes a la Tierra para respirar sus aromas.</p>" +
  "<p>Su papá sin romper la regla de oro que consiste en “no pisar planetas" +
  " desconocidos para no ocasionar problemas”, acercó la nave para" +
  " repararla y dejó que Tico manejara su computador central.</p>";
textPage[5] =
  "<p>Al marcar la primera clave en el computador, Tico se sintió transportado" +
  " a otra dimensión al notar que el computador registraba la existencia" +
  " de niños en la Tierra, y en especial, la señal de un niño llamado" +
  " <span class='name_user' style='color: red'></span>;</p><p>aunque por varios minutos no podía" +
  " creer lo que veían sus ojos, descubrió que era verdad que había niños" +
  " terrícolas, y uno de ellos más especial todavía.</p>";
textPage[6] =
  "Pídele a tus amigos, conocidos o familiares que te escriban una" +
  " cualidad en cada color. Para que recuerdes que existen muchos" +
  " seres como Tico que te consideran una persona única y admirable." +
  "<form id='formCualidades' name='formCualidades' method='post' action=''><input type='text' name='textfield' id='textfield' style='border-color:#F33;'/><input type='text' name='textfield2' id='textfield2' style='border-color:#06F;' /><input type='text' name='textfield3' id='textfield3' style='border-color:#F93;' /><input type='text' name='textfield4' id='textfield4' style='border-color:#093;' />" +
  "<input type='text' name='textfield5' id='textfield5' style='border-color:#903;' /><input type='text' name='textfield6' id='textfield6' style='border-color:#FC0;' /></form>";
textPage[7] =
  "<p>Tico quiso saber quién era ese niño tan especial y descubrió con asombro a un niño muy:</p>" +
  "<form id='checkgroup' name='checkgroup' method='post' action=''>" +
  "<label style='background-color:#CCFFFF;border-color:#00CCFF;'>" +
  "<input type='checkbox' name='inteligente' value='5' id='cualidades_0'/>" +
  "Inteligente</label>" +
  "<label style='background-color:#66FF66;border-color:#009933;'>" +
  "<input type='checkbox' name='entusiasta' value='4' id='cualidades_1' />" +
  "Entusiasta</label>" +
  "<label style='background-color:#FFCCFF;border-color:#FF9999;'>" +
  "<input type='checkbox' name='alegre' value='4' id='cualidades_2' />" +
  "Alegre</label>" +
  "<label style='background-color:#99CCCC;border-color:#0066FF;'>" +
  "<input type='checkbox' name='espontaneo' value='4' id='cualidades_3' />" +
  "Espontaneo</label>" +
  "<label style='background-color:#009966;border-color:#006600;'>" +
  "<input type='checkbox' name='amable' value='5' id='cualidades_4' />" +
  "Amable</label>" +
  "<label style='background-color:#CC99FF;border-color:#CC3399;'>" +
  "<input type='checkbox' name='sincero' value='4' id='cualidades_5' />" +
  "Sincero</label>" +
  "<label style='background-color:#FFCC66;border-color:#FF9900;'>" +
  "<input type='checkbox' name='activo' value='4' id='cualidades_6' />" +
  "Activo</label>" +
  "<label style='background-color:#FF6666;border-color:#CC0000;'>" +
  "<input type='checkbox' name='deportista' value='4' id='cualidades_7' />" +
  "Deportista</label>" +
  "<label style='background-color:#FFFF66;border-color:#FFCC00;'>" +
  "<input type='checkbox' name='lector' value='4' id='cualidades_8' />" +
  "Lector</label>" +
  "<label style='background-color:#66FFFF;border-color:#0099CC;'>" +
  "<input type='checkbox' name='expresivo' value='4' id='cualidades_9' />" +
  "Expresivo</label>" +
  "<label style='background-color:#9933FF;border-color:#990066;'>" +
  "<input type='checkbox' name='estudioso' value='4' id='cualidades_10' />" +
  "Estudioso</label>" +
  "<label style='background-color:#FFFFFF;border-color:#999999;'>" +
  "<input type='checkbox' name='obediente' value='4' id='cualidades_11' />" +
  "Obediente</label>" +
  "<label style='background-color:#009966;border-color:#003300;'>" +
  "<input type='checkbox' name='solidario' value='4' id='cualidades_12' />" +
  "Solidario</label>" +
  "<label style='background-color:lightgreen;border-color:#003300;'>" +
  "<input type='checkbox' name='cariñoso' value='4' id='cualidades_13' />" +
  "Cariñoso</label>" +
  "<label style='background-color:turquoise;border-color:#003300;'>" +
  "<input type='checkbox' name='amistoso' value='4' id='cualidades_14' />" +
  "Amistoso</label>" +
  "</form>" +
    "<p>Además, era un niño al que le gustaba practicar varios deportes, entre ellos:</p>" +
  "<textarea placeholder='Coloca el nombre de tus deportes favoritos'></textarea>";
textPage[8] =
  "<p>Muy emocionado, Tico se dispuso a escribir todo lo que había vivido" +
  " este día tan maravilloso; además, pensó que sería fantástico escribir" +
  " acerca de un niño tan especial; por eso cuando ya su papá había" +
  " arreglado la nave espacial</p>" +
  "<div class='info' style='font-size:20px;'>Escribe en los cuadros tus cosas favoritas" +
  " </div>" +
  "<div style='display:table;margin:auto;width:90%'><p><input type='text' id='inputHeroe' placeholder='Ahora escribe tu superhéroe favorito:' style='width:100%;height:30px;padding-left:8px;'/></p>" +
  "<p><input type='text' id='inputMusica' placeholder='Escribe tu música favorita:' style='width:100%;height:30px;padding-left:8px;'/></p>" +
  "<p><input type='text'id='inputAnimal' placeholder='Escribe tu animal preferido:' style='width:100%;height:30px;padding-left:8px;' /></p>" +
  "<p><input type='text'id='inputDeportista' placeholder='Escribe tu deportista favorito:' style='width:100%;height:30px;padding-left:8px;' /></p></div>";
textPage[9] =
  "<p>Tico había hecho un cuento y también un dibujo de su nave, el cual le enviaría a <span class='name_user' style='color: red'></span></p>" +
  "<p>Su papá, muy orgulloso de lo ingenioso que era su hijo Tico, decidió" +
  " ayudarlo a enviar la historia a <span class='name_user' style='color: red'></span>" +
  " antes de partir.</p>" +
  "<p>Cuando regresó a su planeta Marte, Tico contó a todo el mundo la" +
  " aventura tan especial que vivió el día de su cumpleaños, al conocer" +
  " la Tierra, y al descubrir a <span class='name_user' style='color: red'></span></p>";
textPage[10] =
  " <p> A Tico le encantaría que personalizaras su nave espacial. </p>" +
  " ¡Ayúdalo a que se vea mejor! </p>" +
  " <p> Selecciona el color que te gustaría para pintar la nave espacial de Tico. </p> <br> <br>" +
  " <img id='colorAzul' src='../files/pag10/colorAzul.png' onclick='changeColor()'>" +
  " <img id='colorMorado' src='../files/pag10/colorMorado.png' onclick='changeColor()'>" +
  " <img id='colorAmarillo' src='../files/pag10/colorAmarillo.png' onclick='changeColor()'>" +
  " <img id='colorGris' src='../files/pag10/colorGris.png' onclick='changeColor()'>" +
  " <img id='imagenSinColor' src='../files/pag10/sinColor.png' onclick='changeColor()'>";

textPage[11] =
  "<p style='font-size:24px;'>¡Felicitaciones "+
  "<span class='name_user' style='color: red'></span>! </p> " +
  "<p> ¡Haz terminado el cuento, gracias por esta aventura única" +
  " con Tico el Marcianito! <br>" +
  " Por tu gran esfuerzo, recibiriás un diploma muy especial <br> <br> <br>" +
  "<a id='button-diploma' onclick='diplomaInfo()'>¡Quiero mi diploma!</a>";

interactionPage1[1] = "80% 50%";
interactionPage2[1] = "20% 50%";

interactionPage1[2] = "100% 50%";
interactionPage2[2] = "0% 50%";

interactionPage1[3] = "50% 50%";
interactionPage2[3] = "100% 50%";

interactionPage1[4] = "50% 50%";
interactionPage2[4] = "100% 50%";
