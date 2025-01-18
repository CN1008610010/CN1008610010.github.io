var posts=["2025/01/18/假期第一篇/","2025/01/11/今天是周六/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };