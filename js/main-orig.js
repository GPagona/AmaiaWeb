// OPTIONS
const options = {
    animationSelector: '[class*="transition-fade"]',
    containers: ["#swup"],
    animateHistoryBrowsing: true,
    linkSelector: 'a[href^="' +  window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',

};

const swup = new Swup(options);

// clean
swup.on('willReplaceContent', unmount);

// this event runs for every page view after initial load
swup.on('contentReplaced', mount);

function mount() {
    swiper();
    arrow_events();
}

function unmount(){
	arrow_remove_events();
}

// START FUNCS ON DOCUMENT READY - FIRST TIME ONLY
mount();
onepage();
contactBtn();



// ------------------------------------------------- ADD EVENTS




function onepage(){
    $(".main").onepage_scroll({
       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
       easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
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
      speed: 800,
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
    var bgcycle = $(".campo_cursor1");
    const cursor2 = document.querySelector('.arrow-prev');
    var bgcycle2 = $(".campo_cursor2");
    //generic
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
    })
    //inside container - show
    bgcycle.mouseover(function(event){
      document.addEventListener('mousemove', e => {
          cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
      })
    });
    //outside container - hidden
    bgcycle.mouseout(function(event){
      document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
    });

    //generic
    document.addEventListener('mousemove', e => {
        cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
    })
    //inside container - show
    bgcycle2.mouseover(function(event){
      document.addEventListener('mousemove', e => {
          cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
      })
    });
    //outside container - hidden
    bgcycle2.mouseout(function(event){
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

  function arrow_remove_events(){
    //generic
    document.removeEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
    })
    //inside container - show
    bgcycle.mouseover(function(event){
      document.removeEventListener('mousemove', e => {
          cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
      })
    });
    //outside container - hidden
    bgcycle.mouseout(function(event){
      document.removeEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
    });

    //generic
    document.removeEventListener('mousemove', e => {
        cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
    })
    //inside container - show
    bgcycle2.mouseover(function(event){
      document.removeEventListener('mousemove', e => {
          cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 1")
      })
    });
    //outside container - hidden
    bgcycle2.mouseout(function(event){
      document.removeEventListener('mousemove', e => {
        cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX - 25 )+"px; opacity : 0")
      })
    });

  };




  //const cursor = document.querySelector('#cursor');
  //document.addEventListener('mousemove', e => {
  //    cursor.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25 - 25)+"px;")
  //})

  //var mycursor = $("#cursor");
  //var bgcycle = $("#campo_cursor1");
  //  bgcycle.mouseover(function(event){
  //      mycursor.show();
  //  });
  //  bgcycle.mouseout(function(event){
  //      mycursor.hide();
  //  });
  //  bgcycle.mousemove(function(event){
  //      var mycursor_width = mycursor.width();
  //      var mycursor_height = mycursor.height();
  //        mycursor.css( "left" ,
  //                  Math.round(event.screenX-(mycursor_width)/2)+"px");
  //      mycursor.css( "top" ,
  //                  Math.round(event.screenY-(mycursor_height)*2)+"px");
  //  });
  //  bgcycle.css("cursor", "none");
  //  /*
  //  CURSORES PREVIOUS
  //  */
  //  var mycursor2 = $("#cursor2");
  //  var bgcycle2 = $("#campo_cursor2");
  //    bgcycle2.mouseover(function(event){
  //        mycursor2.show();
  //    });
  //    bgcycle2.mouseout(function(event){
  //        mycursor2.hide();
  //    });
  //    bgcycle2.mousemove(function(event){
  //        var mycursor2_width = mycursor.width();
  //        var mycursor2_height = mycursor.height();
  //          mycursor2.css( "left" ,
  //                    Math.round(event.screenX-(mycursor2_width)/2)+"px");
  //        mycursor2.css( "top" ,
  //                    Math.round(event.screenY-(mycursor2_height)*2)+"px");
  //    });
  //    bgcycle2.css("cursor", "none");
  //    /*
  //    eliminar flechas en movil
  //    */
  //    if($(window).width() < 575){$(".swiper-button-next").addClass("off");
  //    }
  //    if($(window).width() < 575){$(".swiper-button-prev").addClass("off");
  //    }
   /*
   aumentar campos del cursor en primer y ultimo slide
   */


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
