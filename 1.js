const score= document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn= document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");


window.addEventListener("mousemove", (e)=>{
      // console.log(e);
      cursor.style.top = e.pageY +"px";
      cursor.style.left= e.pageX +"px";
});

window.addEventListener("click", ()=>{
      cursor.style.animation = "hit 0.1s ease";
      setTimeout(()=>{
           cursor.style.removeProperty("animation");
      },100)
});

playBtn.addEventListener("click", ()=>{
      playBtn.style.display ="none";
      stopBtn.style.display="inline-block";

      let hole;
      let Points =0;

      const startGame = setInterval(()=>{
            let arrayNo=Math.floor(Math.random() * 9);
            hole =holes[arrayNo];
            // console.log(hole);
            let image= document.createElement("img");
            image.setAttribute("src","./mole.png");
            image.setAttribute("class", "mole");
            
            setTimeout(()=>{
                  hole.removeChild(image);
            },600);


            hole.appendChild(image);
      },700);


      window.addEventListener("click",(e)=>{
      //     console.log(e.target); 
            if(e.target=== hole) score.innerText = ++Points;
      });

      stopBtn.addEventListener("click",()=>{
            clearInterval(startGame);
            stopBtn.style.display ="none";
            playBtn.style.display="inline-block";
      });

})
