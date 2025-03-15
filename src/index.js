document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const formInput = document.querySelector("#new-task-description")
    buildList(formInput.value)
    form.reset()
  })
});

function buildList(listText){
  let li = document.createElement('li');
  let parent = document.querySelector('#tasks')
  li.textContent = listText;
  parent.appendChild(li)
  console.log(li, parent);
} 