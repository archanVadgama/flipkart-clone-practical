$(document).ready(function () {
  $(".btn").click(function (e) {
    e.preventDefault();
    alert("Button clicked");
  });
  
  //countdown timer script
  let currentDate = new Date();
  let futureDate = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000);
//   console.log(futureDate);
//   console.log(currentDate);
  let timer = setInterval( () => {
    let now = new Date();
    let diff = (futureDate.getTime() - now.getTime()) / 1000;
    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor((diff / 60) % 60);
    let seconds = Math.floor(diff % 60);
    $(".timer").text(`${hours} : ${minutes} : ${seconds}`);
    if (diff <= 0) {
      clearInterval(timer);
      $(".timer").text("Time Up");
    }
  }, 1000);


  //carousel script
  $('.right-btn').click(function (e) { 
    e.preventDefault();
    $('#sldie-carousel').css({
        "transform": "translateX(-150px)",
        "transition": "transform 0.5s ease-in-out"
    });
  });
  $('.left-btn').click(function (e) { 
    e.preventDefault();
    $('#sldie-carousel').css({
        "transform": "translateX(0px)",
        "transition": "transform 0.5s ease-in-out"
    });
  });
});
