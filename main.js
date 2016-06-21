
window.onload = function(){
console.log("fuck yes");

//EVENT LISTENER on click//

  var submit = document.getElementById('submit-btn');
    submit.addEventListener('click', function(ev){
    ev.preventDefault();
      console.log('click');


  var userInput = document.getElementById('userInput').value;

  var query = "http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" + userInput + "&api_key=" + API_KEY + "&format=json";


//call to artist search//

  $.ajax({
    url: query,
    dataType: 'json',
  }).done(function(response){
    var inputObject = {


  };
  console.log(response);

  inputObject.results = response.results; //log results

  response.name = response.artist.name; //get name
  response.bio = response.artist.bio.content; //artist bio
  response.image = response.artist.image[3]["#text"]; //called 3rd image in array
  response.tag = response.artist.tags.tag[0]["name"]; //artist tag
  response.url = response.artist.url; //artist.url
  response.similar = response.artist.similar; //add similar artist
    // response.simimg = response.artist.image[2]["#text"];

  console.log(response);


        //handle bar src//
  var templateSource = document.getElementById('artist-widget').innerHTML;
  var template = Handlebars.compile(templateSource);
  var computedHtml = template(response);
  var nameContainer = document.getElementById('artist-template');
  nameContainer.innerHTML = computedHtml;

    console.log(response);
  }).fail(function(ev){
  });         // ends fail call



  }); //end event listener
  };
