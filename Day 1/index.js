

setInterval(() => {
    const deg = 6;

    let day = new Date();
    let ms = day.getMilliseconds() * deg;
     let ss = day.getSeconds() * deg + ms / 1000;
      let mm = day.getMinutes() * deg;
      let hh = day.getHours() * 30;
           
     document.querySelector('.sec').style.transform = `rotateZ(${ss}deg)`;
     document.querySelector('.min').style.transform = `rotateZ(${mm}deg)`;
     document.querySelector('.hr').style.transform = `rotateZ(${hh}deg)`;

   
})