// OPTIONS
const options = {
      animationSelector: '[class*="transition-four"]',
      containers: [".swuped"],
};

const swup = new Swup(options);

// clean
swup.on('willReplaceContent', unmount);

// this event runs for every page view after initial load
swup.on('contentReplaced', mount);

function mount() {
    swiper();
    arrow_events();
    onepage();
    contactBtn();
    topBtn();
}

function unmount(){
	arrow_remove_events();
  resetContactBtn()

}

// START FUNCS ON DOCUMENT READY - FIRST TIME ONLY
mount();
onLoad();





// ------------------------------------------------- ADD EVENTS


function onLoad(){
  window.onload = function() {
      document.body.className += " loaded";
  }
};


function onepage(){
    var scroll = new $(".main").onepage_scroll({
       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
       easing: " cubic-bezier(.6,0,.41,1)",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
       animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
       pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
       updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
       //beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
       //afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
       keyboard: true,                  // You can activate the keyboard controls
       responsiveFallback: 576,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
       direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

  }; // end of document ready



function swiper(){
  var swiper = new Swiper('.mySwiper', {
      // If we need pagination0
      speed: 1000,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
};


  /*
  CURSORES NEXT
  */

  // NEXT ARROW



  function arrow_events() {
    const cursor = document.querySelector('.arrow-next');
    const cursor2 = document.querySelector('.arrow-prev');

    //generic
    if($(window).width() > 575){
      document.addEventListener('mousemove', e => {
          cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
      //inside container - show
      $(".campo_cursor1").mouseover(function(event){
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
        })
      });
      //outside container - hidden
      $(".campo_cursor1").mouseout(function(event){
        document.addEventListener('mousemove', e => {
          cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
        })
      });

      //generic
      document.addEventListener('mousemove', e => {
          cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
      //inside container - show
      $(".campo_cursor2").mouseover(function(event){
        document.addEventListener('mousemove', e => {
            cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
        })
      });
      //outside container - hidden
      $(".campo_cursor2").mouseout(function(event){
        document.addEventListener('mousemove', e => {
          cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
        })
      });

      if($('.swiper-button-prev').hasClass('swiper-button-disabled')) {
        $('.swiper-button-next').addClass('all-width-forced');
      } else {
        $('.swiper-button-next').removeClass('all-width-forced');
      };

      $('.swiper-button-next').click(function() {
        if ($('.swiper-button-next').hasClass('swiper-button-disabled')) {
            $('.swiper-button-prev').addClass('all-width-forced');
            $('.swiper-button-next').removeClass('all-width-forced');
        } else {
          $('.swiper-button-prev').removeClass('all-width-forced');
          $('.swiper-button-next').removeClass('all-width-forced');
        }
      });

      $('.swiper-button-prev').click(function() {
        if ($('.swiper-button-prev').hasClass('all-width-forced')) {
            $('.swiper-button-next').removeClass('all-width-forced');
        } else {
          $('.swiper-button-next').removeClass('all-width-forced');
          $('.swiper-button-prev').removeClass('all-width-forced');
        }
      });
    };

  };

  function arrow_remove_events(){
    if($(window).width() > 575){
      //generic
      document.removeEventListener('mousemove', e => {
          cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
      //inside container - show
      $(".campo_cursor1").mouseover(function(event){
        document.removeEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
        })
      });
      //outside container - hidden
      $(".campo_cursor1").mouseout(function(event){
        document.removeEventListener('mousemove', e => {
          cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
        })
      });

      //generic
      document.removeEventListener('mousemove', e => {
          cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
      //inside container - show
      $(".campo_cursor2").mouseover(function(event){
        document.removeEventListener('mousemove', e => {
            cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
        })
      });
      //outside container - hidden
      $(".campo_cursor2").mouseout(function(event){
        document.removeEventListener('mousemove', e => {
          cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
        })
      });

    };
  };






   function contactBtn(){
     /* contact button */
     $('#contact-btn').click(function(){
       $('.floated-container').addClass('opened');
     })
     $('#contact-btn-mobile').click(function(){
       $('.floated-container').addClass('opened');
     })

     $('#contact-close-btn').click(function(){
       $('.floated-container').removeClass('opened');
     })
   };
   function resetContactBtn(){
     $('#contact-close-btn').click(function(){
       $('.floated-container').removeClass('opened');
     })
   };

   function topBtn(){
     if($(window).width() > 575){
       $('#top-btn').click(function(){
           $(".main").moveTo(1);
       })
     }else{
       $('#top-btn').click(function(){
         document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
       })
     };
   };
