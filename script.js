var finished = false;
var count = 0;

function moveTurtle(){
    if(finished === true){
        defaultTurtle();
        setTimeout(function(){
            jQuery('#turtle').removeClass('flip');
        },1000);
        finished = false;
    } else {
        finished = true;
    jQuery('.button').addClass('default');
    jQuery('#turtle').addClass('animate');

  

    }
    
}

function defaultTurtle(){
    jQuery('#turtle').addClass('flip');
    jQuery('#turtle').removeClass('animate');
    jQuery('.button').removeClass('default');
    jQuery('.button').addClass('start');
    
}

jQuery('.button').click(moveTurtle);
