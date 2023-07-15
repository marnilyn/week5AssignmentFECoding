
class Attendee {
    constructor(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size
    }
    
    describe() {
     return `${this.name} is ${this.age} years old and size ${this.size}`;
    }
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
    }
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
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) Exit form
    1) Register a spot for your family
    2) Add an attendee to group registration
    3) Cancel your registration/ delete an attendee
    4) Display all of the registered groups/families attending
    `);
    }
    
    showGroupMenuOptions(groupInfo) {
    return prompt(`
    0) back
    1) add a new attendee to your registered group
    2) delete an attendee from your registered group
    -----------------
    ${groupInfo}
    `);
    }
    
    displayGroups() {
    let groupString = '';
    for (let i = 0; i < this.group.length; i++) {
    groupString += i+ ') ' + this.group[i].name + '\n';
    }
    alert(groupString);
    }
    
    createGroup() {
    let name = prompt('Enter name for your group/family (for example: Jones Family): ');
    this.group.push(new Group(name));
    }
    
    viewGroup() {
    let index = prompt("Enter the index of the group that you want to view:");
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
    }
    }
    }
    
    deleteTeam() {
    let index = prompt('Enter the index of the group that you wish to delete: ');
    if (index > -1 && index < this.group.length) {
    this.group.splice(index,1);
    }
    }
    
    
    createAttendee() {
    let name = prompt('Enter the FIRST name for family member: ');
    let age = prompt('Enter the age of the family member (use a number): ');
    let size = prompt('Enter the shirt size of the attendee (for example- adult medium, youth XL):');
    this.selectedGroup.addAttendee(new Attendee(name,age,size));
    }
    
    deleteAttendee() {
    let index = prompt('Enter the index of the attendee that you wish to delete: ');
    if (index > -1 && index < this.selectedGroup.attendees.length) { this.selectedGroup.attendees.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start(); 