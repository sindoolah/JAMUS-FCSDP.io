$(document).ready(function () {
  $(".overlay").hide();
  $(".sidePiece, .sidePiece1").hide();
  $("#timeline, #message, #status").DataTable({

    columns: [{
        width: "1%"
      },
      {
        width: "10%"
      },
      {
        width: "20%"
      },
      {
        width: "15%"
      },
      {
        width: "54%"
      }
    ]
    // paging: true,
    // autoWidth: true,
    // searching: true,
    // lengthChange: true,
  });
});



$(newFunction()).click(function () {
  resetOrder();
  $(".section").addClass("animated");
  $(".sideNav").addClass("animated");
  $(".sidePiece").hide();
  $(".overlay").toggle();
});

// -------------------------------------------------------------------------------design execute tracking-----------------------------
$(".section").click(function () {
  var currentId = "";
  currentId = this.id;

  $(".section, .sideNav").removeClass("animated").removeClass("slideInDown").removeClass("slideInUp");
  $("#" + currentId).prependTo(".navContainer");
  $("aside").toggle();
  $(".sideContent").hide();
  $("#" + currentId + "Content").show();
});

function newFunction() {
  return "#hamburger";
}

function resetOrder() {
  $("#tracking").prependTo(".navContainer");
  $("#execution").prependTo(".navContainer");
  $("#design").prependTo(".navContainer");
}

$("#hamburger").click(function () {
  $(this).toggleClass("open");
});

$("#close").click(function () {
  $(".sidePiece").fadeOut(150);
});

$("#sideButton").click(function () {
  $(".sideMenu").show();
  $(".password").hide();
  $("#sideButton").hide();


});
$("#docButton").click(function () {
  $("#docCol2, #docCol3").show();
  // $(".password").hide();
  $("#docButton").hide();
});

$(".transactionType").click(function () {
  var currentId = "";
  currentId = this.id;
  console.log(currentId + " clicked");
  $(".sidePiece1").removeClass("animated").removeClass("slideInUp").hide();
  $(".sidePiece1").addClass("animated").addClass("slideInUp");
  $("#" + currentId + "-content").show();
  $("#remove").hide();
});

// $("#AFP").click(function () {
//   $(".AFP").show();
//   // remove the animation
//   // remove the class
// });

// $("#GPC").click(function () {
//   $(".GPC").show();
// });

// $("#MIPR").click(function () {
//   $(".MIPR").show();
// });

// $("#PPA").click(function () {
//   $(".PPA").show();
// });

// $("#nonPPA").click(function () {
//   $(".nonPPA").show();
// });

// $("#PA").click(function () {
//   $(".PA").show();
// });

// $("#SPS").click(function () {
//   $(".SPS").show();
// });

// <--------------------------------------------js for status progress circle-------------------------------------------->
var i = 0,
  prec;
var degs = $("#prec").text() * 3.6;
var activeBorder = $("#activeBorder");

setTimeout(function () {
  loopit("c");
}, 400);

function loopit(dir) {
  if (dir == "c") i++;
  else i--;
  if (i < 0) i = 0;
  if (i > degs) i = degs;
  prec = (100 * i) / 360;
  $(".prec").html(Math.round(prec) + "%");

  if (i <= 180) {
    activeBorder.css(
      "background-image",
      "linear-gradient(" +
      (90 + i) +
      "deg, transparent 50%, #2a3b4c 50%),linear-gradient(90deg, #2a3b4c 50%, transparent 50%)"
    );
  } else {
    activeBorder.css(
      "background-image",
      "linear-gradient(" +
      (i - 90) +
      "deg, transparent 50%, #bada55 50%),linear-gradient(90deg, #2a3b4c 50%, transparent 50%)"
    );
  }

  setTimeout(function () {
    loopit("c");
  }, 1);
}

// TODO - breaks console - delete if unused

// $(function () {
//   $("#progressCircle").progressBar({
//     value: 37
//   });
// });


function progress(percent, $element) {
  var progressBarWidth = percent * $element.width() / 38;
  $element.find('div').animate({
    width: progressBarWidth
  }, 1000).html(percent + "% ");
}
progress(90, $('.progressBar'));