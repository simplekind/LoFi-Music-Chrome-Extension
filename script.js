imgNo= (Math.floor((Math.random() * 5) + 1) ).toString();
let root = document.querySelector(":root"); //grabbing the root element
root.style.setProperty("--img", 'url(./img/'+ imgNo+'.jpg)');
document.querySelector('button').addEventListener('click',function(){
    // var SelTrack = document.querySelector('select').value;
    if(document.getElementById('btn').innerText=='Play!' ){
        document.getElementById('btn').innerText='Pause';
        trackNo= (Math.floor((Math.random() * 16) + 1) ).toString();
        chrome.runtime.sendMessage({name:"PlayTrack",track:trackNo});
    }else{
        document.getElementById('btn').innerText='Play!';
        chrome.runtime.sendMessage({name:"StopTrack"});
    }
})