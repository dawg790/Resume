
// Literal Object Notation
var bio = {
	"name": "Nick Woodland",
	"role": "Web Developer",
	"contactInfo": {
		"work": "3038387732",
		"cell": "6032656536",
		"github": "dawg790"
	},
	"city": "Denver, CO",
	"welcomeMessage": "Thanks for viewing my resume",
	"skills": [
		"HTML/CSS", "JavaScript", "Git", "Adobe Illustrator", "Woodworking", "Mtn Biking"
	],
	"pictureUrl": "images/Nick_Woodland.jpg",
};

var education = {
	"schools": [
		{
			"name": "St. Lawrence University",
			"city": "Canton, NY",
			"major": "Geology",
			"graduated": "1998"
		},
		{
			"name": "CCHS",
			"city": "Concord, MA",
			"major": "N/A",
			"graduated": "1994"
		}
	],
	"onlineCourse": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"employers": [
		{
			"name": "HERE Maps",
			"jobTitle": "Senior Analyst Technology Deployment",
			"years": "3"
		},
		{
			"name": "NAVTEQ",
			"jobTitle": "Project Manager",
			"years": "10"
		},
		{
			"name": "CDM",
			"jobTitle": "GIS Analyst",
			"years": "0.8"
		}
	]
}

var projects = {
	"web": [
	{
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "Lorem Ipsum in doler ad nipsum for gypsum cause my skin is dry.",
		"images": [
		 	"http://www.wispcreekdesign.com/",
		 	"http://www.wispcreekdesign.com/"
		 ]
	},
	{
		"title": "Sample Project 2",
		"dates": "2014",
		"description": "Lorem Ipsum in doler ad nipsum for gypsum cause my skin is dry.",
		"images": [
		 	"http://www.wispcreekdesign.com/",
		 	"http://www.wispcreekdesign.com/"
		 ]
	}
	]
}
var skillSet = HTMLskills.replace("%data%", bio.skills);

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	$('#header').append(skillSet);
}
















