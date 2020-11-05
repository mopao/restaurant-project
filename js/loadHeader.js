$(document).ready(function(){
 
 /***************build the header***********************************************/
 // declare variables
 
 var arrMenulinks=["about_us","menu","specials","locations","place_your_order"];
 var arrSubMenulinks=["vegetarian_pizza", "meat_pizza", "sides","drinks", "dessert"];
// create the header
  var header= $("<header></header>");
 
 // create the banner
 var banner=$("<div></div>").attr("id","banner-container");
 // create the sitename 
 var sitename=$("<h1></h1>").text("pizzarium").attr("id","sitename");
 // add the sitename into the banner
 banner.html(sitename);
 // add the banner to the header
 header.prepend(banner);
  // create the menubar
 var divMenubar=$("<div></div>").attr("id","menu-container");
 var menubar=$("<nav></nav>").attr("id","main-menu");
 // create menu header and add it to the menu
 var menuHeader=$("<h2></h2>").text("Main menu navigation").addClass("hide");
 menubar.prepend(menuHeader);
 // create the menu links
 var listMenu=$("<ul></ul>"); 
 // create the home logo
 var homeElt=$("<li></li>");
 var homeLink=$("<a></a>").attr("href","index.html");
 homeLink.html($("<span></span>").addClass("fas fa-home").attr("id","home-icon"));
 homeLink.append($("<span></span>").addClass("hide").text("icon for homepage"));
 homeElt.html(homeLink);
 listMenu.html(homeElt);
 for(var menuLink of arrMenulinks){
    var elt= $("<li></li>");
    
      var arrMenuLink=menuLink.split("_");
      var link="";
      for(var j=0; j<arrMenuLink.length;j++){
        link+=arrMenuLink[j]+" ";
      }
      elt.append($("<a></a>").text(link).attr("href",menuLink+".html"));
  // add submenu of the menu link
  if(menuLink==="menu"){
   var sublistMenu=$("<ul></ul>");
   for(var submenuLink of arrSubMenulinks){
    var subElt= $("<li></li>");
    
      var arrSubMenuLink=submenuLink.split("_");
      var sublink="";
      for(var j=0; j<arrSubMenuLink.length;j++){
        link+=arrSubMenuLink[j]+" ";
      }
      subElt.append($("<a></a>").text(link).attr("href",submenuLink+".html"));
    sublistMenu.append(subElt);
   }
   elt.append(sublistMenu);
  }
    
    listMenu.append(elt);    
  }
 
 // create and add the cart 
 var cartElt=$("<li></li>").attr("id","shopping-cart");
 var cart=$("<a></a>").attr("href","#");
 cart.html($("<i></i>").addClass("fas fa-shopping-cart"));
 cartElt.html(cart);
 listMenu.append(cartElt);
 menubar.html(listMenu);
 divMenubar.html(menubar);
 // add the menubar into the header
 header.append(divMenubar);
 
 
  // add the header to the page's body
 $("body").prepend(header);

});
