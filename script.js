let borders = { square: document.getElementById("containerSquare"),
    
                topLeft: document.getElementById("border1"),
                topRight: document.getElementById("border2"),
                bottomRight: document.getElementById("border3"),
                bottomLeft: document.getElementById("border4"),
                radioInput1: document.getElementById("singleLocked"),
                radioInput2: document.getElementById("allLocked"),
                singleLocked: document.getElementById("singleLocked"),
                allLocked: document.getElementById("allLocked"),
                borderCSS: document.getElementById("borderGenerator"),

                borderChange: editBorder,

                

                changeLock: borderLocked,
                gen: borderGenerator,
                clear:clearValues,
}

function editBorder(){
    if(borders.singleLocked.checked){
        t = this.value;
        borda = borders.square;

        switch(this.id){
            case "border1":
                borda.style.borderTopLeftRadius = t +"px";
                borders.gen();
                break;

            case "border2":
                borda.style.borderTopRightRadius = t +"px";
                borders.gen();
                break;

            case "border3":
                borda.style.borderBottomRightRadius = t +"px"; 
                borders.gen();
                break;

            case "border4": 
                borda.style.borderBottomLeftRadius =  t +"px";
                borders.gen();
                break;
        }
    }else{
        t = this.value;
        borders.changeLock(t);
        borda = borders.square;
        borda.style.borderRadius =  t +"px";
        borders.gen();
    }
    

}

function borderLocked(t){
        borders.topLeft.value = t;
        borders.topRight.value = t;
        borders.bottomRight.value = t;
        borders.bottomLeft.value = t;

}

function borderGenerator(){
    let borderCSS = borders.borderCSS;
    let border;
    borderCSS.innerHTML = "";
   
    if(borders.singleLocked.checked){

        let border1 ="border-top-left-radius: "+ borders.square.style.borderTopLeftRadius+";";
        let border2 ="border-top-right-radius: "+ borders.square.style.borderTopRightRadius+";";
        let border3 ="border-bottom-right-radius: "+ borders.square.style.borderBottomRightRadius+";";
        let border4 ="border-bottom-left-radius: "+ borders.square.style.borderBottomLeftRadius+";";
        console.log(border1)
        borderCSS.innerHTML += "<p>"+border1+"</P>";
        borderCSS.innerHTML += "<p>"+border2+"</P>";
        borderCSS.innerHTML += "<p>"+border3+"</P>";
        borderCSS.innerHTML += "<p>"+border4+"</P>";

        console.log(borderCSS.innerHTML)
       
        
    }else{
        border = "border-radius: "+ this.square.style.borderRadius+";";
        borderCSS.innerHTML = border;


    }
 

}

function clearValues(){
    let t = 0;
    let borderCSS = borders.borderCSS;
    borders.changeLock(t);
    borda = borders.square;
    borda.style.borderRadius =  t +"px";
    borderCSS.innerHTML = "";



}

borders.radioInput1.addEventListener("click", borders.clear)
borders.radioInput2.addEventListener("click", borders.clear)
borders.topLeft.addEventListener("input", borders.borderChange)
borders.topRight.addEventListener("input", borders.borderChange)
borders.bottomRight.addEventListener("input", borders.borderChange)
borders.bottomLeft.addEventListener("input", borders.borderChange)