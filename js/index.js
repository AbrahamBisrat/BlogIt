function p(text) {
  console.log(text);
}
p("hellow Ninjas");
const blogContainer = document.querySelector(".blogs");

const posts = async () => {
  let uri = "http://localhost:3000/posts";
  return await (await fetch(uri)).json();
};
const users = async () => {
  const uri = "http://localhost:3000/users";
  return await (await fetch(uri)).json();
};
function renderPosts() {
  posts()
    .then((blogs) => {
      p(blogs);
      let template = "";
      blogs.forEach((blog) => {
        p(blog);
        template += `
              <div class="post">
                  <h2>${blog.title}</h2>
                  <p><small>${blog.likes} likes</small></p>
                  <p>${blog.body.slice(0, 200)}</p>
                  <a href="./details.html?id=${blog.id}">read more...</a>
              </div>
          `;
      });
      p(template);
      blogContainer.innerHTML = template;
    })
    .catch((err) => p(err));
}
// posts();
// users();
renderPosts();
