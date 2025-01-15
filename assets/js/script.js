$(document).ready(function () {
  
  $(".btn").click(function (e) {
    e.preventDefault();
    alert("Button clicked");
  });

  $('.more').hover(function () {
      $('.more-section').css('display', 'block');
    }, function () {
      $('.more-section').css('display', 'none');
    }
  );
  $('.more-items').hover(function () {
      $('.more-section').css('display', 'block');
    }, function () {
      $('.more-section').css('display', 'none');
    }
  );

  const WIDTH = window.innerWidth;
  // console.log(WIDTH);
  if (WIDTH <= 425) {
    $('.right-btn').hide();
    let count = 1;
    let carouselInterval = setInterval(function () {
      // console.log(count);
      if(count == 4){
        $('#sldie-carousel').css('transform', 'translateX(0px)');
        count = 1;
        // console.log(test);
      }else{
        $('.res-carousel').css('transform', 'translateX(-'+(count * 420)+'px)');
        $('#sldie-carousel').css('transform', 'translateX(-'+(count * 420)+'px)');
        count++;
      }
      }, 3000);
    }
  
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
  $('.right-btn').click(function () {
    $(this).hide();
    $('.left-btn').show();
    
    if(WIDTH <= 1440){
      $('#sldie-carousel').css('transform', `translateX(-920px)`);
    }else{
      $('#sldie-carousel').css('transform', `translateX(-670px)`);
    }
  });
  
  $('.left-btn').click(function () {
    $(this).hide();
    $('.right-btn').show();
    $('#sldie-carousel').css('transform', `translateX(0px)`);
  });

});
