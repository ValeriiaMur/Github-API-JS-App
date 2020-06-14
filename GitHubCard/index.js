/*
  using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


let cards = document.querySelector(".cards");
console.log(cards);

getFirst = async function(callback){
  axios.get('https://api.github.com/users/ValeriiaMur')
  .then(function(response){
    //console.log(response);
    cards.appendChild(cardMaker(response.data));
    callback(response.data.followers_url);
  })
  .catch(function(error){
    console.log(error);
  })
}

getFirst(function(response){
  console.log(response);
  axios.get(response)
  .then(function(response){
    console.log(response);
    response.data.forEach((person) => {
      cards.appendChild(cardMaker(person));
    })
  })
  .catch(function(error){
    console.log(error);
  })
});

function cardMaker(info){
  let card = document.createElement("div");
  let img = document.createElement("img");
  let card_info = document.createElement("div");
  let h3 = document.createElement("h3");
  let name = document.createElement("p");
  let loc = document.createElement("p");
  let prof = document.createElement("p");
  let a_link = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  card.classList.add("card");
  img.setAttribute("src", info.avatar_url);
  card_info.classList.add("card-info");
  h3.classList.add("name");
  h3.textContent = info.name;
  name.classList.add("username");
  name.textContent = info.login;
  loc.textContent = "Location: " + info.location;
  prof.textContent = "Profile ";
  a_link.setAttribute("href", info.html_url);
  followers.textContent = "Followers :" + info.followers;
  following.textContent = "Following :" + info.following;
  bio.textContent = "Bio: "+ info.bio;

  card.appendChild(img);
  card.appendChild(card_info);

  card_info.appendChild(name);
  card_info.appendChild(loc);
  card_info.appendChild(prof);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio);

  prof.appendChild(a_link);

  return card;
}

