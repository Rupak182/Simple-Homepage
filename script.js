console.log("hello");


let menu = document.getElementById("menu")
let sidebar =document.querySelector(".sidebar");
let close = document.querySelector(".close")

let hideMenu= ()=> {
    // menu.style.display ="none";
   menu.addEventListener('click',(e)=>{
        menu.display="none";
        sidebar.style.display="flex";
        sidebar.style.flexDirection="column";

         
   }
)};


let showMenu = ()=>{
    close.addEventListener("click",()=>{
        sidebar.style.display="none";
    })
};





    let darkMode = () =>{
        let dark =document.querySelectorAll(".dark");
        console.log(dark);

        for (const key in dark) {
            if (Object.hasOwnProperty.call(dark, key)) {
                const element = dark[key];

                element.addEventListener("click",(e)=>{
                    let body=document.querySelector("body");
                    body.style.backgroundColor ="black";
                    body.style.color="white";

                    let img = document.querySelector(".logo")
                    img.src="assets/alarado-icon-homepage-dark.svg";

                    document.querySelector("#menu").src ="assets/menu_light.svg";

                });
                
            }
        }

    }

    let lightMode = () =>{
        let light =document.querySelectorAll(".light");
        console.log(light);

        for (const key in light) {
            if (Object.hasOwnProperty.call(light, key)) {
                const element = light[key];

                element.addEventListener("click",(e)=>{
                    let body=document.querySelector("body");
                    body.style.backgroundColor ="rgb(242, 249, 254)";
                    body.style.color="black";

                    let img = document.querySelector(".logo")
                    img.src="assets/alarado-icon-homepage.svg";

                    console.log(element);

        
        
                });
                
            }
        }

    }

    let itemSwitch = ()=>{
        let li = document.querySelectorAll(".change");

        for (const key in li) {
            if (Object.hasOwnProperty.call(li, key)) {
                const element = li[key];

                element.addEventListener("mouseover",(e)=>{
                    console.log(e.target)
                    let body =document.querySelector("body");

                    if(body.style.backgroundColor==="rgb(242, 249, 254)")
                    {
                        console.log(e.target)
                        element.style.color="black";
                    }
                
                    else if(body.style.backgroundColor==="black")
                    {
                        console.log(e.target)
                        element.style.color="white";
                    }
                });

                element.addEventListener("mouseout",()=>{
                    element.style.color="#909193"
                })

 
                
            }
        }

    }




showMenu();
hideMenu();
darkMode();
itemSwitch();
lightMode();


