
// const text=document.getElementById("text");

// let bodycolor=prompt("Body rangini kiriting");
// let textcolor=prompt("Body text rangini kiriting");



// body.style.backgroundColor=bodycolor;
// text.style.color=textcolor;


// const body=document.getElementsByTagName("body")[0]
// const card=document.createElement("div")
// const a=document.createElement("img")
// const h1=document.createElement("h1")
// const p=document.createElement("p")
// const button=document.createElement("button")




// h1.textContent="Twitter"


// p.textContent="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus rerum aut ipsum quo delectus adipisci quod incidunt accusamus velit."
// button.textContent="Button";
// button.classList.add("btn")
// a.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
// card.classList.add("card")
// button.style="font-size:25px;"

// card.appendChild(a)
// card.appendChild(h1)
// card.appendChild(p)
// card.appendChild(button)
// body.appendChild(card)


const body=document.getElementsByTagName("body")[0];
// const div=Document.createElement("div");
// const a=document.createElement("img");
// const h1=document.createElement("h1");
// const p=document.createElement("p");
// const btn=document.createElement("button");


// h1.textContent("logo suu JOHONGIR")
// a.src=("https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png")
// p.textContent("jineifniefiefnienienvdnvidnvidninvidnvidnvdvlsvkfnvlfslfkfknfdb dfbdnbfnbfbnjfbnjfbjfbnjb")
// btn.textContent("button Johongir")


// body.appendChild(a);
// body.appendChild(h1);
// body.appendChild(p);
// body.appendChild(btn);

const numbers=[31,35,31,315,34,34,4,5,6,4,212,432,2424]; 
numbers.forEach((e)  =>{

    console.log(e)
    let h1=document.createElement("h1");
    h1.style="text-align:center; background-color:red;border-rodius:12px;";
    h1.textContent  = e;
    body.appendChild(h1);
    if(e<50){
      h1.style="background-color:red; text-align:center;";
    }else{
      h1.style="background-color:green;text-align:center;";
    }
    
    
   

    
}









)