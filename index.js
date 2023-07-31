fetch("http://localhost:3000/films")
.then(resp => resp.json())
.then(data => {

 // let allMovies = data
  //console.log(data);
  const firstFilm = data.find((object) => object.id == 1)
  //console.log(firstFilm);
  
  const moviePoster = document.getElementById("moviePoster")
  let posterImage = document.createElement("img")

  posterImage.src = firstFilm.poster;
  posterImage.alt = "Poster image"
  posterImage.width = "300"
  posterImage.height ="450";
  moviePoster.appendChild(posterImage)

  //display title of first film
  const firstMovieTitle = document.createElement("p")
  const firstMovieRuntime = document.createElement("p")
  firstMovieTitle.innerText = firstFilm.title
  firstMovieRuntime.innerText = firstFilm.runtime


  let movieTitle = document.createElement("p")
  let movieRunTime = document.createElement("p")

  movieTitle.innerText = firstFilm.title
  movieRunTime.innerText = `${firstFilm.runtime} minutes`
  // titleAndRunTime.appendChild(movieTitle)
  // titleAndRunTime.appendChild(movieRunTime)

  const moreDetails = document.getElementById("moreDetails")
  let paradescription = document.createElement("p")
  let showtimebtn = document.createElement("button")

  let remTickets = firstFilm.capacity - firstFilm.tickets_sold
  let spanElement = document.createElement("span")
  let ticketBtn = document.createElement("button")
  let breakElement = document.createElement("br")



  showtimebtn.innerText = firstFilm.showtime
  paradescription.innerText = firstFilm.description
  spanElement.innerText = `${remTickets} remaining tickets`
  ticketBtn.innerText = "Buy Ticket"





  moreDetails.appendChild(showtimebtn)
  moreDetails.appendChild(paradescription)
  moreDetails.appendChild(ticketBtn)
  moreDetails.appendChild(spanElement)
  moreDetails.appendChild(breakElement)
  moreDetails.appendChild(firstMovieTitle)
  moreDetails.appendChild(firstMovieRuntime)

  ticketBtn.addEventListener("click", () =>{
  // alert("I am Clicked")
  if (remTickets === 1) {
    //alert("No more tickets")
    ticketBtn.innerText = "SOLD OUT"
    spanElement.innerText = ""
  } else {
    --remTickets;
    //console.log(remTickets)
    spanElement.innerText = `${remTickets} remaining tickets`
  }
})
});


function getFilms(){
  fetch ('http://localhost:3000/films')
  .then((response => response.json()))
  .then((renderFilms))
  }
  getFilms()
  function renderFilms(films) {
  films.forEach(filmDetails)
  }
  function filmDetails(details){
  const titlesElement = document.getElementById("titles")
  let listElement = document.createElement("li")
  listElement.innerText = details.title;
  titlesElement.appendChild(listElement)
  }




