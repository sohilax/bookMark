var imgList = Array.from(document.getElementsByClassName('img-item'));
var itemInner = document.getElementsByClassName('item-inner');
var lightBox = document.querySelector('.light-box');
var inner = document.querySelector('.inner');
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var closeBtn = document.getElementById('close');

var currentIndex = 0;

for (i = 0; i < itemInner.length; i++) {

    itemInner[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute('src');
        currentIndex = imgList.indexOf(e.target);
        lightBox.classList.replace('d-none', 'd-flex');
        inner.style.backgroundImage = `url(${imgSrc})`;
    })

}

function slide(i) {
    currentIndex = currentIndex + i;
    if (currentIndex == imgList.length) {
        currentIndex = 0;
    }
    if (currentIndex == -1) {
        currentIndex = imgList.length - 1;
    }

    var imgSrc = imgList[currentIndex].getAttribute('src');
    inner.style.backgroundImage = `url(${imgSrc})`;
}

function close ()
{
    lightBox.classList.replace('d-flex', 'd-none');  
}

nextBtn.addEventListener('click', function () {
    slide(1);
}
);

prevBtn.addEventListener('click', function () {
    slide(1);
}
);

closeBtn.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key==='A' ) {
        slide(1);
    }
    else if (e.key === 'ArrowLeft' || e.key==='D') {
        slide(-1);
    }
    else if(e.key === 'Escape') {
       close();
    }
});




document.body.addEventListener('click',function(){
    lightBox.addEventListener('click',close); 
});


inner.addEventListener('click', function(){
    lightBox.removeEventListener('click', close);
});


document.body.addEventListener('touchend', function(){
    slide(1);
}, )









// document.addEventListener( 'keypress', function(e){

//     if (e.key === 'KeyA')
//     {
//         console.log('hola');
//         // slide(1);
//     } 
// });
// document.addEventListener('click', function (e) {
//     if (e.altKey) {
//       console.log('With alt, do something...');
//     }
//   });

//   document.addEventListener('keydown', function (e) {
//     if ( e.key==='A' ) {
//         console.log('hola')
//     }
  
// });