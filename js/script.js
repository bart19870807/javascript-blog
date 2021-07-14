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
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = this.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
};
// funkcja która wypisuje nam w konsoli informację że link został klikniety

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

    

function generateTitleLinks() {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);

  /* for each article */
  const articles = document.querySelectorAll('.post');
        
  let html = '';
  for(let article of articles){

    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */
        
    /* create HTML of the link */
    const linkHTML ='<li><a href="#' + articleId +' "><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
        
    // petla for w ktorej dokonuje się iteracja links która przypisana jest do zmiennej link
    // po wybraniu i kliknięci linku wykonywana jest funkcja która wyświetla komunikat
    html = html + linkHTML;
        
                    
  }
    
  console.log(html);
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  // stała links w której wybieramy wszystkie selectory title a
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

function generateTags() {
/* find all articles */
  const articles = document.querySelectorAll('.post');
  console.log(articles);
  /* START LOOP: for every article: */
  for(let article of articles) {
  /* find tags wrapper */
    const optWrapTags = article.querySelector(optArticleTagsSelector);
    console.log(optWrapTags);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
  }
  

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();