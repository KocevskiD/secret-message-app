const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encripted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encripted}`;
});

// document.querySelector('#clipboard-button').addEventListener('click', () => {

// })
function copyToClipboard(text) {
 
  const textarea = document.createElement("textarea");
  textarea.value = text;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const inputElement = document.getElementById("link-input");

const button = document.getElementById("clipboard-button");
button.addEventListener("click", () => {
  const text = inputElement.value;
  copyToClipboard(text);
  console.log("copied")
    document.querySelector('#copied').classList.remove('copied')
    document.querySelector('#copied').classList.add('reveal')
});

//SCII Character -> ASCII Character Code -> Binary -> join all together -> Convert each group of 6 -> Convert each group of 6 into a character -> join together(Base64)
