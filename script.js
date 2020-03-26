var h1El = document.querySelector("h1");

//***Building Creaper with Javascript */

//create arrays to draw eyes and face - color black
// eyes
row1 = [];
row2 = [];
row3 = [2,3,10,11];
row4 = [2,3,10,11];
row5 = [];

//nose
row6 = [6,7];
row7 = [4,5,6,7,8,9];
row8 = [4,5,6,7,8,9];
row9 = [4,5,8,9];
row10 = [];
row11 = [];
row12 = [];



creeperRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12];
// console.log(creeperRows);
// var bodyEl = document.querySelector("body");
var divContainer = document.createElement("div");
divContainer.setAttribute("class", "container");
// divContainer.setAttribute("class", "container");
// append to divContainer
document.body.appendChild(divContainer);
// insert container between h1 and script tags
// bodyEl.insertBefore(divContainer, bodyEl[0]);



// console.log(divContainer);


// loop throught array length times(creating 12 x 12 grid) 
// create new rows... set class as 'row' and append to div class-container

// **Create 12 ROWS
for (var i = 0; i < 12; i++){
   
    var rowCreation = document.createElement("div");
    rowCreation.setAttribute("class", "row");
    divContainer.appendChild(rowCreation);
    
    // creating COL for each row,  detect black squares with creeperRows Array data

    // ** Check check for all green rows in array and create them
    if(creeperRows[i].length===0){
        for(var j = 0; j < creeperRows.length; j++){
            var colCreation = document.createElement("div");
            rowCreation.appendChild(colCreation);
            colCreation.style.height = "80px";
            colCreation.style.width = "80px";
            colCreation.style.backgroundColor = 'green';
        }     
    }
    else {
        // console.log(creeperRows[i]);

        // ***column counter for rows with black
        for(var k = 0; k < 12; k++){
            
            // create bool set to false
            var arrayBlackPosition = false;

            // loop check to see if col value is in current arrays array 4x
            for (var ki =0; ki <creeperRows[i].length; ki++){


                // if there was a match set bool to true
                if (creeperRows[i][ki]===k+1){

                    arrayBlackPosition=true;  

                    // console.log("index i: " + i + "  index k: " + k + "  index ki" + ki + " arrayBlackPosition: " + arrayBlackPosition);             
                };
               
                // console.log(arrayBlackPosition);
            };

            // console.log("index i: " + i + "  index k: " + k + "  index ki" + ki + " arrayBlackPosition: " + arrayBlackPosition);

            if(arrayBlackPosition===true){

                var colCreation = document.createElement("div");
                rowCreation.appendChild(colCreation);
                colCreation.style.height = "80px";
                colCreation.style.width = "80px";
                colCreation.style.backgroundColor = 'black';
                // colCreation.style.border = "2px solid black";    
            }
            else{
                // style green
                var colCreation = document.createElement("div");
                rowCreation.appendChild(colCreation);
                colCreation.style.height = "80px";
                colCreation.style.width = "80px";
                colCreation.style.backgroundColor = 'green';

            };

            console.log("index i: " + i + "  index k: " + k + "  index ki" + ki + " arrayBlackPosition: " + arrayBlackPosition);
            
            

        };

    };

    

};

//      if the array is empty, creat element,
//      append and style




//     if the array is not empty, style black
//     creat element, append, style, add id


