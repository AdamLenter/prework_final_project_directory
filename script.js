const profilePictureDiv = document.getElementById("profilePictureDiv");
const professionalExperienceDiv = document.getElementById("professionalExperienceDiv");
const professionalExperienceLI = document.getElementById("professionalExperienceLI");

function displaySelectedDiv(selectedDiv)
    {
    const divsToHide = ["profilePictureDiv", "professionalExperienceDiv", "familyDiv", "interestsDiv"];

    for(div of divsToHide) {
        if(div === selectedDiv) {
            //This is the div to display:
            document.getElementById(div).style.display = "block";
        }
        else {
            //This is not the div to display:
            document.getElementById(div).style.display = "none";
        }
    }
}