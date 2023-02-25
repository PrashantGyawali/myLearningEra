let newsletterdiv = document.getElementById("newsletter");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 1000) {
    newsletterdiv.style.transition='opacity 0.75s linear';
    setTimeout(() => {
        newsletterdiv.style.opacity='1';  
    }, 10); 
  }

  if(y<200)
  {
    newsletterdiv.style.opacity='0';
  }
};

window.addEventListener("scroll", myScrollFunc);