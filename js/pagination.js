// JavaScript Document

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
  });
  ubicarActual();
}

function ubicarActual() {

  $(".musicContainer").css("position", "relative");
  $(".musicContainer").css("display", "flex-end");
  $(".musicContainer").css("z-index", 999);

  // $("#play").css("position", "relative");
  $("#play").css("display", "flex");
  // $("#play").css("z-index", 999);

  // $("#pause").css("position", "relative");
  $("#pause").css("display", "flex");
  // $("#pause").css("z-index", 999);
  
  if (current > 1) {
    $("#back").removeAttr("style");
  } else {
    $("#back").css("display", "none");
  }

  if (current >= 5 && current < 11) {
    $("#monedas").css("position", "relative");
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

