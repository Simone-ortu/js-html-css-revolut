// Dropdownmenu 

$(document).ready(function(){
    $('.accounts').click(function(){
        $('#account').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.prodotti').click(function(){
        $('#prodotto').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.azienda').click(function(){
        $('#company').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.aiuto').click(function(){
        $('#help').toggleClass('active')
    });
});
$(document).ready(function(){
    $('.lingue').click(function(){
        $('#lang').toggleClass('active')
    });
});

// $(document).click(function () {
//     $('.dropdown').removeClass('active').eq($(this).index()).addClass('active');
//   });

