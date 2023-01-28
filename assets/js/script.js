// Target the areas that we are interacting with in HTML
const currentDay = $("#currentDay");
const timeblocks = $("#timeblocks");
const officeHoursOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const currentTime = moment().calendar();


// Display the current date and day
function displayDay() {
    let date = moment();
    currentDay.text(date.format("dddd, MMMM Do YYYY"));
}

// Dynamically generating the timeblocks as the user opens the website
function generateTimeBlocks() {
    // Looping through the officeHoursOfDay to create the layout and the content of the timeblocks
    for (let i= 0; i<officeHoursOfDay.length; i++) {
        const timeblockForm = $("<form data-content='officeHour' class='time-block row'></form>");
        timeblocks.append(timeblockForm);
        const officeHour = $("<div class='hour'></div>");
        officeHour.text = officeHoursOfDay[i];
        timeblockForm.append(officeHour);
        const userEvent = $("<textarea class='description'></textarea>");
        // userEvent.text = localStorage.getItem();
        timeblockForm.append(userEvent);
        const saveBtn = $("<button type='submit' class='saveBtn'><i class='fa-solid fa-floppy-disk'></i></button>");
        timeblockForm.append(saveBtn);
    };
}

displayDay();
generateTimeBlocks();