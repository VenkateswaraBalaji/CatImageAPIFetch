const div = document.getElementById("pasteHere")

const getData = async (url) => {
    try {
        const data = await fetch (url)
        const solve = await data.json()
        return (solve)
        } catch (error){
        console.log(error)
    }
};

    getData("https://api.thecatapi.com/v1/images/search?limit=10")
    .then ((images) => {
    console.log(images);
    let xy="";
    for (const y of images) {
        xy += `<img src="${y.url}" alt="Cat Image"/>`
    }
    div.innerHTML = xy;
    console.log(xy);
}) .catch ((error) => {
    console.log(xy);
});

