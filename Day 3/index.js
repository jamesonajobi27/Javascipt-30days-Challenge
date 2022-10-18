function clock(){
    let seconds = document.getElementById("seconds")
    let minutes = document.getElementById("minutes")
    let hour = document.getElementById("hour")
    let ampm = document.getElementById("ampm")

    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();
    var am = "am"
  
    if(h > 12){
        h = h-12;
        var am = "pm"
  
    }
  
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

  
    seconds.innerHTML = s
    minutes.innerHTML = m
    hour.innerHTML = h
   ampm.innerHTML = am

}

setInterval(clock);