let wage=prompt("Enter wage")
let hour=prompt("Enter hours")
function App(){
    let overtimewage=1.5*(hour-40)
    let extra=hour*1.5

    if(hour>40){
        document.write (extra +"<br>")
        document.write (overtimewage)
    }
    
    if(wage>8 && hour<60){
        document.write ("Perfect")

    }
    else{
        document.write ("<br>"+"Error")
    }

  
    }
    App()

    //An employee gets paid (hours worked) × (base pay), for each hour up to 40 hours.

    //For every hour over 40, they get overtime = (base pay) × 1.5.

// The base pay must not be less than the minimum wage ($8.00 an hour). If it is, print an error. 
// If the number of hours is greater than 60, print an error message. 