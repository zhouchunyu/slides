$('.images > img:nth-child(1)').addClass('current');
$('.images > img:nth-child(2)').addClass('enter');
$('.images > img:nth-child(3)').addClass('leave');
$('.images > img:nth-child(4)').addClass('leave');
let index = 0
setInterval(function(){
  n = 4;
  $(`.images > img:nth-child(${index % n + 1})`).addClass('leave').removeClass('current');
  $(`.images > img:nth-child(${(index + 1) % n + 1})`).addClass('current').removeClass('enter');
  $(`.images > img:nth-child(${(index + 2) % n + 1})`).addClass('enter').removeClass('leave');
  index += 1
}, 1000)