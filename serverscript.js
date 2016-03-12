// Retreive data from the database
// function getData() {
// 	// Use Student object to retrieve all available student info
//     var studentInfo = {
// 		career: user.Student.Career,
// 		faculty: user.Student.Faculty,
// 		departments: user.Student.Departments,
// 		plans: user.Student.PlanTitles,
// 		formOfStudy: user.Student.FormOfStudy,
// 		level: user.Student.Level,
// 		studentNum: user.Student.StudentNumber
// 	};
// 	

function getData() {
    var queryResult = db.Execute('SELECT * FROM model_data');
    var rows = JSON.parse(queryResult);
    if (rows.length > 0 && typeof rows[0].Error != 'undefined') {
        return '{"status":"noTable"}';
    }
    return queryResult;
}
    
	// Can log the whole object to check what is being returned
	console.log(studentInfo);
	
	// Return final result	
    return studentInfo;
}

function getOpenData() {
    // Paste your API key here. IMPORTANT: DO NOT PUSH THIS TO GITHUB, STORE KEY IN DB
    var apiKey = apiKey;
    var user_id = user_id;
    if (apiKey == "")
        return '{"error":"No Api Key! Add your key in the server script file."}';

    return proxy.GetProxy('https://api.uwaterloo.ca/v2/directory/' + user_id + '.json?key=' + apiKey);
}

function privDataRead(){
    return privateDataService.Get('apiKey');
}

function getMockData(){
 	// This is a mock student data fetch
    var data = {
          "meta":{
            "requests":250,
            "timestamp":1456239454,
            "status":200,
            "message":"Request successful",
            "method_id":1723
          },
          "data":[
            {
              "id":20678932,
			  "user_id": tyuen,
              "name":"Tara Yuen",
              "program":"Systems Design Engineering",
            },
            {
              "id":20648377,
              "user_id": jwon,
              "name":"Jessie Won",
              "program":"Chemical Engineering",
            },
            {
              "id":20683781,
              "user_id": kbrudnicki,
              "name":"Krystyna Brudnicki",
              "program":"Biology",
            },
            {
              "id":20689489,
              "user_id": zkeller,
              "name":"Zak Keller",
              "program":"Global Busines and Digital Arts",
            }
          ]
        };
    // Need to convert response object to string
    return JSON.stringify(data);
}
