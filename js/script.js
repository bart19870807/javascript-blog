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
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags .list';
  

    

function generateTitleLinks(customSelector = '') {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  // console.log(articles);   
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
function calculateTagsParams(tags){
  const params = {
    max: 0,
    min: 999999
  };
  for(let tag in tags){
    console.log(tag + ' is used ' + tags[tag] + ' times');
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }else if (tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  return params;
}
  


calculateTagsParams();

function generateTags() {
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll('.post');
  // console.log(articles);
  /* START LOOP: for every article: */
  for(let article of articles) {
  /* find tags wrapper */
    const optWrapTags = article.querySelector(optArticleTagsSelector);
    // console.log(optWrapTags);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    // console.log(articleTagsArray);

    /* START LOOP: */
    /* for each tag */
    for(let tag of articleTagsArray){
      // console.log(tag);
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-'+ tag +'">'+ tag +'</a></li>';
      html = html + linkHTML;
      console.log(linkHTML);
  
      /* add generated code to HTML variable */
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]){
      /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      optWrapTags.innerHTML = html;
    }
    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */
    const tagLinks = document.querySelectorAll('.post .list a');
    // console.log(tagLinks);

    for(let link of tagLinks) {
      link.addEventListener('click', tagClickHandler);
    }

    /* END LOOP: for every article: */
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += '<li><a href="#tag-' + tag + '">'+ tag + '(' + allTags[tag] + ')' + '</a></li>';
    }
    
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
  }
}


generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  // event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  // /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /* find all tag links with class active */
  const tagActives = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(tagActives);
  /* START LOOP: for each active tag link */
  /* remove class active */
  for(let tagActive of tagActives) {
    tagActive.classList.remove('active');
  }
  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */
  const tagActivesAdded = document.querySelectorAll('a[href="' + href + '"]');
  for(let tagActivesAddeds of tagActivesAdded) {
    tagActivesAddeds.classList.add('active');
  }
  /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('.post .list a');
  console.log(tagLinks);
  /* START LOOP: for each link */
  for(let link of tagLinks) {
    link.addEventListener('click',tagClickHandler);
  }

  // 1.stała tagLinnks - wybieramy wszystkie elementy z aricle o klasie post z ul o klasie list wybieramy wszystkie a
  // 2. petla for- z wszystkich linków (tagLinks) wybierany jest jeden (link)
  // 3. nasłuchujemy zdarzenia - po kliknięciu w tag wywoływana jest funkcja tagClickHandler 

  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();


function generateAuthors() {
  const authors = document.querySelectorAll('.post');
  console.log(authors);
  for(let author of authors){
    const optWrapAuthors = author.querySelector('.post .post-author');
    console.log(optWrapAuthors);
    const authorsTag = author.getAttribute('data-author');
    console.log(authorsTag);
    let html = '';
    const linkHTML = '<li><a href="#author-'+ authorsTag +'">' + authorsTag +'</a></li>';
    html = html + linkHTML;
    console.log(html);
    // console.log(linkHTML);
    optWrapAuthors.innerHTML = html;  
  }
  const tagAuthorsLinks = document.querySelectorAll('.sidebar .authors');
  // console.log(tagAuthorsLinks);
}
generateAuthors();

function authorClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  // console.log(clickedElement);
  const href = clickedElement.getAttribute('href');
  // console.log(href);
  const tag = href.replace('#author-', '');
  // console.log(tag);
  generateTitleLinks('[data-author="' + tag + '"]');    
}


function addClickListenerAuthors() {
  const tagAuthorsLinks = document.querySelectorAll('.posts .post-author a');
  // console.log(tagAuthorsLinks);
  for(let link of tagAuthorsLinks){
    link.addEventListener('click', titleClickHandler);
    // console.log(link);
}
}
addClickListenerAuthors();


