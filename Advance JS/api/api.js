const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ca681b7105ea4fd1a0fd3722ba8bb0dd');

newsapi.v2.topHeadlines({
    sources: 'bbc-news,the-verge',
    language: 'en',
  })
  .then(response =>{
    console.log(response.totalResults);
    
  })
  .catch(err=>{
    console.log(err)
  })