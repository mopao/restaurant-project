$(document).ready(function(){


  /***************build the footer***********************************************/

  //declare variables
  var footer= $("<footer></footer>");
  var links=[["gift_card","contest"],["contact_us","sitemap"], ["careers","events"]];
  var arrLinks;

  // build the links section of the footer;
  var sectionLinks= $("<section></section>");
  var sectionHeader=$("<h2></h2>").text("important links").addClass("hide");
  sectionLinks.append(sectionHeader);
  for(arrLinks of links){
    var list= $("<ul></ul>");
    for(var k=0; k<arrLinks.length;k++){
      var arrTextLink=arrLinks[k].split("_");
      var link="";
      for(var j=0; j<arrTextLink.length;j++){
        link+=arrTextLink[j]+" ";
      }
      list.append($("<li></li>").text(link).attr("href",arrLinks[k]+".html"));
    }
    sectionLinks.append($("<div></div>").html(list));    
  }
  // add the section to the footer
  footer.append(sectionLinks);
  // add the copyright to the footer
  footer.append($("<div></div>").html(" &copy; 2020.").attr("id", "copyright"));
  // add the footer to the page's body
  $("body").append(footer);
});

