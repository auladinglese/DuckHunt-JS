$(function() {

    $(document).on("click",'.mute',function(){
        $(".sounds").each(function(index,audio){
             audio.volume=0;
        })

        $('.mute').addClass('unmute').removeClass('mute').html('unmute');
    });

    $(document).on('click','.unmute',function(){
        $(".sounds").each(function(index,audio){
            audio.volume=1;
        })

        $('.unmute').addClass('mute').removeClass('unmute').html('mute');
    });

    $(document).on('click','.tryAgain',function(){
       tryAgain();
    });

    $(document).on('click','.doit',function(){
        makeLevel();
    });

    $(document).ready(function(){
        //mute the sounds for debuging
        $('.mute').trigger('click');
        theGame.loadLevel(levelArray[theGame.currentLevel][0],levelArray[theGame.currentLevel][1],levelArray[theGame.currentLevel][2],levelArray[theGame.currentLevel][3],levelArray[theGame.currentLevel][4],levelArray[theGame.currentLevel][5]);
    });

});

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

