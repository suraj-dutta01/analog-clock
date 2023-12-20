let hour=document.getElementById("hour")
let min=document.getElementById("min")
let second=document.getElementById("second")

let displatTime=()=>{
    let date=new Date()

    let hh=date.getHours()
    let mm=date.getMinutes()
    let ss=date.getSeconds()

    let hourRotation=30*hh +mm/2
    let minRotation=6*mm
    let secRotation=6*ss

    hour.style.transform=`rotate(${hourRotation}deg)`
    min.style.transform=`rotate(${minRotation}deg)`
    second.style.transform=`rotate(${secRotation}deg)`
}
setInterval(() => {
    displatTime()
}, 1000);