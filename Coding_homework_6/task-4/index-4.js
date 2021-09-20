let academy = [
    {classroomNumber: 'C', numberOfSeats: 11, facultyName: 'Law'},
    {classroomNumber: 'A', numberOfSeats: 17, facultyName: 'Marketing'},
    {classroomNumber: 'B', numberOfSeats: 19, facultyName: 'Management'},
    {classroomNumber: 'E', numberOfSeats: 16, facultyName: 'International Relationships'},
    {classroomNumber: 'D', numberOfSeats: 10, facultyName: 'Philosophy'}
];

function showAllClassrooms(array) {
    return array;
};

function showClassroomForTheFaculty(array, faculty) {
    let classroom = array.find(item => item.facultyName === faculty);
    return classroom.classroomNumber;
};

function showClassroomForTheGroup(array, name, number, faculty) {
    let group = {groupName: name, numberOfStudents: number, facultyOfGroup: faculty};
    if (array.find(item => item.numberOfSeats >= group.numberOfStudents && item.facultyName === group.facultyOfGroup) === undefined) {
        return 'There are no available classrooms for this group';
    } else {
    return array.find(item => item.numberOfSeats >= group.numberOfStudents && item.facultyName === group.facultyOfGroup); 
    };
};

function sortClassroomsByNumberOfSeats(array) {
    function compareClassroomsNumberOfSeats(a, b) {
        if (a.numberOfSeats > b.numberOfSeats) return 1;
        if (a.numberOfSeats === b.numberOfSeats) return 0;
        if (a.numberOfSeats < b.numberOfSeats) return -1;
    };
    return array.sort(compareClassroomsNumberOfSeats);
}

function sortClassroomsByTheirNames(array) {
    function compareClassroomsNames(a, b) {
        if (a.classroomNumber > b.classroomNumber) return 1;
        if (a.classroomNumber === b.classroomNumber) return 0;
        if (a.classroomNumber < b.classroomNumber) return -1;
    };
    return array.sort(compareClassroomsNames);
};
