

//lightbox
$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.item',
    });

    $('.filterBntGroup').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filterBntGroup li').removeClass('active');
        $(this).addClass('active');
    });

})

