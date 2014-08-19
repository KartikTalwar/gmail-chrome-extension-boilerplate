var gmail;


function refresh(f) {
  if(/in/.test(document.readyState)) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email())
}


refresh(main);
