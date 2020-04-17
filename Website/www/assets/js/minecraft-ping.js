$(function(){
    if($('body').is('.mcStatusPage')){  
        window.setInterval(function(){
          pingMCServer();
        }, 10000);
    }
});

function pingMCServer(){
    var url = "https://api.minetools.eu/ping/mc.uzairmahmed.com/25565";
    console.log("Pinging Minecraft Server");
    $.getJSON(url, function(r) {
        if(r.error){
            $('#rest-txt').html('OFFLINE');
            return false;
        } 
        var pl = '';
        if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
        $('#rest-txt').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online</b>'+r.players.online+pl);
        $('#mc-favicon').attr('src', r.favicon);
    });
}
