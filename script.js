const val = 
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector("#message-input");
    const encripted = btoa(input.value)
    document.querySelector('#link-input').value = encripted;
})



//SCII Character -> ASCII Character Code -> Binary -> join all together -> Convert each group of 6 -> Convert each group of 6 into a character -> join together(Base64) 