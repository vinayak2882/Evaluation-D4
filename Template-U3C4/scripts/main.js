async function apiCall(url) {

try{
    let res =await fetch(url)
    let data =await res.json()
    return data
}
catch(err){
    console.log(err)
}
    //add api call logic here


}


function appendArticles(articles, main) {
    articles.forEach(({content,image}) => {

    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerText=content
    let img = document.createElement('img')
    img.src=image
    let dis = document.createElement('p')
    dis.innerText=discription

    div.append(p,img,dis)
    main.append(div)
    
});



    //add append logic here

}

export { apiCall, appendArticles }