
class Attendee {
    constructor(name, age, food) {
    this.name = name;
    this.age = age;
    this.food = food
    }//Attendee added will require information for name, age, food allergy
    
    describe() {
     return `Name: ${this.name}, Age: ${this.age}, Food Allergies: ${this.food}`;
    }// This is how the attendee information will be listed
    }
    class Group {
    constructor(name) {
    this.name = name;
    this.attendees = [];
    }
    
    addAttendee(attendees) {
    if (attendees instanceof Attendee) {
    this.attendees.push(attendees);
    } else {
    throw new Error(`Error: ${attendees}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.attendees.length} attendees.`;
    }//this is to display the number of attendees entered
    }
    class Menu { 
    constructor() {
    this.group = [];
    this.selectedGroup = null;
    }
    
    start() { 
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createGroup();
    break;
    case '2' :
    this.viewGroup();
    break;
    case '3' :
    this.deleteGroup();
    break;
    case '4' :
    this.displayGroups();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Thank you for your visiting our page!');
    }// This is the Main Menu Prompt that redirects to different options based on selection
    
    
    showMainMenuOptions() {
    return prompt(`
    Welcome to the American Red Cross Dinner & Fundraising! 
    Select from the options below:
    0) Exit form
    1) Register a table for your Organization
    2) Modify your Organization's attendee list
    3) Cancel your Company's Registration/ table
    4) Display all of the registered Organization
    `);//this shows the Main Menu prompt
    }
    
    showGroupMenuOptions(groupInfo) {
    return prompt(`
    0) Go back to Main Menu
    1) Add a new attendee to your registered group
    2) Delete an attendee from your registered group
    -----------------
    ${groupInfo}
    `);//this shows the prompt for attendees
    }
    
    displayGroups() {
    let groupString = '';
    for (let i = 0; i < this.group.length; i++) {
    groupString += i+ ') ' + this.group[i].name + '\n';
    }
    alert(groupString);
    }//this will display all the etnered groups
    
    createGroup() {
    let name = prompt('Enter your Company Name: ');
    this.group.push(new Group(name));
    }// this will add the entry to the array
    
    viewGroup() {
    let index = prompt("Enter the index of the Company/ Organization that you want to view:");
    if (index > -1 && index < this.group.length) {
    this.selectedGroup = this.group[index];
    let description = 'Group Name: ' + this.selectedGroup.name + '\n';
    description += ' ' + this.selectedGroup.describe() + '\n ';
    for (let i = 0; i < this.selectedGroup.attendees.length; i++) {
        description += i + ') ' + this.selectedGroup.attendees[i].describe() + '\n';
    }
    let selection1 = this.showGroupMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createAttendee();
    break;
    case '2' :
    this.deleteAttendee();
    }//this will execute the selected option of either creating or deleting an entry for attendee
    }
    }
    
    deleteGroup() {
    let index = prompt('Enter the index of the Company/ Organization that you wish to cancel: ');
    if (index > -1 && index < this.group.length) {
    this.group.splice(index,1);
    }//this will delete a group entry from the array
    }
    
    
    createAttendee() {
    let name = prompt(`Enter the FIRST name of your Company's attendee: '`);
    let age = prompt(`Enter the age for the attendee: `);
    let food = prompt('Enter any food allergies for this attendee: ');
    this.selectedGroup.addAttendee(new Attendee(name,age,food));
    }
    
    deleteAttendee() {
    let index = prompt('Enter the index of the attendee that you wish to delete: ');
    if (index > -1 && index < this.selectedGroup.attendees.length) {this.selectedGroup.attendees.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start(); 