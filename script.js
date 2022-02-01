const bar = document.querySelector('.progress_bar');
window.onscroll = function (){myFunction()}

function myFunction(){
    
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.scrollHeight - document.documentElement.clientHeight;
    var calculate = (top / height) * 100;
    bar.style.width = calculate + "%";
}
