/* RESUME */
// Bio Data
var bio = {};
bio.name = "Edwin Marte Torres";
bio.role = "Computer Scientist";
bio.contacts = { "mobile" : "849-631-4461",
					 "email" : "edwin.sonic@gmail.com",
					 "address" : "Mayor General Ant. Imbert Barrera 52, POP",
				     "github" : "KludgeProg",
				     "twitter" : "Hedgehog1973",
				     "location" : "Dominican Republic"
				   };
bio.welcome_message = "Hola!! Este es mi Curriculum :3 !!";
bio.skills = ["Dinámico", "Trabajador", "Dedicado"];
bio.bioPic = "images/edwin.jpg";

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic))
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message))

	// CONTACTS
	contact_keys = Object.keys(bio.contacts);
	for (var i = contact_keys.length - 1; i >= 0; i--) {
		format = window[('HTML' + contact_keys[i])];
		if (format) {	
			format = format.replace("%contact%", contact_keys[i]).replace("%data%", bio.contacts[contact_keys[i]]);
		}
		$("#topContacts").prepend(format);	
	}

	// SKILLS
	formattedSkills = []
	for (skill in bio.skills) {
		formattedSkills.push(HTMLskills.replace("%data%", bio.skills[skill]))
	}

	$("#header").append(HTMLskillsStart);

	if (bio.skills.length > 0) {
		$("#skills").prepend(formattedSkills);
	}
}

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

work.display = function() {
	for (works in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[works].employer);
		formatTitle = HTMLworkTitle.replace("%data%", work.jobs[works].title);
		formatDate = HTMLworkDates.replace("%data%", work.jobs[works].dates);
		formatLocation = HTMLworkLocation.replace("%data%", work.jobs[works].location);
		formatDescription = HTMLworkDescription.replace("%data%", work.jobs[works].description);
		
		$(".work-entry:last").append(formatEmployer + formatTitle, formatDate, formatLocation, formatDescription);
	}
}

// Education Info
var education = {
	"schools" : [
		{
			"name" : "Colegio Educacional Bíblico",
			"location" : "Puerto Plata, Dom. Rep.",
			"degree" : "BA",
			"major" : ["General Education"],
			"date" : "1992-2005",
			"url" : "http://www.edubi.do"
		},
		{
			"name" : "Universidad Dominicana O&M",
			"location" : "Puerto Plata, Dom. Rep",
			"degree" : "Engineering - NA",
			"major" : ["Computer Sciences"],
			"date" : "2006-Actuality",
			"url" : "http://www.udoym.edu.do"
		},
		{
			"name" : "Ministerio Educacion Superior, Ciencias y Tecnología (MESCyT)",
			"location" : "Puerto Plata, Dom. Rep.",
			"degree" : "Expert",
			"minor" : ["Competitive English Course"],
			"date" : "2006-2007",
			"url" : "http://www.google.com.do"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to Computer Sciences",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://classroom.udalocation.com/courses/cs101"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udalocation.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title" : "Programming Foundations with Python",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udalocation.com/course/programming-foundations-with-python--ud036"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		formatName = HTMLschoolName.replace("%data%", education.schools[school].name)
		formatDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		formatDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
		formatLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		if (education.schools[school].major) {
			formatMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		} else {
			formatMajor = HTMLschoolMajor.replace("%data%", education.schools[school].minor);
		}
		formatURL = HTMLschoolURL.replace("%data%", education.schools[school].url)

		$(".education-entry:last").append(formatName + formatDegree, formatDate, formatLocation, formatMajor + formatURL);
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		formatTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		formatSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		formatDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		formatURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formatTitle + formatSchool, formatDate, formatURL);
	}
}

// Projects Info
var projects = {}
projects.project = [
	{
		"title" : "Sample Project 1",
		"date" : "2007-2008",
		"description" : "Doing some stuff to check out what is this about.",
		"images" : ["images/fry.jpg", "images/197x148.gif"]
	},
	{
		"title" : "Sample Project 1",
		"date" : "2007-2008",
		"description" : "Doing some stuff to check out what is this about.",
		"images" : ["images/fry.jpg", "images/197x148.gif"]
	}
]

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		formatTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		formatDate = HTMLprojectDates.replace("%data%", projects.project[project].date);
		formatDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		
		images = []
		if (projects.project[project].images.length > 0) {
			for (image_data in projects.project[project].images) {				
				images.push(HTMLprojectImage.replace("%data%", projects.project[project].images[image_data]));
			}
		}
		
		$(".project-entry:last").append(formatTitle, formatDate, formatDescription, images);
	}
}

// Display Data on Web
bio.display();
work.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);


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
	x = loc.pageX;
	y = loc.pageY;
	logClicks(x,y);
});