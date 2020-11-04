$(document).ready(function(){


  // load the website footer
  var footer= $("<footer></footer>").load("footer.html",function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("footer content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);
  });

  // add the header to the header to the page's body
  $("body").append(footer);
});

