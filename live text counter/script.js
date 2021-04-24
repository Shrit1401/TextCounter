        const textarea = document.querySelector("textarea");
        const count = document.querySelector(".count");

        setInterval(function(){
            const text = textarea.value;
            const textlength = textarea.value.length;
            count.innerText = textlength;
        }, 100)


const button = document.querySelectorAll("a");
       button.forEach(btn => {
           btn.addEventListener("click", function(e){
               let x = e.clientX - e.target.offsetLeft;
               let y = e.client - e.target.offsetTop;

               let ripples = document.createElement("span");

               ripples.style.left  = x + "px";
               ripples.style.top  = y + "px";

               this.appendChild(ripples);

               setTimeout(() => {
                   ripples.remove()
               }, 1000)
           })
       })

       function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
     charactersLength)));
       }
       return result.join('');
    }

function Rand(){
    document.querySelector(".random").classList.toggle("open")
}


function RandomTextGeneate(){
    document.querySelector(".random").classList.remove("open")
    textarea.value += makeid(document.querySelector("input").value);
}