
// instancia jQuery e evita conflitos;

$(document).ready(function($){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // selecionar tag
    let itens = $('.featured-item') // '' '' class
    let destaques = $('#featured') // '' '' id
    // console.log(titulos.first())

//  let line = $('.line-dec')
    $('.featured-item a').addClass('btn btn-dark stretch-link');
//     $('.section-heading h1').addClass('active-h1');
       $('.featured-item a').click(function(){

        $(this).css({

            'color': '#ff0',
            // 'background': '#ff0',
            'font-weight': '100',
        })

       }) 

})


$('h4').text('Bem-vindo a loja')


//manipulação de evento


$('.featured-item a').on('click', function(event) {

    event.preventDefault();

    alert('Produto esgotado');
});



$('#form-submit').on('click', function(evt) {


    evt.preventDefault();

    if($('#email').val() != '')
    {
        evt.preventDefault();
        $('#email').animate({
            // transition: '0.5s',
            opacity: '0.5',
         
            // opacity: 'toggle'                    

        })

    }


    /*

    * Ouvinte de eventos .nav

    */

    $('.nav-modal-open').on('click', function(e) {

        e.preventDefault();

        let elem = $(this).attr('rel'); 
        // $('.modal-body').html($('#'+elem).html()) 
        $('.modal-body').html($('#'+elem).html())

        $('.modal-header h5.modal-title ').html($(this).text)

        let myModal = new bootstrap.Modal($('#modelId'))

            myModal.show()       
    });

    
    // about

  

})




// hide
// show()
//fadeIn(2000) transiçao/entrada
//fadeOut()     ''/saida

// $('.featured-item a').css('color', '#fafafa')
/* $('.featured-item a').css({
'color': '#fff',
'background': '#bbbbaa',
instancia por objeto
})*/




// Validação

function validate( elem ) {

    if( elem.val() == '') {

        console.log('O campo de ' + elem.attr('name') +' é obrigatório!');


        elem.parent().find('.text-muted').show();

        elem.addClass('invalid');

        return false
    } else {
        elem.parent().find('.text-muted').hide();
        elem.removeClass('invalid');
    }

}



$('body').on('submit', '.modal-body .form', function(e) {

    e.preventDefault();


    const inputName = $('#nome')
    const inputEmail = $('#email')

    validate(inputName);
    validate(inputEmail);

    if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {

        console.log('verificar campos obrigatórios')
        return false
    } else {
        $(this).submit()
       
    }


    

})


//BLUR SECTION + lIBRARY (PLUGIN MASK FOR CONTROL REGEX'S) + LIBRARY _UI_JQUERY

    $('body').on('blur', '#nome', function() {

        validate($(this));
    })

    // blur email

    $('body').on('blur', '#email', function() {

  
        validate($(this));
    
    })

$('body').on('focus', '#date', function() {

    $(this).datepicker()
})

    $('body').on('blur', '#date', function() {

        validate($(this));    
    $('#date').mask('00/00/0000');
    
    })

    
    $('body').on('blur', '#time', function() {

  
        validate($(this));
    
        $('#time').mask('00:00');
    })

    $('body').on('blur', '#cep', function() {

  
        validate($(this));
        $('#cep').mask('00000-000');
    
    })

    $('body').on('blur', '#phone', function() {

  
        validate($(this));
        
    $('#phone').mask('0000-0000');
    
    })

    $('body').on('blur', '#cpf', function() {
  
        validate($(this));
        $('#cpf').mask('000.000.000-00');
    })



