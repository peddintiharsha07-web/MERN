var p = document.getElementById("press");
    p.style.padding = "20px";
    p.style.backgroundColor = "LightBlue";
    p.style.borderRadius = "10px";



var b = document.getElementById("nav");

    b.style.display = "flex";
    b.style.justifyContent = "space-around";
    b.style.backgroundColor = "LightGray";
    b.style.padding = "10px";
     
 


    var links = b.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "none"; 
        links[i].style.color = "DarkBlue";
        links[i].style.fontSize = "18px";
        links[i].style.fontWeight = "bold";
        links[i].style.transform = "translateY(-2px)";
    };

    var links = b.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() { 
            this.style.color = "Red";
            this.style.transform = "translateY(0)";
        });
        links[i].addEventListener("mouseout", function() { 
            this.style.color = "DarkBlue";
            this.style.transform = "translateY(-2px)";
        });
    };


    const form = document.getElementById("my_form");
    const UserName= document.getElementById("nameinput");
    const inputName = document.getElementById("name");

    form.style.marginTop = "20px";
    form.style.padding = "30px";
    form.style.border = "1px solid #ccc";
    form.style.borderRadius = "10px";
    form.style.backgroundColor = "LightYellow";
    form.style.width = "375px";

    const c = document.getElementById("nameinput");

    c.style.width = "100%";
    c.style.padding = "10px";
    c.style.marginBottom = "10px";
    c.style.border = "1px solid #ccc";
    c.style.borderRadius = "5px";


    form.addEventListener('input', function(event) {
        event.preventDefault(); 
        const name = UserName.value;
  
        inputName.textContent = name;
    });

    var w = document.getElementById("name");
    w.style.padding = "10px 20px";
    w.style.fontSize = "16px";
    w.style.color = "";
   
    w.style.border = "none";
    w.style.borderRadius = "5px";
    w.style.cursor = "pointer";

    

    var x = document.getElementById("submit");
    x.style.padding = "10px 20px";
    x.style.fontSize = "16px";
    x.style.color = "White";
    x.style.backgroundColor = "Blue";
    x.style.border = "none";
    x.style.borderRadius = "5px";
    x.style.cursor = "pointer";
    x.addEventListener("mouseover", function() {
        x.style.backgroundColor = "DarkBlue";
    }
    );
    x.addEventListener("mouseout", function() {
        x.style.backgroundColor = "Blue";
    }); 


    var p = document.getElementById("colorSelect");
    p.style.padding = "10px";
    p.style.fontSize = "16px";
    p.style.border = "1px solid #c31a1a";
    p.style.borderRadius = "5px";

    var i = document.getElementById("box");
    i.style.width = "100px";
    i.style.height = "100px";
    i.style.backgroundColor = "white";
    i.style.border = "3px solid #000000";
    i.style.borderRadius = "5px";


    p.addEventListener("change", function() {
        i.style.backgroundColor = p.value;
    }); 