'use strict';
// document.getElementById('test-button').addEventListener('click',function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
// });
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    
    console.log('Link was clicked!');
    // console.log(event);
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');
    // stała w której wybierane są wszystkie artykuły które są aktywne
    for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    // tu zachodzi wyszukanie wszystkich linków z klasą active i po znalezieniu
    // usuniecie - remove klasy active

    /* [IN PROGRESS] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    console.log('clickedElement (with plus):'+clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active')
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = this.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
}
// funkcja która wypisuje nam w konsoli informację że link został klikniety
const links = document.querySelectorAll('.titles a');
// stała links w której wybieramy wszystkie selectory title a
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
// petla for w ktorej dokonuje się iteracja links która przypisana jest do zmiennej link
// po wybraniu i kliknięci linku wykonywana jest funkcja która wyświetla komunikat
