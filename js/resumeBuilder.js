/*
This is empty on purpose! Your code to build the resume will go here.
 */
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

/* RESUME */
var bio = { 
	"name" : prompt("Escriba su nombre:"),
	"role" : prompt("Escriba su Rol/Función:"),
	"contact_info" : prompt("Información acerca de ti:"),
	"mobile" : prompt("Celular:"),
	"picture_url" : prompt("Inserta la URL de tu foto:"),
	"welcome_message" : prompt("Inserta tu mensaje de Bienvenida:"),
	"skills" : prompt("Habilidades:")
}

var html_format = {
	"formattedName" : HTMLheaderName.replace("%data%", bio.name),
	"formattedRole"	: HTMLheaderRole.replace("%data%", bio.role),
	"formattedContactInfo" : HTMLcontactGeneric.replace("%data%", bio.contact_info),
	"formattedMobile" : HTMLmobile.replace("%data%", bio.mobile),
	"formattedPicture" : HTMLbioPic.replace("%data%", bio.picture),
	"formattedMessage" : HTMLwelcomeMsg.replace("%data%", bio.welcome_message),
	"formattedSkills" : HTMLskills.replace("%data%", bio.skills)
}

$("#header").prepend(html_format.formattedRole);
$("#header").prepend(html_format.formattedName);
$("#")

// var skills = ["awesomeness", "programming", "teaching", "JS"];
// $("#main").append(skills[0]);