let score=prompt("enter score")
function App(score){
    if(score>25 && score<=30){
        document.write ("A")  
    }
    else{
        document.write ("")
    }
    if(score>20 && score<=25){
        document.write ("B")  
    }
    else{
        document.write ("")
    }
    if(score>15 && score<=20){
        document.write ("C")  
    }
    else{
        document.write ("")
    }
    if(score>10 && score<=15){
        document.write ("D")  
    }
    else{
        document.write ("")
    }
    if(score>5 && score<=10){
        document.write ("E")  
    }
    else{
        document.write ("")
    }
    if(score>0 && score<=5){
        document.write ("F")  
    }
    else{
        document.write ("")
    }
    
    
    
}
App(score)
// If 25 < score <= 30, then A .
// If 20 < score <= 25, then B.
// If 15 < score <= 20, then C.
// If 10< score <= 15, then D.
// If 5 < score <=10, then E.
// If 0<= score <=5 , then F