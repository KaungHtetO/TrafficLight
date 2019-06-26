// function greentoggle(){
//     var bulb=document.getElementsById("bgreen");
//     var bulb1=document.getElementsById("byellow");
//     var bulb2=document.getElementsById("bred");
//     bulb.classList.add('go');
    
// //    var btn=document.getElementById("bulbControl");
// //    btn.innerText=btn.innerText==='Open'?'Close':'Open';
// }
// function bulbtoggle1(){
//     var bulb1=document.getElementsById("bulbControl1");
//     bulb1.classList.toggle('.slow');
    
// //    var btn=document.getElementById("bulbControl");
// //    btn.innerText=btn.innerText==='Open'?'Close':'Open';
// }
// function bulbtoggle2(){
//     var bulb2=document.getElementsById("bulbControl2");
//     bulb2.classList.toggle('.stop');
    
// //    var btn=document.getElementById("bulbControl");
// //    btn.innerText=btn.innerText==='Open'?'Close':'Open';
// }
function bulbtoggle(b)
{
    var g2=document.getElementById('bgreen');
    var y2=document.getElementById('byellow');
    var r=document.getElementById('bred');
    var g1=document.getElementById('bgreen2');
    var y1=document.getElementById('byellow2');
    var r1=document.getElementById('bred2');
    switch(b){
        case "g2":{
        g2.classList.add('green');
        y2.classList.remove('yellow');
        r.classList.remove('red');
        g1.classList.remove('green');
        y1.classList.remove('yellow');
        r1.classList.add('red');
        break;

    }
    case "y2":{
        g2.classList.remove('green');
        y2.classList.add('yellow');
        r.classList.remove('red');
        g1.classList.remove('green');
        y1.classList.add('yellow');
        r1.classList.remove('red');


        break;
    }
    case "r":{
        g2.classList.remove('green');
        y2.classList.remove('yellow');
        r.classList.add('red');
        g1.classList.add('green');
        y1.classList.remove('yellow');
        r1.classList.remove('red');


break;
    }
}
}
    // var totalsec=0;
    // function callback(){
    //     totalsec++;
    //     var g=document.getElementById('green');
    //     g.childNodes[0].innerText=totalsec;
    // }
    // setInterval(callback,1000);
function rTimer()
{
    gsec=6;
    rsec=6;
    function rUpdateTime()
    {
        gsec--;
        rsec--;
        var g2=document.getElementById('bgreen');
        var y2=document.getElementById('byellow');
        var r=document.getElementById('bred');
        var g1=document.getElementById('bgreen2');
        var y1=document.getElementById('byellow2');
        var r1=document.getElementById('bred2');
        
        g2.classList.add("green");
        g2.innerText=gsec;

        r1.classList.add("red");
        r1.innerText=rsec;

         if(gsec<1 && rsec<1)
         {
            g2.classList.remove("green");
            g2.innerText=0;
            y2.classList.add("yellow");
            
    
            r1.classList.remove("red");
            r1.innerText=0;
            g1.classList.add("green");
            YTimer();
            clearInterval(rInterval);

         }


    }
rUpdateTime();
var rInterval=setInterval(rUpdateTime,1000);
    
}

function YTimer()
{
    ysec=6;
    gsec=6;
    function yUpdateTime()
    {
        ysec--;
        gsec--;
        var g2=document.getElementById('bgreen');
        var y2=document.getElementById('byellow');
        var r=document.getElementById('bred');
        var g1=document.getElementById('bgreen2');
        var y1=document.getElementById('byellow2');
        var r1=document.getElementById('bred2');
        
        y2.classList.add("yellow");
        y2.innerText=ysec;

        g1.classList.add("green");
        g1.innerText=gsec;

         if(ysec<1 && gsec<1)
         {
            y2.classList.remove("yellow");
            y2.innerText=0;
            r.classList.add("red");
            
    
            g1.classList.remove("green");
            g1.innerText=0;
            y1.classList.add("yellow");
            RTimer();
            clearInterval(yInterval);
         }


    }
yUpdateTime();
var yInterval=setInterval(yUpdateTime,1000);
    
}




function RTimer()
{
    rsec=6;
    ysec=6;
    function rUpdateTime()
    {
        rsec--;
        ysec--;
        var g2=document.getElementById('bgreen');
        var y2=document.getElementById('byellow');
        var r=document.getElementById('bred');
        var g1=document.getElementById('bgreen2');
        var y1=document.getElementById('byellow2');
        var r1=document.getElementById('bred2');
        
        r.classList.add("red");
        r.innerText=rsec;

        y1.classList.add("yellow");
        y1.innerText=ysec;

         if(rsec<1 && ysec<1)
         {
            r.classList.remove("red");
            r.innerText=0;
            g2.classList.add("green");
            
    
            y1.classList.remove("yellow");
            y1.innerText=0;
            r1.classList.add("red");
            GTimer();
            clearInterval(rInterval);
         }


    }
rUpdateTime();
var rInterval=setInterval(rUpdateTime,1000);
    
}

