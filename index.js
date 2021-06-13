function getElm(id){
    return document.getElementById(id)
}
var arr = [];
show1.style.display = 'none';
btn1.addEventListener;
btn.onclick = function(){
    var num = document.getElementById('num').value; 
    arr.push(Number(num));
    showArr.innerHTML ="the array just entered: "+ arr;
    show.style.display ='block';  
}
//lesson 1
show1.style.display = 'none';
function countSumArr(arr){
    var sum = 0;
    for(var i= 0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
};
btn1.addEventListener('click',function(){
    show1.style.display = 'block';
    show1.innerHTML ='sum of number in arr: '+countSumArr(arr);
});
// lesson 2
show2.style.display = 'none';
function countPositiveNumber(arr){
    var count =0;
    for( var i = 0; i< arr.length; i++){
        if(arr[i] > 0){
            count ++;
        }
    }
    return count;
}
btn2.addEventListener('click',function(){
    show2.style.display = 'block';
    show2.innerHTML ='positive number in array: '+countPositiveNumber(arr);
});
//lesson 3
show3.style.display = 'none';
function  findSmallestNumber(arr){
    var min = arr[0];
    for(var i = 0; i< arr.length;i++){
        if(arr[0] > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
btn3.addEventListener('click',function(){
    show3.style.display = 'block';
    show3.innerHTML ='the smallest number in array: '+ findSmallestNumber(arr);
});
// lesson 4
show4.style.display = 'none';
function  findSmallestPositiveNumber(arr){
    var minPositive;
    for(var i = 0; i< arr.length;i++){
        if(arr[i] >0){
            minPositive= arr[i];
            break;
        }
    }
    for(var i = 0; i< arr.length;i++){
        if(arr[i] > 0  && arr[i] < arr[minPositive]){
            minPositive= arr[i];        
        }
    }
    return minPositive;

}
btn4.addEventListener('click',function(){
    show4.style.display = 'block';
    show4.innerHTML ='the smallest positive number in array: '+ findSmallestPositiveNumber(arr);
});
// lesson 5
show5.style.display = 'none';
function  findLastEvenNumber(arr){
    
    for(var i =arr.length-1; i>-1;i--){
        if(arr[i]%2 == 0){
          return arr[i];       
        }
     
    }
    return -1;
}
btn5.addEventListener('click',function(){
    show5.style.display = 'block';
    show5.innerHTML ="last even number "+ findLastEvenNumber(arr);
});
//lesson 6
show6.style.display = 'none';
var number1 = getElm('number1');

var number2 = getElm('number2');
function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

btn6.addEventListener('click',function(){
    show6.style.display = 'block';
   swap(arr, number1.value, number2.value);
    show6.innerHTML = arr;
    // console.log(number1.value,number2.value);
   
    // console.log(arr)
});
//lesson 7
show7.style.display = 'none';
 function softArr(arr){
     var currentValue;
     for(var i =0; i < arr.length;i++){
         currentValue =i;
         for(var j= i+1; j< arr.length;j++){
             if(arr[currentValue] > arr[j]){
                 currentValue = j;
             }
         }
         var temp = arr[i];
         arr[i] = arr[currentValue];
         arr[currentValue] =temp;
     }
 };
 btn7.addEventListener('click',function(){
    show7.style.display = 'block';
        softArr(arr);
     show7.innerHTML = arr;
     // console.log(number1.value,number2.value);
    
     // console.log(arr)
 });
 //lesson 8
show8.style.display = 'none';
function isPrime(n){
    if(n < 2){
        return false;
    }
    for(var i = 2; i<n;i++){
        if(n% i ===0){
            return false;
        }
    };
    return true;
};

function findTheFirstNumber(arr){
    for(var  i = 0; i<arr.length;i++){
        if(isPrime(arr[i]) ){
            return arr[i];
        }              
    }
    return  -1;
}
 btn8.addEventListener('click',function(){
    show8.style.display = 'block';
    show8.innerHTML =   findTheFirstNumber(arr);
 
   
 });
 //lesson 9
 show9.style.display = 'none';
 function findIntegerNumber(arr){
      var count = 0;
        for(var i= 0; i< arr.length;i++){
            if(arr[i]% Math.fround(arr[i])==00 ){
                count ++;
            }
        }
    return count;
 } 

btn9.addEventListener('click', function(){
    show9.style.display = 'block';
    show9.innerHTML= findIntegerNumber(arr);
})
//lesson 10
show10.style.display = 'none';
function countNumberArr(arr){
    var countNegative = 0;
    var countPositive = 0;
    for(var i = 0 ; i< arr.length; i++){
        if(arr[i] >0){
            countPositive ++;        
        }
        else{

           countNegative ++;  
        }
    }
    if(countNegative -countPositive >0){
        show10.innerHTML = 'more negative numbers: ' + ( countNegative -countPositive );
    }
    else {
        show10.innerHTML = 'more positive numbers: ' + ( countPositive - countNegative );
    }
}
btn10.addEventListener('click',function(){
    show10.style.display = 'block';
    countNumberArr(arr);
})