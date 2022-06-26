let articles = document.getElementsByClassName('timeline-content');

for(article of articles) {
  let ar = article.getElementsByTagName("article");
  let height = ar[0].clientHeight;
  article.style.minHeight =  height - height/3 + "px";
  console.log(height);
}