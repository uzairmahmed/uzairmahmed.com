backendURL = 'https://backend-dot-uzairmahmeddotcom.appspot.com';
//backendURL = '//127.0.0.1:5000'

$(function(){
    if($('body').is('.mcStatusPage')){ 
        document.getElementById("mc-button").addEventListener("click", function(){
            validateButton(document.getElementById("mc-server-pass").value);
        });
    }
});

window.onload = function() {
    if($('body').is('.mcStatusPage')){  
        var load = document.getElementById('mc-status-loading-icon');
        var start = document.getElementById('mc-status-started-icon');
        var stop = document.getElementById('mc-status-stopped-icon');
        load.style.display = 'block';
        start.style.display = 'none';
        stop.style.display = 'none';
        $('#mc-button').text('PLEASE WAIT');
        $('#mc-button').prop("disabled", true);
        $('#mc-status-text').text("LOADING");
        
        getStatus();
    }
};

async function validateButton(inputPass){
    let validity = await getPassValid(inputPass);
    if (validity == 1){
        console.log("PASSWORD VALID, CHANGING STATUS");
        changeStatus();
    }
}           
async function getPassValid(inputPass) {
    return await axios.post(backendURL + '/mc-password-check', {input: inputPass}).then(({ data }) => {
        var alert = document.getElementById('mc-pass-status');
        if (data == "VALID"){
            alert.innerHTML = "VALID PASSWORD";
            alert.style.color = "green"
            return 1;
        }
        else if (data == "INVALID"){
            alert.innerHTML = "INVALID PASSWORD";
            alert.style.color = "red"
            return 0;
        }
    })
}

async function getStatus() {
    return await axios.get(backendURL + '/mc-status', {}).then(({ data }) => {
        console.log(data);
        var responseTxt = data;
        $('#mc-status-text').text(responseTxt);

        var load = document.getElementById('mc-status-loading-icon');
        var start = document.getElementById('mc-status-started-icon');
        var stop = document.getElementById('mc-status-stopped-icon');

        if (responseTxt == 'TERMINATED') {
            load.style.display = 'none';
            start.style.display = 'none';
            stop.style.display = 'block';
            $('#mc-button').text('START VM');
            $('#mc-button').prop("disabled", false);
            return 0;
        }
        else if (responseTxt == 'RUNNING') {
            load.style.display = 'none';
            start.style.display = 'block';
            stop.style.display = 'none';
            $('#mc-button').text('STOP VM');
            $('#mc-button').prop("disabled", false);
            return 1;
        }
        else {
            load.style.display = 'block';
            start.style.display = 'none';
            stop.style.display = 'none';
            $('#mc-button').text('PLEASE WAIT');
            $('#mc-button').prop("disabled", true);
            return 2;
        }
        return -1;
    }
)}
async function changeStatus() {
    let result = await getStatus();
    
    var load = document.getElementById('mc-status-loading-icon');
    var start = document.getElementById('mc-status-started-icon');
    var stop = document.getElementById('mc-status-stopped-icon');
    var button = document.getElementById('mc-button');
    
    load.style.display = 'block';
    start.style.display = 'none';
    stop.style.display = 'none';
    button.style.display='hidden';
    
    $('#mc-status-text').text("LOADING");
    $('#mc-button').text('PLEASE WAIT');
    $('#mc-button').prop("disabled", true);
    
    
    let action = await dingdong(result);
    
    button.style.visibility='visible';
    getStatus();
    
    return action;
}
async function dingdong(result) {
    if (result === 0) {
        return await axios.get(backendURL + '/start-mc', {});
    } else if (result === 1) {
        return await axios.get(backendURL + '/stop-mc', {});
    }
    console.log(`ERROR:${result}`);
    return result;
}

