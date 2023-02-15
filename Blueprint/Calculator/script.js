function cal() {
  let res = document.getElementById("res");
  let d = eval(res.innerHTML);
  return (res.innerHTML = d);
}
function back() {
  let res = document.getElementById("res");
  return (res.innerHTML = res.innerHTML.slice(0, res.innerHTML.length - 1));
}
