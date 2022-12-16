
    var variable1 = document.getElementById("loc");
    function getlocation() {
      navigator.geolocation.getCurrentPosition(showLoc);
    }
    function showLoc(pos) {
      variable1.innerHTML =
        "Latitude: " +
        pos.coords.latitude +
        "<br>Longitude: " +
        pos.coords.longitude;
    }
    window.onload = function() {
  
  var file = document.getElementById("thefile");
  var audio = document.getElementById("audio");
  
  file.onchange = function() {
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  }
}


function validate() {
    var re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var re_domain = /@university.com$/;
    var re_number= /^[7-9][0-9]{9}$/;
    var re_name = /^[a-zA-Z_]+$/;
    var re_password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var re_others = /\b(electronic|metal|)\b/;
    var flag = 0;

    if (!(re_email.test(document.getElementById("email").value)))   
      document.getElementById("email").style.border = "red solid 3px";
    else
    {document.getElementById("email").style.border = "green solid 3px";
    flag = 1;}
    if (!(re_domain.test(document.getElementById("email").value)))
    {document.getElementById("email").style.border = "red solid 3px";
    flag= 0;}
    else
    {document.getElementById("email").style.border = "green solid 3px";
    flag= 1;}

     
    if (!(re_number.test(document.getElementById("number").value))) 
      {document.getElementById("number").style.border = "red solid 3px";
      flag=0;}
    else
    {document.getElementById("number").style.border = "green solid 3px";
    flag= 1;}

    if (!(re_name.test(document.getElementById("name").value))) 
       {document.getElementById("name").style.border = "red solid 3px";
       flag=0;}
    else
    {document.getElementById("name").style.border = "green solid 3px";
    flag=1;}



    if (!(re_password.test(document.getElementById("pass").value))) 
      {document.getElementById("pass").style.border = "red solid 3px";
      flag=0;}
    else{
    document.getElementById("pass").style.border = "green solid 3px";
    flag=1;}
    if (!(re_others.test(document.getElementById("others").value))) 
    {
      document.getElementById("others").style.border = "red solid 3px";
      flag=0;
    }
    else
    {
    document.getElementById("others").style.border = "green solid 3px";
    flag=1;
    }
    alert(flag);
    

    

}

//locking alphabets for phone
function lockAlphabet(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode;
		 const re = /^[A-Za-z]+$/;

		 if (re.test(evt.key))
            return false;

         return true;
      }

function lockNumber(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode;
		 const re = /^[A-Za-z]+$/;

		 if (re.test(evt.key)!=true)
            return false;

         return true;
      }


      var today = new Date();
      var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
    
      function setCookie(name, value)
      {
        document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
      }


      
      function storeValues()  
  {
    setCookie("uname", document.getElementById("name").value);
    setCookie("email", document.getElementById("email").value);
    setCookie("number",document.getElementById("number").value);
    alert("Cookies have been set.");
    //setCookie("field4", form.field4.value);
    return true;
  }
  function printCookies(sec)
  {
    cookievalue = escape(document.getElementById(sec).value) + ";";
               document.cookie = "name=" + cookievalue;
               alert ("Setting Cookies : " + "name=" + cookievalue );
  }

  function getCookie(pname)
  {
    var re = new RegExp(pname + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }
function autofill()
{
 newname = getCookie("name"); 
 document.getElementById("name").value = newname;
 newemail= getCookie("email");
 document.getElementById("email").value = newemail;
 newnumber = getCookie("number");
document.getElementById("number").value = newnumber;
  //if(field4 = getCookie("field4")) document.myForm.field4.value = field4;
}

  var expired = new Date(today.getTime() - 24 * 3600 * 1000); // less 24 hours

  function deleteCookie(name)
  {
    document.cookie=name + "=null; path=/; expires=" + expired.toGMTString();
  }

  function clearCookies()
  {
    deleteCookie("uname");
    deleteCookie("email");
    deleteCookie("numnber"); 
   // deleteCookie("field4");
    alert('Your cookies have been deleted!');
  }

        var back;
        function setbCookie(cname, cvalue, exdays) 
        {
            const d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            
        }


        function func1(x)
        {
          if(x=="theme")
          {
              var color=x;
          }

            var uname1=document.getElementById("name").value;
            var email1=document.getElementById("email").value;
            var number1=document.getElementById("number").value;

            setbCookie("name",uname1,2);
            setbCookie("email",email1,2);
            setbCookie("number",number1,2); 
            setbCookie("color",x,2);
            document.getElementById("bg1").style.backgroundColor=x;
            document.getElementById("form1").style.backgroundColor=x;
            document.getElementById("tables").style.backgroundColor=x;
            document.getElementById("para1").style.backgroundColor=x;
            document.getElementById("para2").style.backgroundColor=x;
            document.getElementById("para3").style.backgroundColor=x;
            document.getElementById("para4").style.backgroundColor=x;
            document.getElementById("para5").style.backgroundColor=x;
            document.getElementById("heading").style.backgroundColor=x;
            document.getElementById("add1").style.backgroundColor=x;




        }

        function func2()
        {
            var back=Math.floor(Math.random() * 7)+".jpg";
            setbCookie("back",back,2);
            document.body.style.backgroundImage = "url(backs/"+back+")";
        }

        function getbCookie(cname) 
        {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function fillbox()
        {
            document.getElementById("date1").value=getbCookie("visdate");
            document.getElementById("no1").value=getbCookie("visnos");
            document.getElementById("name1").value=getbCookie("visname1");
            document.getElementById("bg").style.backgroundColor=getbCookie("color");
            document.getElementById("bg1").style.backgroundColor=getbCookie("color");
            document.getElementById(getbCookie("color")).checked=true;
            document.body.style.backgroundImage = "url(backs/"+getbCookie("back")+")";
        }

        function fb1()
        {
          document.getElementById("bg1").style.backgroundColor=getbCookie("color");
        }

        function remove()
        {
            alert("Submitted Successfully");
            document.cookie = "visdate"+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "visnos"+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "visname1"+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            location.reload();
        }



