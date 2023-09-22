let music = new Audio('sound.mp3')

let btn = document.getElementById("btn")

let res = true
btn.addEventListener("click" , ()=>{
    if(res == true){
        music.play()
        res = false;
    }else{
        music.pause()
        res = true;
    }
})

var P = $('.sentences > p');

P.hide().contents().each(function() {
    var Words;
    if (this.nodeType === 3) {
        Words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
        $(this).replaceWith(Words);
    } else if (this.nodeType === 1) {
        this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
    }
});

P.find('span').hide().each(function() {
    if( !$.trim(this.innerHTML) ) {
        $(this).remove();
    }
});

P.show().find('span').each(function(I) {
    $(this).delay(200 * I).fadeIn(800);
});