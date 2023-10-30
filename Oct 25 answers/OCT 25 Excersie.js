let Numberone = 5
let Numbertwo = 8
let Numberthree = 9

let meanvalue=(Numberone+Numbertwo+Numberthree)/3
console.log(meanvalue)

//Exercise ii

switch(4){
    case 1:
        console.log("monday")
        break;
        case 2:
            console.log("Tuesday")
            break;
            case 3:
                console.log("Wednesday")
                break;
                case 4:
                    console.log("Thursday")
                    break;
                    case 5:
                        console.log("Friday")
                        break;
                        case 6:
                            console.log("Saturday")
                            break;
                            case 7:
                                console.log("Sunday")
                                break;
                                default:
                                     console.log("Days of the week are just 1-7")
}

//Exercise 3
let i=0;

while(i<=10){

    let even=(i%2==0)
    console.log(even+""+i)

    i++;
}

//Exercise 4
let array={2,4,6,5,8,10,11,12,14,18,15}


for(let i=0;i<=array.length;i++){
    if(array[i]%2==0){
        console.log("even"=array[i])
    }else{
        console.log("first odd number is "+ array[i])
        break;
    }

    //Exercise 5
    let age= 89

if(age<=18){
    console.log("Is a child")
}else if(age>=19 && age<=50){
    console.log("Adult")
}else{
    console.log("senior")
}






