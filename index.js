// Attendee Object
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Function to log attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Function to log ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Function to update ticket type
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

// Function to update ticket price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Function to remove event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Function to add checkedIn property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// Example usage (for testing)
logAttendeeName(attendee);
logTicketPrice(attendee);

updateTicketType(attendee, "Regular");
updateTicketPrice(attendee, 100);

removeEventProperty(attendee);
addCheckedInProperty(attendee);

console.log(attendee);



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};