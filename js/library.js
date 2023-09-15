$(document).on("pagecreate", "#layout", function () {
  //왼쪽방향으로 스와이프
  $("#slide").swipeleft(function () {
    alert("왼쪽방향으로 스와이프됨");
  });

  //오른쪽방향으로 스와이프
  $("#slide").swiperight(function () {
    alert("오른쪽방향으로 스와이프됨");
  });

  let slide = setInterval(leftMove, 2500);
  let i = $("#slide a.act").index(); //초기 [2]
  function leftMove() {
    $("#slide a")
      .eq(i + 1)
      .addClass("act")
      .siblings()
      .removeClass("act");
    console.log(i);
    $("#slide")
      .stop()
      .animate({ left: "-800px" }, 1000, function () {
        $("#slide").append($("#slide a").first());
        $("#slide").css("left", "-400px");
      });
  }
}); ///////////////All End
