const container=[
    {
        name:"Ava",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"A testimonial generator is a tool that helps to generate dummy reviews and testimonials to mimic happy customers." +
            "Generated testimonials can be an excellent source of inspiration when you write a testimonial for another business, but they are also"+
            "perfect as placeholder text to demonstrate the visual form of testimonials while designing your website."
    },
    {
        name:"Sophia",
        photoUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"People who are genuinely interested in your company will probably read your reviews and testimonials more thoroughly."+
         "Once you've been found lying, your reputation will be damaged, and restoring your company's credibility is extremely difficult, if not impossible."
    },
    {
        name:"Luke",
        photoUrl:"https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Collecting testimonials got actually really easy. Niva.io makes it incredibly straightforward to gather impactful testimonials that will drive up your"+
         "reputation and sales. Check it out today to see what it can do for your business!"
    },
];
const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");
let index=0;
updatecontainer();
function updatecontainer(){
    const{name, photoUrl, text}=container[index];
    imgEl.src=photoUrl;
    usernameEl.innerText=name;
    textEl.innerText=text;
    index++;
    if(index===container.length){
        index=0;
    }
    setTimeout(()=>{
        updatecontainer();
    },3000)
}