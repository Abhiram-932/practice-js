let weight=prompt("Enter weight")
let height=prompt("enter height")
BMI = [weight / (height  * height )] * 720
document.write (BMI +"<br>") 

function App(){
    if(BMI>19 && BMI<25){
        document.write ("true")  
    }
    else{
        document.write ("false")
    }
}
App()