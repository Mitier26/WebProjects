let text = document.querySelector("h2");
let textString = text.textContent;
let split = textString.split('');
text.textContent = '';

for(let i = 0; i < split.length; i++)
{
    text.innerHTML += "<span>" + split[i] + "</span>"
}

let tl = gsap.timeline();
tl.from("span", {
    y: -500,
    opacity: 0,
    scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger:"section",
    },
    stagger:{
        amount: 2
    }
})