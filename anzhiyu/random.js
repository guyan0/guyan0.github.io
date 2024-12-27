var posts=["2024/12/27/hello-world/","2024/12/28/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };