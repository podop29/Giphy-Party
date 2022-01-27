const removeBtn = $("#removeBtn");
const searchBtn = $("#searchBtn");
const textBox = $("#textBox")

searchBtn.on("click",(e)=>{
    e.preventDefault();
    getData(textBox.val());
})

removeBtn.on("click",(e)=>{
    e.preventDefault();
    $("#Gifs").empty();
})

async function getData(searchTerm){
    const results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    const length = results.data.data.length
    const url = results.data.data[Math.floor(Math.random() * length)].images.original.url
    makeAndAppendImg(url)
}

function makeAndAppendImg(url){
    const img = $('<img class="gif">')
    img.attr('src', url)
    img.appendTo($('#Gifs'))
}


