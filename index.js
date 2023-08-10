$('body').css('opacity','0');
setTimeout(()=>{$('body').css('opacity','1');},300)

setTimeout(() => {
  $('#huhubtn').click();
}, 5000);

let autoplaycarousel={slidesToScroll: 1,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  accessibility:false,
  draggable:false,
  pauseOnHover:false,
infinite:true,
arrows:false,
swipe:false,
touchMove:false,

responsive: [
  {
    breakpoint: 720,
    settings: { slidesToShow: 3}
  },
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 5
    }
  },
  {
    breakpoint: 540,
    settings: {
      slidesToShow: 2
    }
  }
]}


let autoplaycarousel2={
  __proto__: autoplaycarousel,
  rtl:true
};



$(document).ready(function(){
  $('.autoplay').slick(autoplaycarousel);
});
	
$(document).ready(function(){
  $('.autoplay2').slick(autoplaycarousel2);
});
	
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
    $('.dollarsign').removeClass('text-warning').addClass('text-dark')
    $('.navbar-brand').addClass('text-light').removeClass('text-dark');
    $('#goupbtn').hide(0);
  }
}

  if(y>100)
  {
    $('#nav').addClass('bg-danger').removeClass('bg-dark');
    $('.dollarsign').addClass('text-warning').removeClass('text-dark')
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

typingeffect1();



































function typingeffect1()
{
  
// List of sentences
var _CONTENT = [ "Pro😎", "Artist", "Designer", "Developer","Pro😎", "Engineer" , "Teacher", "Creator", "Dancer", "CEO😎"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector(".typing1");

// Implements typing effect
function Type() { 



	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
    _ELEMENT.style.borderColor='rgba(0,0,0,0)';

    setTimeout(()=>{
      _ELEMENT.style.borderColor='rgba(255,255,255,1)';
             setTimeout(() => {_ELEMENT.style.borderColor='rgba(0,0,0,0)'; setTimeout(()=>{_ELEMENT.style.borderColor='rgba(255,255,255,1)';},700)}, 700)
             ;},500);


		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 2500);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;


		// Start to display the next sentence after some time
		setTimeout(function() {

			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
}



var iterationCount=0;
wordmovein();
function wordmovein(){
  document.getElementById('test').onanimationiteration = () => {
    let words=["an Artist","a Creator","a Programmer","a Scientist","a CEO","a Boss"];
    iterationCount<(words.length-1)?iterationCount++:iterationCount=0;
    $('#test').text(words[iterationCount]);
  };
}














// company name typing effect


const letters = "abcdEfghijkLmnopqrstuvwyz";

let interval = null;
let finaltxt='myLearningEra'
document.getElementById('companyname').onmouseleave = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerHTML = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {

          if(index==2)
          {
            return `<span class="text-danger">L</span>`
          }

          if(index==10)
          {
            return `<span class="text-warning">E</span>`
          }

          if(index==13)
          {
            return ` `;
          }

          if(index==14||index==15||index==16)
          {

          if(window.scrollY>100)
          {return `<span class="dollarsign text-warning">$</span>` ;}

          if(window.scrollY<=100)
          {return `<span class="dollarsign text-dark">$</span>` ;}

          }

          return `${finaltxt[index]}`
        }
      
        if(index>13 && window.scrollY<=100)
        {return `<span  style="color: rgba(0,0,0,0)">${letters[Math.floor(Math.random() * 25)]}</span>`;}
        if(index>13 && window.scrollY>100)
        {return `<span class="text-warning">${letters[Math.floor(Math.random() * 25)]}</span>`;}
        if(index==2)
        {
          return `<span class="text-danger">${letters[Math.floor(Math.random() * 25)]}</span>`;
        }
        if(index==10)
        {
          return `<span class="text-warning">${letters[Math.floor(Math.random() * 25)]}</span>`
        }
        else{
        return `<span class="text-secondary" >${letters[Math.floor(Math.random() * 25)]}</span>`;
        }
      })
      .join("");
    
    if(iteration >= 16){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}