function surligne(champ, erreur)

{

   if(erreur)
{
      champ.style.backgroundColor = "#fba";
}
   else
{
      champ.style.backgroundColor = "";
}
}



function veriftlata(champ)

{

   if(champ.value.length < 1 || champ.value.length > 70)

   {

      surligne(champ, true);

      return false;

   }

   else

   {

      surligne(champ, false);

      return true;

   }

}

function getXMLHttpRequest() {
    var xhr = null;
     
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
                        xhr = new XMLHttpRequest();
                    }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
     
    return xhr;
}
             
function AJAX(url){
    xhr_object = getXMLHttpRequest();
     
    xhr_object.open("GET", url, false);
    xhr_object.send(null);
    if(xhr_object.readyState == 4){
        return xhr_object.responseText;
    }else return(false);
}
 

    function loadXMLDoc(theURL)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                alert(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", theURL, false);
        xmlhttp.send();
    }


function submitForm3(){
   var pseudoOk = veriftlata(testforms0.id_sujet);
   if(pseudoOk) {
    var form = document.forms["testforms0"];
    var id_sujet = form.id_sujet.value;
     
  var form3 = document.forms["testforms3"];
    var code = form3.code.value;
              
    var url = "http://www.denja.ovh/casa/patate.php?id="+id_sujet+"&code="+code;
                 
  

$('.placeholder3').html(AJAX(url));
document.getElementById("page3").style.visibility= 'hidden'; 
document.getElementById("page33").style.visibility= 'visible';
}
   else
   {
      alert("Plz enter your ID");
      return false;
   }
}

function submitForm4(){
   var pseudoOk = veriftlata(testforms0.id_sujet);
   if(pseudoOk) {
    var form = document.forms["testforms0"];
    var id_sujet = form.id_sujet.value;
     
  var form4 = document.forms["testforms4"];
    var code = form4.code.value;
              
    var url = "http://www.denja.ovh/casa/patate.php?id="+id_sujet+"&code="+code;
                 
 

$('.placeholder4').html(AJAX(url));
document.getElementById("page4").style.visibility= 'hidden'; 
document.getElementById("page44").style.visibility= 'visible';
}
   else
   {
      alert("Plz enter your ID");
      return false;
   }
}


function submitForm5(){
   var pseudoOk = veriftlata(testforms0.id_sujet);
   if(pseudoOk) {
    var form = document.forms["testforms0"];
    var id_sujet = form.id_sujet.value;
     
  var form5 = document.forms["testforms5"];
    var code = form5.code.value;
              
    var url = "http://www.denja.ovh/casa/patate.php?id="+id_sujet+"&code="+code;
                 
 

$('.placeholder5').html(AJAX(url));
document.getElementById("page5").style.visibility= 'hidden'; 
document.getElementById("page55").style.visibility= 'visible';
}
   else
   {
      alert("Plz enter your ID");
      return false;
   }
}


function submitForm6(){
   var pseudoOk = veriftlata(testforms0.id_sujet);
   if(pseudoOk) {
    var form = document.forms["testforms0"];
    var id_sujet = form.id_sujet.value;
     
  var form6 = document.forms["testforms6"];
    var code = form6.code.value;
              
    var url = "http://www.denja.ovh/casa/patate.php?id="+id_sujet+"&code="+code;
                 
 

$('.placeholder6').html(AJAX(url));
document.getElementById("page6").style.visibility= 'hidden'; 
document.getElementById("page66").style.visibility= 'visible';
}
   else
   {
      alert("Plz enter your ID");
      return false;
   }
}

