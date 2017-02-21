$(document).ready(function(){
  //get dat button
  $('button').click(function(){
    var userSearch = $('#search').val();
    $.ajax({
      //method for the HTTP request e.g. GET, POST, ..
      method: 'GET',
      //url is the place where the data lives
      url: `http://omdbapi.com/?s=${userSearch}`,
      //the format of data you want to get back
      dataType: 'json',
      //stuff that happens if I get the data I want back
      success: function(data){
        //select the "collections" element
        let collection = $('.collection');
        // collection[0].innerHTML = '';
        collection.show();
        //go through each movie in the data returned from the API
        //display them each as li-collection elements
        var ds = data.Search;
        for(var i = 0; i < ds.length; i++){
          let movie = ds[i];
          let title = movie.Title
          let year = movie.Year
          $(collection).append(`<li class="collection-item">${title} (${year})</li>`)
        }
        //add event listener to the collection element
        $('.collection').click(function(event){
          //movie that was selected
          var movie = event.target;
          //select for the movie box
          var movieDivs = $('.movie');
          for(var i = 0; i < movieDivs.length; i++){
            if(movieDivs[i].innerText === ''){
              movieDivs[i].innerHTML = `${movie.innerText}`;
              break;
            }
          }

        })
      },
      //what to do if I don't get what I want
      error: function(){
        console.log('error');
      }
    })
  })
});
