function addName() {
    var name = document.getElementById("recipe-name-input").value.trim();

    if (name != ""){
        var nameItem = document.createElement("h3");
        nameItem.textContent = name;
        document.getElementById("name-of-recipe").appendChild(nameItem);
    }
}

function saveToDatabase() {
    window.location.href = '/save_to_database';
}

// will store all ingredients added
var ingredient_list = [];
// function to dynamically add a <li> item for each ingredient in an <ul>
function addIngredient() {
    // grab the amount, unit, and input of ing
    var amount = document.getElementById("amount").value;
    var unit = document.getElementById("unit-of-mes").value;
    var ingredient = document.getElementById("ingredients-input").value.trim();

    if (ingredient != ""){
        // object to store the ingredient and it's units and amounts
        var newIngredient = {
            amount: amount,
            unit: unit,
            name: ingredient
        };
        // adds above object to list
        ingredient_list.push(newIngredient);

        // render ingredient on the webpage
        var listItem = document.createElement("li");
        listItem.textContent  = amount + " " + unit + " : " + ingredient;
        document.getElementById("ingredients-list-display").appendChild(listItem);

        // clear input field
        document.getElementById("ingredients-input").value = "";
    }
}

// list to store instructions
var instructions_list = [];
// function to dynamically create instructions as <li> in an <ol>
function addInstruction() {
    var instruction = document.getElementById("instructions-input").value.trim();

    if (instruction != "") {
        // object to hold the instruction
        var newInstruction = {
            instruction: instruction
        };
        // adds object to instructions_list
        instructions_list.push(newInstruction);

        // create the new <li> element
        var instructionItem = document.createElement("li");
        instructionItem.textContent = instruction;
        document.getElementById("instructions-list-display").appendChild(instructionItem);

        // clear the input field
        document.getElementById("instructions-input").value = "";
    }
}