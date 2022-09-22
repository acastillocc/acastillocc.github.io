// JavaScript Document

var mon = 0;

var storyContentPages = {
  5: 2,

  7: 1,

  8: 12,
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

  if (current >= 5 && current < 11) {
    $("#monedas").css("position", "fixed");
    $("#monedas").css("display", "flex");
    $("#monedas").css("z-index", 999);
  } else {
    $("#monedas").css("display", "none");
  }

  if (current < pageTotale) {
    $("#next").removeAttr("style");
  } else {
    $("#next").css("display", "none");
  }

  if (document.getElementById("next").style.display === "none") {
    $("#content").css("display", "none");
  } else {
    $("#content").css("display", "block");
  }
}

function changeColor() {
  var azul = document.getElementById("colorAzul");
  var morado = document.getElementById("colorMorado");
  var amarillo = document.getElementById("colorAmarillo");
  var gris = document.getElementById("colorGris");

  var fondo = document.getElementById("backgroundNave");
  var fondoAzul = document.getElementById("NaveAzul");
  var fondoMorado = document.getElementById("NaveMorada");
  var fondoAmarillo = document.getElementById("NaveAmarilla");
  var fondoGris = document.getElementById("NaveGris");

  azul.onclick = function () {
    console.log("es azul");

    fondo.style.display = "none";
    fondoMorado.style.display = "none";
    fondoAmarillo.style.display = "none";
    fondoGris.style.display = "none";
    fondoAzul.style.display = "flex";
  };

  morado.onclick = function () {
    console.log("es morado");

    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoAmarillo.style.display = "none";
    fondoGris.style.display = "none";
    fondoMorado.style.display = "flex";

  };

  amarillo.onclick = function () {
    console.log("es amarillo");

    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoMorado.style.display = "none";
    fondoGris.style.display = "none";
    fondoAmarillo.style.display = "flex";
  };

  gris.onclick = function () {
    console.log("es gris");

    fondo.style.display = "none";
    fondoAzul.style.display = "none";
    fondoMorado.style.display = "none";
    fondoAmarillo.style.display = "none";
    fondoGris.style.display = "flex";
  };
}
