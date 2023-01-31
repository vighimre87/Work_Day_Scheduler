// Target the areas that we are interacting with in HTML
const currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
const timeblocks = $("#timeblocks");
// Transform time to number in order to make it comparable to number data
const currentHour = eval(moment().format("HH"));
const textAreas = $(".description");
const saveBtn = $(".btn");




setInterval(() => {
    // Looping through all the hour elements to compare to the current time
$(".hour").each(function() {
    let hour = $(this).text().split(":");
    // If current hour equals to the hour in the actual table cell
    // then change the background color to red
    if(currentHour === eval(hour[0])) {
        $(this).parent().addClass("present");
    } else {
        // If the current hour is greater than the one in table cell
        //  then change the background color to green
        if (currentHour < eval(hour[0])) {
        $(this).parent().addClass("future");
        $(this).parent().removeClass("present");
        // Else change the background color to gray
        } else {
            $(this).parent().addClass("past");
            $(this).parent().removeClass("future");
        }
    }

  });
}, 1000);

// Add the icon into the button class
$(".btn").each(function() {
  let icon = $("<i class='fas fa-save text-xl'></i>");
  $(this).append(icon);
})


// Event listener for the submit button
// And save the events into the local storage when we click the save button
$(".btn").on("click",function(event) {
  event.preventDefault();
  let hour = $(this).parent().siblings("td.hour").text().split(":")[0];
  let userEvent = $(this).parent().siblings("td").children("textarea.description").val();
  localStorage.setItem(hour, JSON.stringify(userEvent));
});

// Display the userEvent from localStorage
$(".description").each(function() {
  let userEvent = $(this).text(JSON.parse(localStorage.getItem($(this).parent().siblings("td.hour").text().split(":")[0])));;
});




// TODO
// Dinamically recreate the HTML layout and make it prettier
// Sort the buttons out with the icons
// Create a button to clear all the textareas
// Add keyboard events to the textareas as the user can hit enter as well
// Maybe add some more functionality


// Dynamically generating the timeblocks as the user opens the website
// function generateTimeBlocks() {
//     // Looping through the officeHoursOfDay to create the layout and the content of the timeblocks
//     const timeblockTable = $("<table class='row'></table>");
//     timeblocks.append(timeblockTable);
//     for (let i= 0; i<officeHours.length; i++) {
//         const timeblock = $("<tr class='time-block'></tr>");
//         timeblockTable.append(timeblock);
//         const officeHour = $("<td class='hour'></td>");
//         officeHour.text = officeHours[i];
//         console.log(officeHour.text);
//         timeblockTable.append(officeHour);
//         const userEventContainer = $("<td>");
//         userEventContainer.append(timeblock);
//         const userEvent = $("<textarea class='description'></textarea>");
//         // userEvent.text = localStorage.getItem();
//         userEventContainer.append(userEvent);
//         const saveBtnContainer = $("<td>");
//         timeblock.append(saveBtnContainer);
//         const saveBtn = $("<button type='submit' class='saveBtn'></button>");
//         saveBtn.text = "Submit";
//         saveBtnContainer.append(saveBtn);
//     };
// }