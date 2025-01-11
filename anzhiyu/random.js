var posts=["2025/01/11/今天是周六/","2025/01/11/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };