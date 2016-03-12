// Retreive data from the database
function getData() {
	// Use Student object to retrieve all available student info
    var studentInfo = {
		career: user.Student.Career,
		faculty: user.Student.Faculty,
		departments: user.Student.Departments,
		plans: user.Student.PlanTitles,
		formOfStudy: user.Student.FormOfStudy,
		level: user.Student.Level,
		studentNum: user.Student.StudentNumber
	};
    
	// Can log the whole object to check what is being returned
	console.log(studentInfo);
	
	// Return final result	
    return studentInfo;
}

