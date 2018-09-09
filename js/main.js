/**
 * 
 */

 /* Faiding page */
 var htmlH2Node = document.createElement("h2");
 var htmlH2TextNode = document.createTextNode("");
 var xScript = document.createElement("script");
 var xScriptContent = document.createTextNode("");
 var clickedLink = false;
   document.addEventListener('DOMContentLoaded', function() {
               document.getElementById("mainContent").style.opacity = "0.1";
               document.getElementById("mainContent").style.transition = "all 1s ease 0s";
               document.getElementById("mainSidebar").style.opacity = "0.5";
               document.getElementById("mainSidebar").style.transition = "all 1s ease 0s";
               setTimeout(
                          function(){
                                document.getElementById("mainContent").style.opacity = "1.0";
                                document.getElementById("mainSidebar").style.opacity = "1.0";
                              },
                          50);
              LoadScript();
}, false);

function LoadScript(){
    var Links = document.getElementsByTagName("a");
    for(i=Links.length-1; i>=0;i--){
      console.log(Links[i]);
      Links[i].setAttribute("onclick","return FetchLink(\""+ Links[i].getAttribute("href") +"\")");
      //Links[i].addEventListener('onclick', FetchLink(Links[i].getAttributeNode("href")) , false);
    }
    
   
    //xScript.setAttribute("type", "text/html");
    //var fileX = new File("http://rawgist.com/TheCoin405/3d5900614ff0e0782f1b46b44c8e6316/raw/c605d86c8f3e2b16bc55b599644c1472503c6eaf/test.js", "load.js",{ type: "text/javascript"});
    //xScript.setAttribute("src","../../js/browser.js");//http://127.0.0.1/thecoin405.github.io/js/tmp.js
    //xScript.setAttribute("id", "scriptX");
      //  document.getElementById("mainContent").insertBefore(xScript, document.getElementById("mainContent").lastChild);
        //xScript.setAttribute("type", "text/javascript");
        //document.getElementById("mainContent").insertBefore(htmlH2Node, document.getElementById("mainContent").firstChild);
        //xDisplay(xReturn());
        
    
}/*
function xDisplay(xScriptContentText){
    var xScriptContent2 = document.createTextNode(xScriptContentText);
    
    document.getElementById("mainContent").insertBefore(xScriptContent2, document.getElementById("mainContent").lastChild);
}*/
function FetchLink(linkURL){
    

    if(!clickedLink){
//        if(navigator.userAgent.match("^.*(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone).*$")){
//        	htmlH2TextNode.textContent = navigator.userAgent;
//        }
//        htmlH2Node.appendChild(htmlH2TextNode);
//        document.getElementById("mainContent").insertBefore(htmlH2Node, document.getElementById("mainContent").firstChild);

        clickedLink = true;
        return true;
    }else{
//        htmlH2TextNode.textContent = linkURL + " is clicked";
        return true;
    }
    
}
/* Gist Menu loader */

/* Gist Page loader */

/* GitHub Project Loader */