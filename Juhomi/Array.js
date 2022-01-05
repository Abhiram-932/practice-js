// Use the each method of Array to iterate over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and print out each value.

// Map
let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let NewArray =arr.map(item=>item);
console.log(NewArray);

//filter
let str =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let New =str.filter(item=>item%2==0);
console.log(New);

//forEach
let array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(item=>{
    console.log(item)
})

//how many repeated letters 
let letters=["a","b","c","d","e","f","g","h","i","j","j","k","k"]
let count=[]
letters.forEach(item=>{
    if(count[item]){
        count[item]++;
    }
    else{
        count[item]=1
    }
})
console.log(count)

//remove Duplicates
let letter=["abhi","badri","charan","dinesh","dinesh"]
const final=letter.filter((value,index)=>{
    return letter.indexOf(value)===index;
})
console.log(final)

//slice
let menu=["idly","dosa","bondam","poori"]
let order=menu.slice(1,3)
console.log(order)

//splice
let num=[1,2,3,4,5]
//const deleted=num.splice(2,3)
// const deleted=num.splice(2,3,6,7)
const deleted=num.splice(2,0,6,7,8)
console.log(num)

//sort
// let arry=["idly","dosa","bondam","poori"]
// arry.sort()
// console.log(arry)

let nummm=[1,2,3,4,5,8,6,]
function correct(a,b){
    return a-b
}
nummm.sort(correct)
console.log(nummm)

//fill
let filll=[1,2,3,4,5]
const filled=filll.fill(0)
console.log(filled)

//join
let arryyy=["idly","dosa","bondam","poori"]
let newarr=arryyy.join("-")
console.log(newarr)

//concat
let a=[1,2,3]
let b=[5,4,6,7,8,9]
let c=a.concat(b)
let d=a.concat(1,2)
let e=a.concat(1,2,b)
console.log(c)
console.log(d)
console.log(e)

//reverse
let rev=[1,2,3,5]
 let revrsd=rev.reverse()
 console.log(revrsd)

 


