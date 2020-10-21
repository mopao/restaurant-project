$(document).ready(function(){


  // load the website header
 var header= $("<header></header>").load("header.html",function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("header content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);
  });
  // add the header to the header to the page's body
 $("body").prepend(header);

});
