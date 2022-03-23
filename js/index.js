const p = (text) => console.log(text);
const blogContainer = document.querySelector(".blogs");
const searchBar = document.forms[0];

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(searchBar.term.value);
  renderPosts(searchBar.term.value);
});

const posts = async (query) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (query) uri += `&q=${query}`;
  return await (await fetch(uri)).json();
};
const users = async () => {
  const uri = "http://localhost:3000/users";
  return await (await fetch(uri)).json();
};
function renderPosts(query) {
  posts(query)
    .then((blogs) => {
      let template = "";
      blogs.forEach((blog) => {
        template += `
              <div class="post">
                  <h2>${blog.title}</h2>
                  <p><small>${blog.likes} likes</small></p>
                  <p>${blog.body.slice(0, 200)}</p>
                  <a href="./details.html?id=${blog.id}">read more...</a>
              </div>`;
      });
      blogContainer.innerHTML = template;
    })
    .catch((err) => p(err));
}
renderPosts();
