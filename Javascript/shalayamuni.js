{
const h = document.createElement("h1");
h.innerHTML = "Hello World";
h.style.textAlign  = "center";
document.body.appendChild(h);
}
{
    const div1 = document.createElement("div");
    document.body.appendChild(div1);
    div1.setAttribute("id", "div1");
    
}
{
    const p1 = document.createElement("p");
    document.getElementById("div1").appendChild(p1);
    p1.setAttribute("id", "p1");
    p1.innerHTML = "Welcome to Coding World";
    p1.style.textAlign  = "center";
    p1.style.textDecoration = "underline"
    p1.style.textDecorationColor = "green"
}

{
    const pt = document.createElement("p");
    document.body.appendChild(pt);
    pt.innerHTML = "Welcome to Coding World";
    for (let i = 0; i < 100; i++) {
       p1.style.innerHTML = i;
        
    }
}


