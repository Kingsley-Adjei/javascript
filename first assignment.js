//Creating An Object
 const applicant = {
//Properties
    Name: "Kingsley",
    Course: "Computer Science",
    Phone: "+233500712368",
    Email: "kingkadjei002@gami.com",
    School: "KNUST",
};
    //Method
    applicant.Details = function () 
        {return this.Name + "  "
        + this.Course + "  " 
        + this.Phone + "  " 
        + this.Email + " " 
        + this.School;
        
    }

 console.log(applicant.Details());
