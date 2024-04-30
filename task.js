//Resume data in JSON format
let resume = {
    basics: {
        name: "Paviesh Sakti Vivekanandan",
        email: "paviesh3199@gmail.com",
        phone: "(+91)-9514426206",
        degree: "B.Sc",
        location : {
            address: "10 shanthi nagar",
            town: "Gobichettipalayam",
            city: "Erode",
            postalCode: "638452",
            state: "Tamilnadu",
            country: "India"
        },
        profiles:
            {
                website: "https://www.linkedin.com/in/paviesh-sakti-vivekanandan/",
                github: "https://github.com/paviesh-SV",
            },

    },

    education: 
        {
            institution: "University of Texas at Dallas",
            degree: "Bachelor of Science",
            department: "Mechanical Engineering",
            studyType: "Full-time",
            start: "20-08-2018",
            end: "14-05-2022",
            gpa: "3.8/4.0",
            achievements: "Graduated with latin honors - Cum Laude"
        },

    skills: [{
            name: "programming languages",
            level: "beginner",
            keywords: "Javascript, C++, C"
        },

            {
            name: "3D-Models",
            level: "intermediate",
            keywords: "Creo, SolidWokrs, AutoCad"
        },
             {
            name:"Simulation",
            level:"Beginner",
            keywords:"MatLab, MatLab Simulink, Ansys"
        },
    ],

    languages: [{
            language:"English",
            fluency: {
                speaking: "Fluent",
                writing: "Fluent",
                reading: "Fluent"
            }
        },

            {
            language: "Tamil",
            fluency: {
                speaking: "Fluent",
                writing: "Beginner",
                reading: "Beginner"
            }
        },

            {
            language: "Bahasa Indonesia",
            fluency: {
                speaking: "Intermediate",
                writing: "Intermediate",
                reading: "Intermediate"
            }
        },
    ],

    interests: [
            {
            name: "sports",
            keyword: "Basketball, cricket, badminton"
        },
            {
            name: "Playing",
            keyword: "videogame, boardgame, cardgames"
        },

            {
            name: "reading",
            keyword: "books, comic, newspaper"
        }
    ]
};

// for loop
console.log("For Loop:---------------------------------");
for(i=0; i<resume.skills.length; i++)
{
    console.log(resume.skills[i].name);
    console.log(resume.skills[i].level);
    console.log(resume.skills[i].keywords);
}

//for each loop
console.log("ForEach loop:------------------------------------");
resume.skills.forEach(function(skills) {
    console.log(skills.name);
    console.log(skills.level);
    console.log(skills.keywords);
});

//create a JSON to show for in and for of loop
var temp = [
    {
        name: "Paviesh Sakti", 
        id: "82y3173"
    },

    {
        name: "James Bond",
        id: "007"
    }
]

//for in
console.log("For In loop:--------------------------------------");
for (var key in temp)
{
    if(temp.hasOwnProperty(key)) 
    {
        console.log(temp[key].name);
        console.log(temp[key].id);
    }
}

//for of loop
console.log("For of loop:----------------------------------");
let txt = "";
for (let x of temp[key].name) 
{
    txt += x;
}
console.log(txt);
