let newsletterdiv = document.getElementById("newsletter");
$('#goupbtn').hide(0);
let myScrollFunc = function() {
  let y = window.scrollY;
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

let myScrollFunc2 = function() {
  let y = window.scrollY;
  if(y<200)
  {
    $('#goupbtn').hide(0);
    if (y <= 100) {
    $('#nav').addClass('bg-dark').removeClass('bg-white');
    $('.nav-link').addClass('text-light').removeClass('text-dark');
    $('.navbar-brand').addClass('text-light').removeClass('text-dark');
    $('#goupbtn').hide(0);
  }
}

  if(y>100)
  {
    $('#nav').addClass('bg-danger').removeClass('bg-dark');
    $('.nav-link').removeClass('text-light').addClass('text-dark');
    $('.navbar-brand').removeClass('text-light').addClass('text-dark');

  }

  if(y>200)
  {
    $('#goupbtn').show(0);
  }
  
};


window.addEventListener("scroll", myScrollFunc);
window.addEventListener("scroll", myScrollFunc2);

var a;
function myfunction() {
  if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)) {
     a = true ;
  } else {
     a = false ;
  }
}
myfunction();
console.log(a);
if(!a)
{
  console.log('hello');
  $('.card').hover(function(){
  $(this).addClass('shadow-lg zoom');
},
function(){
  $(this).removeClass('shadow-lg zoom');
});

}





let cardz=Array.from(document.querySelectorAll('.zoomcard'));
cardz.forEach((hehe)=>{hehe.addEventListener('click',
()=>{
  hehe.classList.add('shadow-lg');
  hehe.classList.add('zoom');


  setTimeout(() => {
    hehe.classList.remove('shadow-lg');
    hehe.classList.remove('zoom');

  }, 1000);
})});




let focus=0;
let cards = Array.from(document.getElementsByClassName('cards'));
let innercard = Array.from(document.getElementsByClassName('cardx'));
cards.forEach((card,i)=>{pos=(i-focus)*50+'%';
card.style.left=pos;})
cards[focus+1].style.borderColor='red';
setInterval(()=>
{
    focus++;


    cards.forEach(
        (carde,i)=>{ 
            
            let posdeterminer= i-focus;

            if (posdeterminer>(-2))
            {
            carde.style.transition='left 0.5s ease-in-out'
            setTimeout(()=>{
                pos=(posdeterminer)*50+'%';
                carde.style.left=pos;
            },10);

              
        }

             else{
                carde.style.opacity='0'
                pos=(posdeterminer+cards.length)*50+'%';
                carde.style.left=pos;
                setTimeout(()=>{carde.style.opacity='1'},3000);

                }
        }
        );

        let focused;
        focused=(focus+2)<=cards.length?(focus+1):(focus-cards.length+1);
        for(i in cards)
        {
    
        cards[i].style.borderColor='transparent';


        cards[i].style.zIndex='1' ;
        cards[i].style.boxShadow='none';
        cards[i].style.filter='blur(2px)'
        innercard[i].classList.remove('focusexpand');
        if(i==focused)
        {
            cards[i].style.borderColor='blue';
    
            cards[i].style.boxShadow='0px 0px 30px 30px rgba(100,100,100,0.5)';
            cards[i].style.zIndex='2'
            cards[i].style.filter='blur(0px)'
            innercard[i].classList.add('focusexpand');
        }

        }

        focus=focus>cards.length?1:focus;

},3000);




var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if ((st > (lastScrollTop+20)) && st>80) {
    $("#nav").hide(10);
      // downscroll code
   } else if (st < (lastScrollTop-5)) {
    $("#nav").show(10);
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);