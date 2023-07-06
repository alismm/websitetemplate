let header = document.getElementsByTagName('header') ;
let header_link = document.querySelectorAll('.header_menu a') ;

document.addEventListener('scroll', function() {
    if(window.scrollY > 20){
        header[0].classList.add('header_background_color');
    }
    else{
        header[0].classList.remove('header_background_color');
    }
});

function go_to_pos(i){
    if (i === 0 ){
        window.scrollTo(0,1000);
    }
    if (i === 1 ){
        window.scrollTo(0,1000);
    }
    if (i === 2 ){
        window.scrollTo(0,1000);
    }
    if (i === 3 ){
        window.scrollTo(0,1000);
    }
    if (i === 4 ){
        window.scrollTo(0,1000);
    }
    if (i === 5 ){
        window.scrollTo(0,1000);
    }
    if (i === 6 ){
        window.scrollTo(0,1000);
    }
}

for (let i = 0; i < header_link.length ; i++) {
    header_link[i].addEventListener('click', go_to_pos.bind(this,i));
}

