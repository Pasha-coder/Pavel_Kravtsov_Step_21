let academy = [
    {classroomNumber: 'C', numberOfSeats: 11, facultyName: 'Law'},
    {classroomNumber: 'A', numberOfSeats: 17, facultyName: 'Marketing'},
    {classroomNumber: 'B', numberOfSeats: 19, facultyName: 'Management'},
    {classroomNumber: 'E', numberOfSeats: 16, facultyName: 'International Relationships'},
    {classroomNumber: 'D', numberOfSeats: 19, facultyName: 'Phylosophy'}
];

function showAllClassrooms(array) {
    return array;
};

function showClassroomForTheFaculty(array, faculty) {
    let classroom = array.find(item => item.facultyName === faculty);
    return classroom.classroomNumber;
};

