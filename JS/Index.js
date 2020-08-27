$(document).ready(function () {

  uploadFile();
  progressBar();
  popUp();
  tab();
});

function tab(){
  $(".tabContent > div").hide();
  $(".tabContent").find("div").first().show();
  $(".tabNav").click(function(){
    var currentTab = $(this).index();
    $("ul .tabNav").removeClass("activeTab");
    $(".tabContent > div").hide();
    $(this).addClass("activeTab");
    $(".tabContent").find(" > div").eq(currentTab).show();
  });
}


function mobileNav() {
  $("nav").toggleClass("mobileMenu");
}

function popUp() {
  $(".popup").click(function () {
    $(".overlay").toggleClass("visible");
  })
}

function progressBar() {
  $(".counter li").each(function () {
    var counterValue = $(this).find("#counterLimit").text();

    if(counterValue == '100%'){
      var counterWidth = '92%';
      $(this).find(".counterHeader").html(counterValue);
      $(this).find(".counterHeader").css(
        {
          'left': counterWidth,
        }
      );
    } 
    else {
      $(this).find(".counterHeader").html(counterValue);
      $(this).find(".counterHeader").css("left", counterValue);
    }
  });
}

function uploadFile() {
  $("#uploadedFile").bind('change', function () {
    var filename = $("#uploadedFile").val();
    if (/^\s*$/.test(filename)) {
      $("#noFile").text("No file chosen...");
    } else {
      $(".file-upload").addClass('active');
      $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
  });
}

