// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


const day=1

switch (day) 
{
    case 1:
    
        console.log("Monday");
        break;
        
   
    
    case 2:
    
        console.log("Tueday");
        break;

    
    case 3:
    
        console.log("Wednesday");
        break;

    
    case 4:
    
        console.log("Thursday");
        break;

   
    ;
    case 5:
    
        console.log("Friday");
        break;

   
    ;
    case 6:
    
        console.log("Saturday");
        break;

   
    ;
    case 7:
    
        console.log("Sunday");
        break;
   

    default:
        console.log("Error");
        break;
}


// • Task 5: Write a program that uses a switch case to assign a grade ('A', C', D', F) based on a score and log the grade to the console.

const marks = 30;

switch (true) {
    case marks >= 90:
        console.log("A");
        break;
    
    case marks >= 80:
        console.log("B");
        break;

    case marks >= 70:
        console.log("C");
        break;

    case marks >= 60:
        console.log("D");
        break;

    case marks >= 40:
        console.log("E");
        break;

    case marks <= 40:
        console.log("F");
        break;

    default:
        console.log("Error");
        break;
}


