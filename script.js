var ping = 100;

window.setInterval(function(){
       ping = ping + 1
       document.getElementById("ping").innerHTML = ping;
}, 10)

window.setInterval(function(){
       ping = ping - 1;
       document.getElementById("ping").innerHTML = ping;
}, 11)

if(ping >= 200){
   ping = 100
}
