// Using jQuery

//When content has finished lodaing, execute this lambda function
$(function() {
  //Lets look for html with a class with .button and then attach an event handler
  $(".button").on("click", function(e) {
    //On click, we dont want default behavior of the browser
    e.preventDefault();
    //Sending a get request to url, after you get data...
    $.get("http://demo3354820.mockable.io/menu/sushi", function(data, textStatus, jqXHR){
      //getting html with .result as the class, then replacing it with data return
      data = JSON.stringify(data);
      console.log(data);
      // accessing the #result div and appending the html into it
      $("#result").html(data);//text(data.menu["Dragon Roll"]);
      alert( "Data load successful");
    });
    //
  });
});
