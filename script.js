let borders = { square: document.getElementById("containerSquare"),
    
                topLeft: document.getElementById("border1"),
                topRight: document.getElementById("border2"),
                bottomRight: document.getElementById("border3"),
                bottomLeft: document.getElementById("border4"),

                borderChange: editBorder,

                singleLocked: document.getElementById("singleLocked"),
                allLocked: document.getElementById("allLocked"),

                changeLock: borderLocked,
}


borders.topLeft.addEventListener("input", borders.borderChange)
borders.topRight.addEventListener("input", borders.borderChange)
borders.bottomRight.addEventListener("input", borders.borderChange)
borders.bottomLeft.addEventListener("input", borders.borderChange)


function editBorder(){
    if(borders.singleLocked.checked){
        t = this.value;
        borda = borders.square;

        switch(this.id){
            case "border1":
                borda.style.borderTopLeftRadius = t +"px";
                break;

            case "border2":
                borda.style.borderTopRightRadius = t +"px";

                break;

            case "border3":
                borda.style.borderBottomRightRadius = t +"px"; 

                break;

            case "border4": 
                borda.style.borderBottomLeftRadius =  t +"px";
                break;
        }
    }else{
        t = this.value;
        borders.changeLock(t);
        borda = borders.square;
        borda.style.borderRadius =  t +"px";

    }
    

}


function borderLocked(){
        borders.topLeft.value = t;
        borders.topRight.value = t;
        borders.bottomRight.value = t;
        borders.bottomLeft.value = t;

}


