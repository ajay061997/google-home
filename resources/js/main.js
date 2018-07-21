$(document).ready(function() {
    window.sr = ScrollReveal();
        sr.reveal('.navbar', {
          duration: 2000,
          origin:'bottom'
        })
    
        sr.reveal(".showcase-left",{
            duration: 2000,
            origin: "top",
            distance: "300px"
        })

        sr.reveal(".showcase-right",{
            duration: 2000,
            origin: "right",
            distance: "300px"
        })

        sr.reveal(".showcase-btn",{
            duration: 2000,
            delay: 2000,
            origin: "bottom"
        })

        sr.reveal("#testimonial div",{
            duration: 2000,
            origin: "bottom",
            viewFactor: 0.2
        })

        sr.reveal("#features img",{
            duration: 2000,
            origin: "bottom",
            distance: "300px",
            viewFactor: 0.2
        })

        sr.reveal("#features .features-right",{
            duration: 2000,
            origin: "top",
            distance: "300px",
            viewFactor: 0.2
        })

        sr.reveal(".text-image .sub-text",{
            duration: 2000,
            origin: "left",
            distance: "600px",
            viewFactor: 0.2
        })

        sr.reveal("#flipkart .flipkart-text",{
            duration: 2000,
            origin: "left",
            distance: "300px",
            viewFactor: 0.2
        })

        sr.reveal("#flipkart .phone-image",{
            duration: 2000,
            origin: "right",
            distance: "300px",
            viewFactor: 0.2
        })

        sr.reveal("#contact img",{
            duration: 2000,
            origin: "top",
            distance: "300px",
            viewFactor: 0.2
        })

        /* Navigation scroll */
    $(function() {
        $(document).on('click', 'a[href^="#"]', function () {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
} )