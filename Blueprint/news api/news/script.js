const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=247218c92d0b40c4b0573fe04571ab7c";
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

async function newsdata() {
  const data = await getnews();
  for (const articles of data) {
    let des = await articles.title;

    let news = document.createElement("div");
    news.setAttribute("class", "news");
    document.getElementById("main1").appendChild(news);

    news.innerHTML = `
    <div class="content">
    <div class="des">
        <p>${await des}
       <button class="btn1">See more..</button>
        </p>
        </div>
        <div class="img">
        <img src="${await articles.urlToImage}" alt="" >
        </div>
      </div>
    </div>    `;
    // let head = document.createElement("h2");
    // news.appendChild(head);

    // let content = document.createElement("div");
    // content.setAttribute("class", "content");
    // news.appendChild(content);
    // content.innerHTML = `<p>${await des}

    // <button class="btn1">See more..</button>
    // </p>
    // <img src="${await articles.urlToImage}" alt="" >`;
    if (des === null) {
      news.remove();
    }
  }
}
