$(document).ready(function(){
    $('#open-card1').click(function(){
        var span = $('.desaparesse1')
        if ($('.desaparesse1').css('display') === 'block'){
            $('.desaparesse1').css('display', 'none');
            $('#span1').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span1').text('>');
        }
    })
    $('#open-card2').click(function(){
        var span = $('.desaparesse2')
        if ($('.desaparesse2').css('display') === 'block'){
            $('.desaparesse2').css('display', 'none');
            $('#span2').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span2').text('>');
        }
    })
    $('#open-card3').click(function(){
        var span = $('.desaparesse3')
        if ($('.desaparesse3').css('display') === 'block'){
            $('.desaparesse3').css('display', 'none');
            $('#span3').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span3').text('>');
        }
    })
    $('#open-card4').click(function(){
        var span = $('.desaparesse4')
        if ($('.desaparesse4').css('display') === 'block'){
            $('.desaparesse4').css('display', 'none');
            $('#span4').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span4').text('>');
        }
    })
    $('#open-card5').click(function(){
        var span = $('.desaparesse5')
        if ($('.desaparesse5').css('display') === 'block'){
            $('.desaparesse5').css('display', 'none');
            $('#span5').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span5').text('>');
        }
    })
    $('#open-card6').click(function(){
        var span = $('.desaparesse6')
        if ($('.desaparesse6').css('display') === 'block'){
            $('.desaparesse6').css('display', 'none');
            $('#span6').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span6').text('>');
        }
    })
})