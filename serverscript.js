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

function getOpenData() {
    // Paste your API key here. IMPORTANT: DO NOT PUSH THIS TO GITHUB, STORE KEY IN DB
    var apiKey = "fd2948fdde9149cf94c403b3c64d325d"; 
    if (apiKey == "")
        return '{"error":"No Api Key! Add your key in the server script file."}';

    return proxy.GetProxy('https://api.uwaterloo.ca/v2/foodservices/watcard.json?key=' + apiKey);
}

