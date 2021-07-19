'use strict';

const optArticleAuthorsSelector = '.post';

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

function generateAuthors() {
  const authors = document.querySelectorAll('.post');
  console.log(authors);
  for(let author of authors){
    const optWrapAuthors = author.querySelector('.post .post-author');
    console.log(optWrapAuthors);
    const authorsTag = author.getAttribute('data-author');
    console.log(authorsTag);
    let html = '';
    const linkHTML = '<li><a href="#tag-'+ authorsTag +'"></a></li>';
    html = html + linkHTML;
    console.log(html);
    // console.log(linkHTML);
    optWrapAuthors.innerHTML = html;  
  }
  const tagAuthorsLinks = document.querySelectorAll('.sidebar .authors a');
  console.log(tagAuthorsLinks);
  for(let link of tagAuthorsLinks){
    link.addEventListener('click', titleClickHandler);
  }


}
generateAuthors();