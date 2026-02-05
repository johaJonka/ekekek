const hh=document.getElementById("hour");
const mm=document.getElementById("minute");
const ss=document.getElementById("second");

function update(){
  const t=new Date();
  const h=t.getHours()%12, m=t.getMinutes(), s=t.getSeconds();
  hh.style.transform=`rotate(${h*30 + m*0.5}deg)`;
  mm.style.transform=`rotate(${m*6}deg)`;
  ss.style.transform=`rotate(${s*6}deg)`;
}

setInterval(update,1000);
update();
