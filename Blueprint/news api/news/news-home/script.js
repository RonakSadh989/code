const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=247218c92d0b40c4b0573fe04571ab7c";
async function getnews() {
  try {
    const api = await fetch(url);
    const apijson = await api.json();
    console.log("done");
    console.log(apijson);
    return apijson.articles;
  } catch (error) {
    console.log(error);
  }
}

async function news(){
    const data = await getnews();
    let div = document.getElementById("headnews");
    div.innerHTML =  `<img src="${await data[0].urlToImage}" alt="" height="80px">
    <p >${await data[0].title +"<br>" +" ~By " + await data[0].author}
    <button class="btn1" ><a href="${await data[0].url}">See more..</a></button>
    </p>`
}
news()