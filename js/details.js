const p = (text) => console.log(text);
const detailsContainer = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");
const id = new URLSearchParams(window.location.search).get("id");
const uri = `http://localhost:3000/posts/${id}`;

const getDetails = async (id) => {
  return await (await fetch(uri)).json();
};

let template = "";
const renderDetails = () => {
  getDetails(id)
    .then((blog) => {
      template += `
            <div class='detail-post'>
                <h1>${blog.title}</h1>
                <p><small>${blog.likes} likes</small></p>
                <p>${blog.body}</p>
            </div>
        `;
      detailsContainer.innerHTML += template;
    })
    .catch((err) => p(err));
  console.log("does the code even reaches here");
};
window.addEventListener("DOMContentLoaded", () => renderDetails());
deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  p("Deleting");
  window.location.replace("/index.html");
});
