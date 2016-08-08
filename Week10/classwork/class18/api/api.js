$('#submit').click(function(e){
    e.preventDefault();
});

function getMovie(movieName)
{
    
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json); 
    });
}



