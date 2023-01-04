let values1 = ['Apple', 1 , false];
let values2 = ['Fiers' , 2 , true];
let values3 = ['Mars' , 9 , 'Apple'];
const size = 3;

let answer 

function compare(){
    let answer = "";
    for (let index = 0 ; index < size ; index++){
        for (let i = 0 ; i < size ; i++){
            if (values1[index] == values3[i]){
                answer = answer + values1[index] + " ";
            }
            if (values1[index] == values2[i]) {
                answer = answer + values1[index] + " ";
            }
        }
    }
    console.log(answer);
}

compare();