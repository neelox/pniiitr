  
    
function timetable() 
{  var d=new Date();
  
    if((d.getDay()==0 && d.getHours()>=18) || (d.getDay()==1 && d.getHours()<18))
    {document.getElementById("p2").innerHTML = "<font color=black size=6>TIME TABLE </font><br/>* 9:00am-9:55am__LMIN209_ <font color=gold  size=5> THERMAL ENGINEERING</font>  <br/>* 10:00am-11:00am__LMIN211_ <font color=gold  size=5>THEORY OF MACHINES</font><br/>* 11:00am-12:00noon__LMIN291_ <font color=gold  size=5> ENGINEERING DESIGN</font><br/>* 12:00noon-1:00pm__LCE102(L.H.Complex-106)_ <font color=gold  size=5> SOLID MACHANICS</font><br/> *<font color=#1c1460 size=5>2:00pm-4:00pm__CHILL... </font><br/>* 4:00PM-6:00PM PMIN203__ <font color=gold  size=5>PRACTICAL MANUFACTURING TECHNOLOGY</font>"; }
    else if((d.getDay()==1&&d.getHours()>=18) || (d.getDay()==2 && d.getHours()<18))
    {document.getElementById("p2").innerHTML = "<font color=black size=6>TIME TABLE </font><br/>9:00am-9:55am__LMIN209_ <font color=gold size=5> THERMAL ENGINEERING</font>  <br/> <font color=antiquewhite size=5>10:00am-12:00noon__CHILL... </font><br/> 12:00noon-1:00pm__LCE102(L.H.Complex-106)_ <font color=gold  size=5> SOLID MACHANICS</font><br/> <font color=white size=5>2:00pm-4:00pm__ Engineering Design </font><br/> 4:00PM-6:00PM PMIN203__ <font color=gold  size=5>TOM Practicle/THERMAL ENGINEERING PRACTICLE</font>";}
    else if((d.getDay()==2 && d.getHours()>=18)|| (d.getDay()==3 && d.getHours()<18 ))
    {document.getElementById("p2").innerHTML = "<font color=black size=6>TIME TABLE </font><br/>    <br/>10:00am-11:00am__LMIN211_ <font color=gold  size=4>THEORY OF MACHINES</font> <br/>11:00am-12:00noon__LMIN291_ <font color=gold  size=4> ENGINEERING DESIGN</font><br/>12:00noon-1:00pm__LMIN 203<font color=gold  size=4>MANUFACTURING TECHNOLOGY </font><br/> <font color=white size=5>CHILL</font>";}
    else if((d.getDay()==3&& d.getHours()>=18)|| (d.getDay()==4 && d.getHours()<18))
    {document.getElementById("p2").innerHTML = "<font color=black size=6>TIME TABLE </font><br/>   9:00am-9:55am__LMIN209_ <font color=gold  size=4> THERMAL ENGINEERING</font>  <br/><font color=#1c1460 size=4>10:00am-11:00AM__CHILL... </font><br/> 11:00am-12:00noon__LMIN 211 <font color=gold  size=4> THEORY OF MACHINES</font><br/> 12:00noon-1:00pm__ <font color=gold size=4>SOLID MECHANICS </font><br/>2:00PM-3:00PM  <font color=gold  size=4> SOLID MECHANICS TUT.(Q7) AND ENGINEERING DESIGN TUT. (Q8)</font><br/>3:00pm-4:pm __ <font color=GOLD  size=4>ENGINEERING DESIGN AND ANALYSIS TUT. </font><br/>  4:00PM-5:00PM  <font color=gold  size=4> THERMAL ENGINEERING TUT.(Q7) AND THEORY OF MACHINES TUT.(Q8)</font><br/>5:00pm-6:00pm <font color=gold  size=4> THERMAL ENGINEERING TUT.(Q8) AND THEORY OF MACHINES TUT.(Q7)</font>";}
     else if((d.getDay()==4&& d.getHours()>=18)||(d.getDay()==5 && d.getHours()<18 ))
    {document.getElementById("p2").innerHTML = "<font color=black size=6>TIME TABLE </font><br/>  <font color=goldenrod  size=4>9:00am-11:00am  CHILL</font>  <br/>11:00am-12:00noonLMIN291 <font color=gold size=4>  ENGINEERING DESIGN </font><br/>  12:00noon-1:00pm LMIN203  <font color=gold  size=4> MAN. TECH. LECTURE</font><br/> <font color=goldenrod  size=4> 01:00pm-03:00pm  CHILL</font><br/>  4:00PM-6:00PM PMIN203__ <font color=gold  size=4> MAN. TECH. PRACTICAL </font>";}
     else if(d.getDay()==5 &&d.getHours()>=18)
    {document.getElementById("p2").innerHTML = "MOZ LE BHAI";}
     else  
    {document.getElementById("p2").innerHTML = "K";}
      
}

function coverdown()
{
    var d=new Date();  
    var c = document.getElementById("pass").elements[0].value;
    if(c==d.getDate())
        {
            document.getElementById("coverup").style.display = "none";
        }
    else{
        alert("bhag bhencho ...bhosdi ke tere lodae me fungus ho");
    }
}
 
function topsliderdown()
{
    document.getElementById("slider").style.height="88px";
}
function topsliderup()
{
    document.getElementById("slider").style.height="0px"
}

function exams()
{     var d=new Date(); 
      var x= d.getDate();
   if(x==2){document.getElementById("p4").innerHTML="gykjfcv";}
 else{document.getElementById("p4").innerHTML="gwegrwg";}
}