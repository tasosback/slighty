(function($) {

    $.fn.slighty = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            interval        : 3000,
            speed           : 600,
            effect          : 'fade',
            auto            : true
        }, options);


        var slides;
        var cnt;
        var amount;
        var i;
        var countpills;
        var timer1;
        var timer2;

        function run() {

            // hiding previous image and showing next
            $(countpills.children()[i]).removeClass('active');

            //Do the slide based on the effect
            if(settings.effect == 'fade'){
                $(slides[i]).fadeOut(settings.speed);
            }else if(settings.effect == 'slide'){
                $(slides[i]).hide("slide", { direction: "left" }, settings.speed);
            }

            i++;
            if (i >= amount) i = 0;

            //Do the slide based on the effect
            if(settings.effect == 'fade'){
                $(slides[i]).fadeIn(settings.speed);
            }else if(settings.effect == 'slide'){
                $(slides[i]).show("slide", { direction: "right" }, settings.speed);
            }

            $(countpills.children()[i]).addClass('active');

            // updating counter
            cnt.text(i+1+' / '+amount);

            // loop
            timer2 = setTimeout(run, settings.interval);
        }

        function next(){

            clearTimeout(timer1);
            clearTimeout(timer2);

            // hiding previous image and showing next
            $(countpills.children()[i]).removeClass('active');

            //Do the slide based on the effect
            if(settings.effect == 'fade'){
                $(slides[i]).fadeOut(settings.speed);
            }else if(settings.effect == 'slide'){
                $(slides[i]).hide("slide", { direction: "left" }, settings.speed);
            }


            $(slides[i]).width( '100%' );

            i++;
            if (i >= amount) i = 0;

            //Do the slide based on the effect
            if(settings.effect == 'fade'){
                $(slides[i]).fadeIn(settings.speed);
            }else if(settings.effect == 'slide'){
                $(slides[i]).show("slide", { direction: "right" }, settings.speed);
            }


            $(countpills.children()[i]).addClass('active');

            // updating counter
            cnt.text(i+1+' / '+amount);

            timer1 = setTimeout(run, settings.interval);
        }

        function prev(){

            clearTimeout(timer1);
            clearTimeout(timer2);

            // hiding previous image and showing next
            $(countpills.children()[i]).removeClass('active');


            //Do the slide based on the effect
            if(settings.effect == 'fade'){
                $(slides[i]).fadeOut(settings.speed);
            }else if(settings.effect == 'slide'){
                $(slides[i]).hide("slide", { direction: "right" }, settings.speed);
            }

            i--;
            if (i < 0) i = amount-1;

            //Do the slide based on the effect
            if(settings.effect == 'fade'){
                $(slides[i]).fadeIn(settings.speed);
            }else if(settings.effect == 'slide'){
                $(slides[i]).show("slide", { direction: "left" }, settings.speed);
            }

            $(countpills.children()[i]).addClass('active');

            // updating counter
            cnt.text(i+1+' / '+amount);

            timer1 = setTimeout(run, settings.interval);
        }

        //Initialize the slider
        slides = $(this).find(".item");
        cnt = $('#counter');
        amount = slides.length;
        countpills = $('#count-pills');
        i=0;

        //Get the background image
        for (n = 0; n < amount; n++) {
            var elem = $(slides[n]);
            elem.css('background-image', 'url("'+elem.attr("data-img-src")+'")');

            countpills.append( "<li><i></i></li>" );
        }

        $(countpills.children()[i]).addClass('active');

        // updating counter
        cnt.text(i+1+' / '+amount);

        if(settings.auto){
            timer1 = setTimeout(run, settings.interval);
        }

        $( ".slighty-next" ).on( "click", function() {

            next();
        });

        $( ".slighty-prev" ).on( "click", function() {
            prev();
        });


    }

}(jQuery));