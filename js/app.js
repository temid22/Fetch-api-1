const form = document.getElementById('newBookform');
const input = document.getElementById('newBookinput');
const google = 'https://www.googleapis.com/books/v1/volumes?q='

document.getElementById('newBookform').addEventListener('submit', newBookform);

function newBookform(e){
  e.preventDefault();
  let input = document.getElementById('newBookinput');

  let url = google + input.value;
  //  let win = window.open(url);
  //  win.focus();
    if(input.value=="" || input.value== null) {
        displayError();
    }

  fetch(url, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    },
  }) 
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    let output = '<h2 class ="bookList">Search results</h2>';
    data.items.slice(0, 10).forEach(function(item){
        output += ` 
            <div class="container">
                <div class="row">
                    <div class="card">
                       
                            <img src="${item.volumeInfo.imageLinks.thumbnail} alt="">
                            <h3>Title: ${item.volumeInfo.title}</h3>
                            <p>Author: ${item.volumeInfo.authors}</p>
                            <p class="des">Description: ${item.volumeInfo.description}</p>
                            <a target="_blank" href="${item.volumeInfo.infoLink}" class="more">Read More</a>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('output').innerHTML = output;
})

function displayError() {
    alert("Alaye your papa won search wetin?")
  }
}