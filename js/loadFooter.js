$(document).ready(function(){


  // load the website footer
  $("footer").load("footer.html",function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("footer content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);
  });


});

