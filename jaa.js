const menubutt = document.querySelector(".men");
 const navigation = document.querySelector(".nav");
 menubutt.addEventListener("click", () => {
    menubutt.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
document.getElementById('show').addEventListener('click',function(){
      document.getElementById('open').classList.add('active');
});
document.getElementById('closebtn').addEventListener('click',function(){
  document.getElementById('open').classList.remove('active');
});

document.getElementById('show2').addEventListener('click',function(){
  document.getElementById('open2').classList.add('active');
});
document.getElementById('closebtn2').addEventListener('click',function(){
document.getElementById('open2').classList.remove('active');
});

document.getElementById('show3').addEventListener('click',function(){
  document.getElementById('open3').classList.add('active');
});
document.getElementById('closebtn3').addEventListener('click',function(){
document.getElementById('open3').classList.remove('active');
});

document.getElementById('show4').addEventListener('click',function(){
  document.getElementById('open4').classList.add('active');
});
document.getElementById('closebtn4').addEventListener('click',function(){
document.getElementById('open4').classList.remove('active');
});

document.getElementById('show5').addEventListener('click',function(){
  document.getElementById('open5').classList.add('active');
});
document.getElementById('closebtn5').addEventListener('click',function(){
document.getElementById('open5').classList.remove('active');
});