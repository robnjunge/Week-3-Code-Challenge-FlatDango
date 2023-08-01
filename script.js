function displayMovieList() {
    fetch("http://localhost:3000/films")
      .then((resp) => resp.json())
      .then((data) => {
        const titlesElement = document.getElementById("titles");
  
        function displayMovieDetails(movie) {
          const moviePoster = document.getElementById("moviePoster");
          const movieDetails = document.getElementById("moreDetails");
          const titleAndRuntime = document.getElementById("titleAndRuntime");
  
          moviePoster.innerHTML = "";
          movieDetails.innerHTML = "";
          titleAndRuntime.innerHTML = "";
  
          let posterImage = document.createElement("img");
          posterImage.src = movie.poster;
          posterImage.alt = "Poster image";
          posterImage.width = "300";
          posterImage.height = "450";
          moviePoster.appendChild(posterImage);
  
          let movieTitle = document.createElement("h2");
          let movieRunTime = document.createElement("p");
  
          movieTitle.innerText = movie.title;
          movieRunTime.innerText = `${movie.runtime} minutes`;
          titleAndRuntime.appendChild(movieTitle);
          titleAndRuntime.appendChild(movieRunTime);
  
          let paradescription = document.createElement("p");
          let showtimebtn = document.createElement("button");
  
          let remTickets = movie.capacity - movie.tickets_sold;
          let spanElement = document.createElement("span");
          let ticketBtn = document.createElement("button");
          let breakElement = document.createElement("br");
  
          showtimebtn.innerText = movie.showtime;
          paradescription.innerText = movie.description;
          spanElement.innerText = `${remTickets} remaining tickets`;
          ticketBtn.innerText = "Buy Ticket";
  
          movieDetails.appendChild(showtimebtn);
          movieDetails.appendChild(paradescription);
          movieDetails.appendChild(ticketBtn);
          movieDetails.appendChild(spanElement);
          movieDetails.appendChild(breakElement);
  
          ticketBtn.addEventListener("click", () => {
            if (remTickets === 1) {
              ticketBtn.innerText = "SOLD OUT";
              spanElement.innerText = "";
            } else {
              --remTickets;
              spanElement.innerText = `${remTickets} remaining tickets`;
            }
          });
        }
  
        data.forEach((movie) => {
          let listElement = document.createElement("li");
          listElement.innerText = `${movie.id}: ${movie.title}`;
          titlesElement.appendChild(listElement);
  
          listElement.addEventListener("click", () => {
            displayMovieDetails(movie);
          });
        });
  
        const firstMovie = data[0];
        const firstMovieElement = titlesElement.querySelector("li");
        if (firstMovieElement) {
          firstMovieElement.click();
        }
      });
  }
  
  displayMovieList();
  