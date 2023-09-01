document.getElementById("createCustomerBtn").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Check if firstName and lastName are not empty
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please fill in both first name and last name.");
    } else {
        // Here, you can handle storing the customer information.
        // You may want to send this data to a backend server or store it locally.

        // After handling the data, you can clear the form fields.
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("phoneNumber").value = "";

        // Display an alert with the concatenated first name and last name
        alert("New Customer Created:\nFirst Name: " + firstName + "\nLast Name: " + lastName);
    }
});







document.getElementById("checkCapacityBtn").addEventListener("click", function () {
    const selectedBoxType = document.getElementById("boxType").value;


    if (selectedBoxType === 'small') {
        document.getElementById("capacityResult").textContent = 'Small boxes area only accepts small boxes';
    } 
    
    else if (selectedBoxType === 'medium') {
        document.getElementById("capacityResult").textContent = 'Medium boxes area only accepts Medium boxes';
    }

    else {
        document.getElementById("capacityResult").textContent = 'Large boxes area only accepts Large boxes.';
    };


    document.getElementById("boxTypeval").textContent = selectedBoxType
});


document.getElementById("checkAvailabilityBtn").addEventListener("click", function () {
    const availability = document.getElementById("availability").value;

    if (!availability) {
        document.getElementById("availabilityResult").textContent = "Please enter value for availability";
    } else if (availability <= 10) {
        document.getElementById("availabilityResult").textContent = "Boxes are still available";
    } else {
        document.getElementById("availabilityResult").textContent = "Boxes not still available";
    }
});






 // Sample function to add log entries 
 function addLogEntry(action, boxType, customerName) {
    const logEntry = document.createElement("li");
    logEntry.textContent = `${action}: ${boxType} box for ${customerName}`;
    document.getElementById("storageLog").appendChild(logEntry);
}

// Example usage:
addLogEntry("Stored", "Medium", "John Doe");
addLogEntry("Retrieved", "Small", "Alice Smith");