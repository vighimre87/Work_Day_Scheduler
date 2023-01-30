// Target the areas that we are interacting with in HTML
const currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
const timeblocks = $("#timeblocks");
// Transform time to number in order to make it comparable to number data
const currentHour = eval(moment().format("HH"));
const textAreas = $(".description");

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

})


// Here comes the even listener for the submit button
// And save the events into the local storage and fetch data from there
timeblocks.submit(function(event) {
  event.preventDefault();
  if(event.)
});


// Clear the local storage at the end of the day



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