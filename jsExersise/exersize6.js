/* 
Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */
function isVowels(word){
    var sum = 0;
    
    for(var i =0; i < word.length; i++) {
        if(
            word[i]==='a'|| 
            word[i]==='e'||
            word[i]==='i'||
            word[i]==='o'||
            word[i]==='A'||
            word[i]==='E'||
            word[i]==='I'|| 
            word[i]==='O'){
                
        sum = sum + 1;
       // console.log(sum);
        }
    }
        
        return sum;
      
    }

    var a = 'popokatepetl';
  console.log(isVowels(a));
/*Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */
function combine(arr1, arr2){
var combo = [];
var j ;
    for (var i =0, j= 0 ; i< arr1.length; i++ , j++){
         combo[j] = arr1[i];
         j++;
          combo[j]=arr2[i];
         
          
    }
    return combo;
}
var a =['a','b','c'];
var b =[1,2,3];
console.log(combine(a,b));






 

/* Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/
function rotate(list, k){
    var newList=[];
    var j = 0;
    for (var i = 0; i< list.length; i ++ ){
        if(i > k -1){
            newList[j] = list[i];
            j++;
            //console.log(newList);
        } 
    }
       
        for(i = 0; i <k ;i ++ ){
            newList[j] = list[i];
            j++;
        }
            
        return newList;
}

var list = [1,2,3,4,5,6];
 var k =2;
 console.log(rotate(list, k));
 




 
/*
Write a function that takes a number and returns array of its digits
 */
function numToArr(numbers){
    var convert = numbers.toString();
    var arrayOfNum =[];
    for(var i = 0; i< convert.length; i++){
     arrayOfNum[i] = parseInt(convert[i]);
    }
    return arrayOfNum;
}
var num = 53459458298;
console.log(numToArr(num));
  
/* Write a program that prints a multiplication table for numbers up to 12.
*/
function multiTable(num){
    var res = [];
    var z = 0;
    for(var i = 1; i< num; i++){
        for(var j =1; j< num; j++){
            
           res= i * j ;
           
           
        }
    }
    return res;
}
var num = 12;
console.log(multiTable(num));

 



/*
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/
function convertT(temp){
    var celsius ;
    if( celsius == true){
        temp = (temp * 9/5) + 32;
    }
}

 
/*
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/

function maxEl(someArr){
    var max = someArr[0];
     
    for( var i = 0; i < someArr.length; i ++){
        if (max< someArr[i] &&  typeof someArr[i]==='number'){
            max = someArr[i];
            console.log(max);
            
        }
    }
    return max;
}
 var a =[ 1,555,38,-33,'bla', 'bla' ];
 console.log(maxEl(a));
 
/*
Write a function to find the maximum and minimum elements. Function returns an array.
 */
 function maxMin(someArr){
     var min = someArr[0] ;
     var max = someArr[0] ;
     var newArr = [];
     var j = 0;
     for( var i = 0; i< someArr.length; i++){
         if(min > someArr[i]  ){
             min = someArr[i];
             
        }
        if( max < someArr[i]){
            max = someArr[i];
        }
    }
    
    newArr[j]=max;
    newArr[j+1]=min;
    return newArr; 
}
var a= [1,23,543,-4,];
console.log(maxMin(a));
/*
Write a function to find the median element of array.
*/

function numMedian(someArr){
    var medianEl ;
    var median = someArr.length -1 ;
        if(median %2 ===0){
            median = median /2;
        }
        else{
            median =  (median- 1)/2;
        }
    medianEl= 'median result is '+ someArr[median]
    return medianEl;
}
var a =[ 1,555,38,-33,'bla', 'bla' ];
console.log(numMedian(a));

 
/*
Write a function to find the element that occurs most frequently.
*/
function freq(someArr){
    var elFreq = 0;
    for(var i = 0 ; i< someArr.length; i++){
        for( var j = 0; j < someArr.length; j++){
            if(someArr[i] === someArr[j] )
         elFreq = someArr[i]
         
        }

        
    }
}



 
/*
Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
/*

 
/*
Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
/*