function p(text) {
  console.log(text);
}
p("hellow Ninjas");

const posts = async () => {
  let uri = "http://localhost:3000/posts";
  const data = await (await fetch(uri)).json();

  p(data);
  return data;
};
const users = async () => {
  const uri = "http://localhost:3000/users";
  const data = await (await fetch(uri)).json();
  p(data);
  return data;
};

window.addEventListener("DOMContentLoaded", () => {
  posts();
  users();
});
