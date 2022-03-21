const p = (text) => console.log(text);
const createBtn = document.querySelector("input[type='submit']");
const form = document.forms[0];

const createPost = async (e) => {
  e.preventDefault();
  const post = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };
  p(post);
  const uri = "http://localhost:3000/posts";
  await fetch(uri, {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-Type": "application/json" },
  });
  window.location.replace("index.html");
};
form.addEventListener("submit", createPost);
