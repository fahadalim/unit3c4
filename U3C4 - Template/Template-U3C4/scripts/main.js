async function apiCall(url) {


    //add api call logic here

    try {
        let res = await fetch(url)

        let data = await res.json()

        return data;
    }
    catch(error)
    {
        console.log("error:",error)
    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach((element)=>{

        let div = document.createElement("div")

        let name = document.createElement("h4")
        name.innerText = element.title

        let image = document.createElement("img")
        image.src = element.urlToImage

        let des = document.createElement("p")
        des.innerText = element.description

        div.append(name,image,des)
        var arr =[element]

        div.onclick =()=>{

            localStorage.setItem("article",JSON.stringify(arr));
            window.location.href = "news.html"
        }
        main.append(div)
    })

}

export { apiCall, appendArticles }