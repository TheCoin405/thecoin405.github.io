if (navigator.userAgent.match("/^.*(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone).*$/") ||
      navigator.userAgent.match("^.*webOS.*$") ||
      navigator.userAgent.match("^.*iPhone.*$") ||
      navigator.userAgent.match("^.*iPad.*$") ||
      navigator.userAgent.match("^.*iPod.*$") ||
      navigator.userAgent.match("^.*BlackBerry.*$") ||
      navigator.userAgent.match("^.*Windows Phone.*$")
    ) {
        document.getElementsByTagName("h1")[0].innerText = navigator.userAgent;
    } else {
    
  }