$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    let refinement_steps = ['#extraction', '#assembly', '#confirmation', '#contradiction-detection', '#deployment'];

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        
        let href = $(this).attr('href');

        if(refinement_steps.includes(href)) {
            refinement_steps.forEach(function(elem) {
                $(elem).css('display', 'none');
            });
            $(href).css('display', 'inline');
        }

        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-320
        }, 500, 'swing', function () {
            window.location.position = $target.offset().top-320;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
            $('div#menu-center').css('margin-top','-25px');
            $('div#project_title').css('margin-top','-55px');
        }
        else{
            if($('.active').length == 0 || scrollPos == 0)    {
                $('div#menu-center').css('margin-top','0');
                $('div#project_title').css('margin-top','0');    
            }
            currLink.removeClass("active");
        }
    });
}