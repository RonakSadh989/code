// to clear

function clearit() {
  localStorage.clear();
  location.reload();
}
// to create todos
function todofun() {
  let todo1 = document.getElementById("todo").value;
  if (todo1 == "") {
    // alert("Enter some value first")
  } else {
    localStorage.setItem(localStorage.length, todo1);
    // document.getElementById("todo").value = "";
  }

  if (localStorage.length == 0) {
    console.log("there is nothing");
  } else {
    let div = document.createElement("div");
    document.getElementById("ul").appendChild(div);
    div.setAttribute("class", localStorage.length);
    div.classList.add("tododiv");
    div.style.display = "flex";

    let li = document.createElement("li");
    div.appendChild(li);
    li.setAttribute("class", localStorage.length);
    li.classList.add("li");

    let done = document.createElement("video");
    done.innerHTML = `  <source src="OdxMcbsEHh.mp4" type="video/mp4">`;
    done.setAttribute("class", localStorage.length);
    done.setAttribute("id", localStorage.length - 1);
    done.classList.add("done");
    done.playbackRate = 2;
    
    done.addEventListener("click", function () {
     
        this.parentElement.style.textDecoration = "line-through";
        this.play();
            
       setTimeout(() => {
        this.parentElement.remove();
        localStorage.removeItem(this.id);
      }, 2000);
    });
    div.appendChild(done);
  }
}
function liname() {
  for (let i = 0; i <= localStorage.length - 1; i++) {
    let li = document.getElementsByClassName("li");
    li[i].innerHTML = localStorage.getItem(i);
  }
}
async function todofun1() {
  await todofun();
  await liname();
}

//to run on load
function func(i) {
  let li = document.getElementsByClassName("li");
  li[i].innerHTML = localStorage.getItem(i);
}
async function onload() {
  for (let i = 0; i < localStorage.length; i++) {
    await todofun();
    await func(i);
  }
}
