chrome.runtime.onMessage.addListener((msg,sender,res)=>{
    var audio = document.querySelector(".audio-element");
    if(msg.name=="PlayTrack"){
        // Send Response
        var trackName=msg.track;
        audio.src="./Lo-Fi/"+trackName+'.mp3';
        audio.play();
    }else{
        audio.pause();
    }
}) ;