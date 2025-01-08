var posts=["2025/01/04/这是另一篇文章/","2025/01/04/这是一篇测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };