/* RESUME */
// Bio Data
var bio = {};
bio.name = "Edwin Marte Torres";
bio.role = "Computer Scientist";
bio.contact_info = { "mobile" : "849-631-4461",
					 "email" : "edwin.sonic@gmail.com",
					 "address" : "Mayor General Ant. Imbert Barrera 52, POP",
				     "github" : "KludgeProg",
				     "twitter" : "Hedgehog1973",
				     "location" : "Dominican Republic"
				   };
bio.welcome_message = "Hola!! Este es mi Curriculum :3 !!";
bio.skills = ["Dinámico", "Trabajador", "Dedicado"];
bio.bioPic = "images/edwin.jpg";

// Work Info
var work = {
	"jobs" : [
		{
			"employer" : "Rosivonne Reyes",
			"title" : "Programmer",
			"location" : "Santiago, Dom. Rep.",
			"dates" : "2015-2016",
			"description" : "Student in Cincinnatus Craftmanship Course"
		},
		{
			"employer" : "Yulissa Mondesi",
			"title" : "Customer Services",
			"location" : "Puerto Plata, Dom. Rep.",
			"dates" : "2010-2016",
			"description" : "Customer Services representative of UPS, DHL and FEDEX"
		}
	]
};


// Education Info
var education = {
	"schools" : [
		{
			"name" : "Colegio Educacional Bíblico",
			"city" : "Puerto Plata, Dom. Rep.",
			"degree" : "BA",
			"major" : ["General Education"],	
			"url" : "http://www.google.com.do"
		},
		{
			"name" : "Universidad Dominicana O&M",
			"city" : "Puerto Plata, Dom. Rep",
			"degree" : "Engineering - NA",
			"major" : ["Computer Sciences"],
			"url" : "http://www.google.com.do"
		},
		{
			"name" : "Ministerio Educacion Superior, Ciencias y Tecnología (MESCyT)",
			"city" : "Puerto Plata, Dom. Rep.",
			"degree" : "Expert",
			"minor" : ["Competitive English Course"],
			"url" : "http://www.google.com.do"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to Computer Sciences",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://classroom.udacity.com/courses/cs101"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title" : "Programming Foundations with Python",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udacity.com/course/programming-foundations-with-python--ud036"
		}
	]
};

// Projects Info
var projects = {}
projects.project = [
	{
		title : "Sample Project 1",
		date : "2007-2008",
		"description" : "Doing some stuff to check out what is this about.",
		"images" : ["images/life.jpg", "images/fry.jpg", "images/197x148.gif"]
	}
]

// Display Data on Web
displayWork();





// FUNCTIONS AND MORE
function inName(string) {
	separated = string.split(" ");
	separated[1] = separated[1].toUpperCase();
	separated[0] = separated[0].slice(0,1).toUpperCase() + separated[0].slice(1).toLowerCase();
	return separated[0] + " " + separated[1];
}

function locationizer(work_obj) {
    locations = [];
    for (elements in work_obj.jobs) {
        if (work_obj.jobs[elements].location != undefined) {
            locations.push(work_obj.jobs[elements].location);
        }
    }
    return locations;
}

$(document).click(function(loc) { 
	//your code here
	x = loc.pageX;
	y = loc.pageY;
	logClicks(x,y);
});

function displayWork() {
	// NAME, ROLE AND PICTURE FORMAT
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic))
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message))

	// CONTACT FORMAT
	contact_keys = Object.keys(bio.contact_info);
	for (var i = contact_keys.length - 1; i >= 0; i--) {
		format = window[('HTML' + contact_keys[i])];
		if (format) {	
			format = format.replace("%contact%", contact_keys[i]).replace("%data%", bio.contact_info[contact_keys[i]]);
		}
		$("#topContacts").prepend(format);	
	}

	// WORK FORMAT
	for (works in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[works].employer);
		formatTitle = HTMLworkTitle.replace("%data%", work.jobs[works].title);
		formatDate = HTMLworkDates.replace("%data%", work.jobs[works].dates);
		formatLocation = HTMLworkLocation.replace("%data%", work.jobs[works].location);
		formatDescription = HTMLworkDescription.replace("%data%", work.jobs[works].description);
		
		$(".work-entry:last").append(formatEmployer + formatTitle, formatDate, formatLocation, formatDescription);
	}

	// SKILLS FORMAT
	var formattedSkills = [
	 	HTMLskills.replace("%data%", bio.skills[0]),
	 	HTMLskills.replace("%data%", bio.skills[1]),
	 	HTMLskills.replace("%data%", bio.skills[2])
	]

	$("#header").append(HTMLskillsStart);

	if (bio.skills.length > 0) {
		$("#skills").prepend(formattedSkills);
	}

	// INTERNATIONALIZE BUTTON
	$('#main').append(internationalizeButton);
}




// $("#header").append("Abstract Resolution!!");

// var awesomeThoughts = "I am Edwin and I am AWESOME!!!";
// var age = 26;
// console.log(awesomeThoughts);

// var email = "raduga@hotmail.com";
// var newEmail = email.replace("hotmail", "gmail");
// console.log(newEmail);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);
// $("#main").append(funThoughts);


// education["name"] = "Universidad Dominicana O&M";
// education["years"] = "2006-Present";
// education["city"] = "Puerto Plata, Dominican Republic";

// $("#main").append(work['position']);



// projects["property[]"] = "test";
// projects.8property = "test";

// $("#main").append(Object.keys(education.schools[0])[0], ": ", education.schools[0].name, "<br>");
// $("#main").append(projects["property[]"]);


// keys_len = contact_info_keys.length;


// var html_format = {
// 	"formattedName" : HTMLheaderName.replace("%data%", bio.name),
// 	"formattedRole"	: HTMLheaderRole.replace("%data%", bio.role),
	
// }


// $("#header").prepend(html_format.formattedRole);
// $("#header").prepend(html_format.formattedName);

// $("#topContacts").prepend(html_format.formattedGithub);
// $("#topContacts").prepend(html_format.formattedEmail);
// $("#topContacts").prepend(html_format.formattedMobile);

// $("#header").append(html_format.formattedPicture);
// $("#header").append(html_format.formattedMessage);
// $("#header").append(HTMLskillsStart);
// $("#header").append(html_format.formattedSkills1);
// $("#header").append(html_format.formattedSkills2);
// $("#header").append(html_format.formattedSkills3);







// var skills = ["awesomeness", "programming", "teaching", "JS"];
// $("#main").append(skills[0]);