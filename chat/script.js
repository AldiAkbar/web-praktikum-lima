let result = document.querySelector(".result");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");


btn.addEventListener('click', function() {
    result.innerHTML = result.innerHTML + '<br>' + input.value;
    input.value = "";
});