function toggle(theElement){
    var theElement = document.getElementById(theElement);
    
    //Show the element or hide it
    // if ( theElement.style.display != 'block' ) {
    //     theElement.style.display = 'block';
    // }else{
    //     theElement.style.display = 'none';
    // }

    //Hide all elements, then show the one we clicked on
    var elementsToHide = document.getElementsByClassName('mg_tile-inside');
    for(i=0; i<elementsToHide.length; i++){
        elementsToHide[i].style.display = 'none';
    }

    //Show the element or hide it
        theElement.style.display = 'block';


}

$(document).ready(function(){
    $('.mg_tile').click(function(){
        if($('.mg_tile-inside:visible').length == 2){
            $('.mg_tile-inside').hide();
        }
        $(this).find('.mg_tile-inside').show();

        //Check again
        if($('.mg_tile-inside:visible').length == 2){
            $('.mg_tile-inside:visible').each(function(){
                card = $(this).attr('card');
            });
        }
    });
});
