let thisBox;
let newBorder;
let allBoxes;

allColors = ["red", "blue", "green", "teal", "yellow", "purple", 
"gold", "brown", "orange"];

allBorders = ["dotted", "solid", "double", "groove", "inset", "outset", "ridge"];

function changeButton(id) {
    thisBox = document.getElementById(id);
    thisBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];    
    newBorder = allBorders[Math.floor(Math.random() * allBorders.length)] + " 4px " + allColors[Math.floor(Math.random() * allColors.length)];
    thisBox.style.border = newBorder;
}

function changeAllButton(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);

    firstBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];    
    newBorder = allBorders[Math.floor(Math.random() * allBorders.length)] + " 4px " + allColors[Math.floor(Math.random() * allColors.length)];
    firstBox.style.border = newBorder;

    secondBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];    
    newBorder = allBorders[Math.floor(Math.random() * allBorders.length)] + " 4px " + allColors[Math.floor(Math.random() * allColors.length)];
    secondBox.style.border = newBorder;
    
    thirdBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];    
    newBorder = allBorders[Math.floor(Math.random() * allBorders.length)] + " 4px " + allColors[Math.floor(Math.random() * allColors.length)];
    thirdBox.style.border = newBorder;

}


function hideButton(id) {
   thisBox = document.getElementById(id);
   
   if (thisBox.style.display == "none"){
    thisBox.style.display = "block";
   }
   else{
       thisBox.style.display = "none";
   }
}

function resetColors(id1, id2,id3) {
    let firstBox = document.getElementById(id1)
    let secondBox = document.getElementById(id2)
    let thirdBox = document.getElementById(id3)

    firstBox.style.removeProperty("background");
    secondBox.style.removeProperty("background");
    thirdBox.style.removeProperty("background");

    firstBox.style.removeProperty("border");
    secondBox.style.removeProperty("border");
    thirdBox.style.removeProperty("border");
}

function hideAllButton(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);
    
    firstBox.style.display = "none";
    secondBox.style.display = "none";
    thirdBox.style.display = "none";
}

function showAllButton(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);
    
    firstBox.style.display = "block";
    secondBox.style.display = "block";
    thirdBox.style.display = "block";
}
