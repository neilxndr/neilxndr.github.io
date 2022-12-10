
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