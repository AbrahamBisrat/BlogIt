const p = (text) => console.log(text);
const detailsContainer = document.querySelector(".details");
const id = new URLSearchParams(window.location.search).get("id");
const uri = `http://localhost:3000/posts/${id}`;

const getDetails = async (id) => {
  return await (await fetch(uri)).json();
};

let template = "";
const renderDetails = () => {
  getDetails(id)
    .then((blog) => {
      p(blog);
      template += `
            <div class='detail-post'>
                <h1>${blog.title}</h1>
                <p><small>${blog.likes} likes</small></p>
                <p>${blog.body}</p>
            </div>
        `;
      p(template);
      detailsContainer.innerHTML += template;
    })
    .catch((err) => p(err));
  console.log("does the code even reaches here");
  console.log(template);
};
window.addEventListener("DOMContentLoaded", () => renderDetails());
