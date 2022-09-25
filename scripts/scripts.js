const URL = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector("p");
const advice = document.querySelector("h1");
const article = document.querySelector("article");

axios
  .get(URL)
  .then((res) => {
    let adviceIdContent = res.data.slip.id;
    let adviceContent = res.data.slip.advice;
    adviceId.innerHTML = `Advice #${adviceIdContent}`;
    advice.innerHTML = `&#8220;${adviceContent}&#8221;`;
    article.style.display = "flex";
  })
  .catch((error) => console.log("Error: ", error));
