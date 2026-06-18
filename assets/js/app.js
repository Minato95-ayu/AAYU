const terminal = document.getElementById("terminal");

if(terminal){

const text = `
AAYU Boot Sequence Started...

Loading Intent Engine...
Loading Architecture Engine...
Loading Compiler...
Loading Runtime...

Status: READY

Human Idea -> AAYU -> Production Software
`;

let i = 0;

function typeWriter(){

```
if(i < text.length){

    terminal.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter,30);

}
```

}

typeWriter();

}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

```
reveals.forEach(el=>{

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        el.classList.add("active");

    }

});
```

});
