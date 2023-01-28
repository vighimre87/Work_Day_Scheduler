## Work Day Scheduler

# Steps to follow while coding
1. make the HTML and CSS
    - create a table with 24 rows and 3 colums or 24 divs which are grid containers in the timeblock container
    - make the timeblock container-fluid
    - add a div container to hold the time
    - add a div container and a button inside of that to save the input
    - give the right id and classes to the HTML elements (see CSS file)

2. code the JS file
    - create a function to display the current day and date and refresh it in every hour
    - create a function to dinamically create and display the divs
    - create a function to get the user input and save it in the localStorage
    - create a function that displays the user input from the localStorage
    - create a function to check which hour we are currently in and change the color of the div that shows the actual hour for red 
        + change the color for grey the colors that we passed
        + change the color for green for the hours that are still available
    - create eventListener for the save buttons which will trigger the function that saves the input into the localStorage and display it from the localStorage
    -create eventListener for clicking a div -> whenever the user clicks a timeblock they will be able to type their input (it can be done by adding and removing disabled attribute to the html element) -> it should be added to the parent element because we don't know which timeblock will be clicked by the user
    