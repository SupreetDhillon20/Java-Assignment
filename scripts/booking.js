
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35; // initalizing to 35 to match with full day in the begining.
let numberOfDays = 0;
let totalCost = 0;

const mon_button_element = document.getElementById("monday");
const tue_button_element = document.getElementById("tuesday");
const wed_button_element = document.getElementById("wednesday");
const thu_button_element = document.getElementById("thursday");
const fri_button_element = document.getElementById("friday");


const full_day_span_element = document.getElementById("full");
const half_day_span_element = document.getElementById("half");

const clear_button_element =  document.getElementById("clear-button");
const calculated_cost_span_element = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleButton (button) {
    if (button.classList.contains("clicked")){
        // Do nothing if the button already has clicked class.
        button.classList.remove("clicked");
        numberOfDays = numberOfDays - 1;
    }
    else {
        button.classList.add("clicked");
        numberOfDays = numberOfDays + 1;
    }
    recalculate();
}

mon_button_element.addEventListener('click', function() {
    handleButton(this);
});
tue_button_element.addEventListener('click', function() {
    handleButton(this);
});
wed_button_element.addEventListener('click', function() {
    handleButton(this);
});
thu_button_element.addEventListener('click', function() {
    handleButton(this);
});
fri_button_element.addEventListener('click', function() {
    handleButton(this);
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetAll(){
    mon_button_element.classList.remove("clicked");
    tue_button_element.classList.remove("clicked");
    wed_button_element.classList.remove("clicked");
    thu_button_element.classList.remove("clicked");
    fri_button_element.classList.remove("clicked");

    
    full_day_span_element.classList.add("clicked");
    half_day_span_element.classList.remove("clicked");

    costPerDay = 35;  
    numberOfDays = 0;  
    totalCost = 0;

    recalculate();  

 }

 clear_button_element.addEventListener('click', function() {
    resetAll();
    });



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day_span_element.addEventListener('click', function() {
    half_day_span_element.classList.add("clicked");
    full_day_span_element.classList.remove("clicked");
    costPerDay = 20;
    recalculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_day_span_element.addEventListener('click', function() {
    full_day_span_element.classList.add("clicked");
    half_day_span_element.classList.remove("clicked");
    costPerDay = 35;
    recalculate();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    totalCost = costPerDay * numberOfDays;             
    calculated_cost_span_element.innerText = totalCost;  
}

