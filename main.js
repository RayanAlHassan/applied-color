let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

add.addEventListener("click", () =>
{
  if (input.value !== "")
  {
    let span = document.createElement("span");
    let del = document.createElement("button");

    span.innerText = input.value;
    del.innerText = "Delete";

    del.addEventListener( "click",()=> {
      span.remove();
      window.localStorage.removeItem(`spann ${span.dataset.index }`) // to delete the data from localstorage
    })

    span.append(del);
    tasks.appendChild(span);
    span.dataset.index = tasks.childElementCount; // that is like an id for spann  // get the nb of child in this element and give it to the index

    window.localStorage.setItem(`spann ${ span.dataset.index }`, span.innerText.substring(0,span.innerText.indexOf("Delete")));

    input.value = "";
    
    console.log(span.innerText.substring(0, span.innerText.indexOf("Delete")));
    console.log(tasks.childElementCount);
  }
})

window.addEventListener("load", () =>
{
  for (let i = 0; i < localStorage.length; i++)
  {
    let key = window.localStorage.key(i);
    if (key)//if i have key  ..
    {
      let span = document.createElement("span");
      let del = document.createElement("button");
      del.innerText = "Delete";

      del.addEventListener( "click",()=> {
        span.remove();
        window.localStorage.removeItem(key)// remove of index is as same as remove for whole element
      })

      span.innerText = window.localStorage.getItem(key);
      span.dataset.index = key.substring(5);
      console.log(key.substring(5));// will start after the 5 element in key=> index
      span.append(del);
      tasks.appendChild(span)

  
    }

    
  }
})

// window.localStorage.clear();





























