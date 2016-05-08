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
		"title" : "Sample Project 1",
		"date" : "2007-2008",
		"description" : "Doing some stuff to check out what is this about.",
		"images" : ["images/life.jpg", "images/fry.jpg", "images/197x148.gif"]
	}
]


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



projects["property[]"] = "test";
// projects.8property = "test";

$("#main").append(Object.keys(education.schools[0])[0], ": ", education.schools[0].name, "<br>");
$("#main").append(projects["property[]"]);

// contact_info_keys = Object.keys(bio["contact_info"]);
// keys_len = contact_info_keys.length;


// var html_format = {
// 	"formattedName" : HTMLheaderName.replace("%data%", bio.name),
// 	"formattedRole"	: HTMLheaderRole.replace("%data%", bio.role),
// 	"formattedGithub" : HTMLgithub.replace("%contact%", contact_info_keys[keys_len-1]).replace("%data%", bio.contact_info[contact_info_keys[keys_len-1]]), 
// 	"formattedEmail" : HTMLemail.replace("%contact%", contact_info_keys[keys_len-2]).replace("%data%", bio.contact_info[contact_info_keys[keys_len-2]]),
// 	"formattedMobile" : HTMLmobile.replace("%contact%", contact_info_keys[keys_len-3]).replace("%data%", bio.contact_info[contact_info_keys[keys_len-3]]),
// 	"formattedPicture" : HTMLbioPic.replace("%data%", bio.picture_url),
// 	"formattedMessage" : HTMLwelcomeMsg.replace("%data%", bio.welcome_message),
// 	"formattedSkills1" : HTMLskills.replace("%data%", bio.skills1),
// 	"formattedSkills2" : HTMLskills.replace("%data%", bio.skills2),
// 	"formattedSkills3" : HTMLskills.replace("%data%", bio.skills3)
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