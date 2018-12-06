
function go() {

    var homework = document.getElementById("hmwrkScores").value;
    var homeworkWeight = document.getElementById("hmwrkWeight").value;
    var homeworkValue = parseInt(homeworkWeight);
    var homeworkArray = splitAndConvert(homework);
    var homeworkAverage = findAverage(homeworkArray);
    var homeworkTotal = calculateWeight(homeworkAverage, homeworkValue);

    var classwork = document.getElementById("classworkScores").value;
    var classworkWeight = document.getElementById("classworkWeight").value;
    var classworkValue = parseInt(classworkWeight);
    var classworkArray = splitAndConvert(classwork);
    var classworkAverage = findAverage(classworkArray);
    var classworkTotal = calculateWeight(classworkAverage, classworkValue);

    var tests = document.getElementById("testScores").value;
    var testsWeight = document.getElementById("testWeight").value;
    var testsValue = parseInt(testsWeight);
    var testsArray = splitAndConvert(tests);
    var testsAverage = findAverage(testsArray);
    var testsTotal = calculateWeight(testsAverage, testsValue);

    var participation = document.getElementById("participationScores").value;
    var participationWeight = document.getElementById("participationWeight").value;
    var participationValue = parseInt(participationWeight);
    var participationArray = splitAndConvert(participation);
    var participationAverage = findAverage(participationArray);
    var participationTotal = calculateWeight(participationAverage, participationValue);

    var project = document.getElementById("projectScores").value;
    var projectWeight = document.getElementById("projectWeight").value;
    var projectValue = parseInt(projectWeight);
    var projectArray = splitAndConvert(project);
    var projectAverage = findAverage(projectArray);
    var projectTotal = calculateWeight(projectAverage, projectValue);

    var totalWeight = projectValue/100 + participationValue/100 + testsValue/100 + classworkValue/100 + homeworkValue/100;
    var total = homeworkTotal + classworkTotal + testsTotal + participationTotal + projectTotal;
    if((projectValue + participationValue + testsValue + classworkValue + homeworkValue)!=100 ){
        document.getElementById("false").innerHTML = "!! your weights do not add up. please enter valid weights for a valid grade !!";
        document.getElementById("total").innerHTML = "Your overall grade is " + total + "%";

    }
    else{
        document.getElementById("total").innerHTML = "Your overall grade is " + total + "%";
        if(homeworkAverage>=90){
            document.getElementById("hmwrkScores").style.backgroundColor = "green";
        }
        if(classworkAverage>=90){
            document.getElementById("classworkScores").style.backgroundColor = "green";
        }
        if(testsAverage>=90){
            document.getElementById("testScores").style.backgroundColor = "green";
        }
        if(participationAverage>=90){
            document.getElementById("participationScores").style.backgroundColor = "green";
        }
        if(projectAverage>=90){
            document.getElementById("projectScores").style.backgroundColor = "green";
        }
        if(homeworkAverage>=80 && homeworkAverage<90){
            document.getElementById("hmwrkScores").style.backgroundColor = "purple";
        }
        if(classworkAverage>=80 && classworkAverage<90){
            document.getElementById("classworkScores").style.backgroundColor = "purple";
        }
        if(testsAverage>=80 && testsAverage<90){
            document.getElementById("testScores").style.backgroundColor = "purple";
        }
        if(participationAverage>=80 && participationAverage<90){
            document.getElementById("participationScores").style.backgroundColor = "purple";
        }
        if(projectAverage>=80 && projectAverage<90){
            document.getElementById("projectScores").style.backgroundColor = "purple";
        }
        if(homeworkAverage>=70 && homeworkAverage<80){
            document.getElementById("hmwrkScores").style.backgroundColor = "yellow";
        }
        if(classworkAverage>=70 && classworkAverage<80){
            document.getElementById("classworkScores").style.backgroundColor = "yellow";
        }
        if(testsAverage>=70 && testsAverage<80){
            document.getElementById("testScores").style.backgroundColor = "yellow";
        }
        if(participationAverage>=70 && participationAverage<80){
            document.getElementById("participationScores").style.backgroundColor = "yellow";
        }
        if(projectAverage>=70 && projectAverage<80){
            document.getElementById("projectScores").style.backgroundColor = "yellow";
        }
        if(homeworkAverage>=60 && homeworkAverage<70){
            document.getElementById("hmwrkScores").style.backgroundColor = "orange";
        }
        if(classworkAverage>=60 && classworkAverage<70){
            document.getElementById("classworkScores").style.backgroundColor = "orange";
        }
        if(testsAverage>=60 && testsAverage<70){
            document.getElementById("testScores").style.backgroundColor = "orange";
        }
        if(participationAverage>=60 && participationAverage<70){
            document.getElementById("participationScores").style.backgroundColor = "orange";
        }
        if(projectAverage<60){
            document.getElementById("projectScores").style.backgroundColor = "orange";
        }
        if(homeworkAverage<60){
            document.getElementById("hmwrkScores").style.backgroundColor = "red";
        }
        if(classworkAverage<60){
            document.getElementById("classworkScores").style.backgroundColor = "red";
        }
        if(testsAverage<60){
            document.getElementById("testScores").style.backgroundColor = "red";
        }
        if(participationAverage<60){
            document.getElementById("participationScores").style.backgroundColor = "red";
        }
        if(projectAverage<60){
            document.getElementById("projectScores").style.backgroundColor = "red";
        }

    }


    return total;

}
function go2(){
    var total = go();
    var final = document.getElementById("wantedGrade").value;
    var finalValue = parseInt(final);
    var finalWeight = document.getElementById("finalWeight").value;
    var parseWeight = parseInt(finalWeight);
    var secondTotalWeight = (100-parseWeight)/100;
    var needed = (finalValue - total*(secondTotalWeight))/(parseWeight/100);
    document.getElementById("final").innerHTML = "You need a "+ needed + " percent on the final exam.";

}


function splitAndConvert(numbers){

    var array = numbers.split(",");
    for(var i=0; i<array.length; i++){
        array[i] = parseInt(array[i]);

    }
    return array;
}

function findAverage(array){
    var sum = 0;
    var average = 0;
    for(var i=0; i<array.length; i++){
        sum += array[i];
    }
    var average = sum/array.length;
    return average;
}


function calculateWeight(average, weight){
    return (weight/100)*average;
}

function addUp(projectValue, participationValue, testsValue, classworkValue, homeworkValue){
    if((projectValue + participationValue + testsValue + classworkValue + homeworkValue)!=100 ){
        document.getElementById("false").innerHTML = "However, your weights do not add up.";
        return false;
    }
    else{
        return true;
    }
}
