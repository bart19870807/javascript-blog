'use strict';
// document.getElementById('test-button').addEventListener('click',function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
// });
const titleClickHandler = function(){
    console.log('Link was clicked!');
    console.log(event);
    /* remove class 'active' from all article links  */

    /* add class 'active' to the clicked link */

    /* remove class 'active' from all articles */

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */
}
// funkcja która wypisuje nam w konsoli informację że link został klikniety
const links = document.querySelectorAll('.titles a');
// stała links w której wybieramy wszystkie selectory title a
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
// petla for w ktorej dokonuje się iteracja links która przypisana jest do zmiennej link
// po wybraniu i kliknięci linku wykonywana jest funkcja która wyświetla komunikat
