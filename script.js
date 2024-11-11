const contacts = [
    {
        id: 1,
        name: "Hina",
        gmail: "Hinafahim759@gmail.com"
    },
    {
        id: 2,
        name: "Alishba",
        gmail: "AlishbaAhmed459@gmail.com"
    },
    {
        id: 3,
        name: "Areeba",
        gmail: "AreebaIbrahim869@gmail.com"
    },
];

function renderContacts(filteredContacts) {
    const contactList = document.getElementById("Contact-list");
    contactList.innerHTML = ""; 
    for (const contact of filteredContacts) {
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact";
        contactDiv.innerHTML = `
            <b>${contact.name}</b>
            <p>${contact.gmail}</p>`;
        contactList.appendChild(contactDiv);
    }
}

// Initially render all contacts
renderContacts(contacts);

const filterInput = document.getElementById("filter_input"); 
const filterButton = document.getElementById("filter-button"); 

filterButton.addEventListener("click", () => {
    const filterValue = filterInput.value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
    );
    renderContacts(filteredContacts);
});
