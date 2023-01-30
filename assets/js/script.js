// Target the areas that we are interacting with in HTML
const currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
const timeblocks = $("#timeblocks");
const officeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const currentHour = eval(moment().format("HH"));
const textAreas = $(".description");


$(".hour").each(function() {
    let hour = $(this).text().split(":");
    if(currentHour === eval(hour[0])) {
        $(this).parent().addClass("present");
    } else {
        if (currentHour < eval(hour[0])) {
        $(this).parent().addClass("future");
        $(this).parent().removeClass("present");
        } else {
            $(this).parent().addClass("past");
            $(this).parent().removeClass("future");
        }
    }

})

// function changeColor(time) {
//     for(let i = 0; i<officeHours.length;i++) {
//         if ()
//     }
// }





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