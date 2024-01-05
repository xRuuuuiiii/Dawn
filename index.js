function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
}
  
domReady(() => {
    document.getElementsByClassName("card").item(0).addEventListener("click", function(){
        document.getElementsByClassName("modal").item(0).classList.add("is-visible");
    })
    document.getElementsByClassName("modal").item(0).addEventListener("click", function(e){
        if(e.target.classList.contains("is-visible")){
            e.target.classList.remove("is-visible");
        }
    })
});

let soundPlayed = false
function playSound(audioName, loop) {
    const audio = new Audio(audioName);
    audio.loop = loop;
    audio.play();
  }

  document.querySelector(".container").addEventListener("click", (event) => {
    if (!soundPlayed) { // Check the flag
      playSound("para.mp3", false);
      soundPlayed = true; // Set the flag to prevent further playback
    }
  });
  

  

