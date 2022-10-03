// JavaScript Document

var mon = 0;

var storyContentPages = {
  5: 6,
  7: 0,
  9: 10,
};

function next() {
  intro = false;
  $(".light, .activate").hide();
  $(".page" + current).fadeOut(1000);
  current = current + 1;
  $("#text").fadeOut(500, function () {
    $(this).html(textPage[current]);
    $(".name_user").html($("#name_text").val());
    if (current == 5 && ocultdialog == false) {
      $(".dialog_name").dialog({
        width: "auto",
        height: "auto",
        modal: true,
        closeOnEscape: false,
        open: function (event, ui) {
          $(".ui-dialogcurrent-titlebar-close").hide();
        },
        close: function (event, ui) {},
        buttons: {
          Enviar: function () {
            $(".name_user").html($("#name_text").val());
            if ($("#name_text").val() != "") {
              ocultdialog = true;
              if (storyContentPages[current] != undefined) {
                mon += storyContentPages[current];

                document.getElementById("cont").innerHTML = "Monedas: " + mon;
              }
            }
            $(".dialog_name").dialog("close");
          },
        },
      });
    }
    $(this).fadeIn(800, function () {
      $(".light, .activate").fadeIn(500);
      $(".name_user").html($("#name_text").val());
    });

    if (storyContentPages[current] != undefined && current > 5) {
      mon += storyContentPages[current];

      document.getElementById("cont").innerHTML = "Monedas: " + mon;
    }
  });
  introFunc();
  console.log(current);
  $(".page" + current).fadeIn(1000);
  ubicarActual();
}

function prev() {
  intro = false;
  $(".light, .activate").hide();
  $(".page" + current).fadeOut(1000);
  current = current - 1;
  introFunc();
  $(".page" + current).fadeIn(1000);
  $("#text").fadeOut(500, function () {
    $(this).html(textPage[current]);
    $(".name_user").html($("#name_text").val());
    $(this).fadeIn(800, function () {
      $(".light, .activate").fadeIn(500);
    });

    if (storyContentPages[current] != undefined && current >= 5) {
      mon -= storyContentPages[current];

      document.getElementById("cont").innerHTML = "Monedas: " + mon;
    }

    storyContentPages[current] = current == 7 && 0;
    console.log(current);
  });
  ubicarActual();
}

function ubicarActual() {
  $(".musicContainer").css("position", "fixed");
  $(".musicContainer").css("display", "flex-end");
  $(".musicContainer").css("z-index", 999);

  $("#play").css("display", "flex");

  $("#pause").css("display", "flex");

  if (current > 1) {
    $("#back").removeAttr("style");
  } else {
    $("#back").css("display", "none");
  }

  if (current >= 5 && current <= 11) {
    // $("#monedas").css("position", "fixed");
    $("#monedas").css("display", "flex");
  } else {
    $("#monedas").css("display", "none");
  }

  if (current < pageTotale) {
    $("#next").removeAttr("style");
  } else {
    $("#next").css("display", "none");
  }
}

$(document).on("ready", function () {
  $("#content").on("click", "#checkgroup input", function (e) {
    if ($(e.target).is(":checked")) {
      mon = mon + Number(e.target.value);
      storyContentPages[current] =
        storyContentPages[current] + Number(e.target.value);
    } else {
      mon = mon - Number(e.target.value);
      storyContentPages[current] =
        storyContentPages[current] - Number(e.target.value);
    }
    document.getElementById("cont").innerHTML = "Monedas: " + mon;
  });
});

function changeColor() {
  var azul = document.getElementById("colorAzul");
  var morado = document.getElementById("colorMorado");
  var amarillo = document.getElementById("colorAmarillo");
  var gris = document.getElementById("colorGris");
  var sinColor = document.getElementById("imagenSinColor");

  var fondo = document.getElementById("backgroundNave");
  var fondoAzul = document.getElementById("NaveAzul");
  var fondoMorado = document.getElementById("NaveMorada");
  var fondoAmarillo = document.getElementById("NaveAmarilla");
  var fondoGris = document.getElementById("NaveGris");
  var sinFondo = document.getElementById("sinColor");

  if ($("NaveAzul").css("display", "flex")) {
    mon += 10;
  }

  azul.onclick = function () {
    document.getElementById("cont").innerHTML = "Monedas: " + mon;
    fondo.style.display = "none";
    fondoMorado.style.display = "none";
    fondoAmarillo.style.display = "none";
    fondoGris.style.display = "none";
    sinFondo.style.display = "none";
    fondoAzul.style.display = "flex";
  };

  morado.onclick = function () {
    document.getElementById("cont").innerHTML = "Monedas: " + mon;
    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoAmarillo.style.display = "none";
    fondoGris.style.display = "none";
    sinFondo.style.display = "none";
    fondoMorado.style.display = "flex";
  };

  amarillo.onclick = function () {
    document.getElementById("cont").innerHTML = "Monedas: " + mon;
    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoMorado.style.display = "none";
    fondoGris.style.display = "none";
    sinFondo.style.display = "none";
    fondoAmarillo.style.display = "flex";
  };

  gris.onclick = function () {
    document.getElementById("cont").innerHTML = "Monedas: " + mon;
    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoMorado.style.display = "none";
    fondoAmarillo.style.display = "none";
    sinFondo.style.display = "none";
    fondoGris.style.display = "flex";
  };

  sinColor.onclick = function () {
    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoMorado.style.display = "none";
    fondoAmarillo.style.display = "none";
    fondoGris.style.display = "none";
    sinFondo.style.display = "flex";
  };
}

function diplomaInfo() {
  var conteoFinal = document.getElementById("contFinal");
  $(".diplomaHide").css("display", "none");
  $(".diplomaContainer").css("display", "flex");

  var nombre = document.getElementById("name_text").value;
  var edad = document.getElementById("age_text").value;
  document.getElementById("nombre").innerHTML = nombre;
  document.getElementById("edad").innerHTML = edad;
  conteoFinal.innerHTML = "Total de Monedas: " + mon;
}

function getPDF() {
  var nombre = document.getElementById("name_text").value;
  var edad = document.getElementById("age_text").value;
  document.getElementById("nombre").innerHTML = nombre;
  document.getElementById("edad").innerHTML = edad;
  var HTML_Width = $("#diploma").width();
  var HTML_Height = $("#diploma").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + top_left_margin * 2;
  var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($("#diploma")[0], { allowTaint: true }).then(function (canvas) {
    canvas.getContext("2d");

    console.log(canvas.height + "  " + canvas.width);

    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    pdf.addImage(
      imgData,
      "JPG",
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    );

    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        -(PDF_Height * i) + top_left_margin * 4,
        canvas_image_width,
        canvas_image_height
      );
    }

    pdf.save("Diploma de " + nombre + ".pdf");
  });
}

function terminarCuento() {
  if (mon >= 0 && mon <= 25) {
    Swal.fire({
      title: "<strong style='font-family:Calibri'>¡Ánimo!</strong>",
      html: "<span> Ganaste " + mon +" monedas, ¡Juega de nuevo y anímate a hacer todas las actividades!</span>",
      footer: "<strong style='font-family:Calibri'>Gracias por leer</strong>",
      width: "60vw",
      heightAuto: false,
      background: "#99C4EA",
      color: "black",
      showCloseButton: true,
      focusConfirm: true,
    }).then(function () {
      window.location.href = "index.html";
    });
  } else if (mon >= 26 && mon <= 52) {
    Swal.fire({
      title: "<strong style='font-family:Calibri'>¡Muy bien!</strong>",
      html: "<span> Ganaste " + mon +" monedas. Hiciste un buen trabajo ¡casi terminas todas las actividades! ¡Anímate a jugar otra vez!</span>",
      footer: "<strong style='font-family:Calibri'>Gracias por leer</strong>",
      width: "60vw",
      heightAuto: false,
      background: "#99C4EA",
      color: "black",
      showCloseButton: true,
      focusConfirm: true,
    }).then(function () {
      window.location.href = "index.html";
    });
  } else if (mon > 52){
    Swal.fire({
      title: "<strong style='font-family:Calibri'>¡Excelente trabajo!</strong>",
      html: "<span> Ganaste " + mon +" monedas, ¡FELICITACIONES! Has alcanzado el máximo puntaje, ¡Eres muy especial!</span>",
      footer: "<strong style='font-family:Calibri'>Gracias por leer</strong>",
      width: "60vw",
      heightAuto: false,
      background: "#99C4EA",
      color: "black",
      showCloseButton: true,
      focusConfirm: true,
    }).then(function () {
      window.location.href = "index.html";
    });
  }
}
