/* Write a program that checks if a given  
element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/
var e=9;
var a =[5, -4.2, 3, 7];
var i ;
var itis = '';
for (i =0;i<a.length; i++ ){
    if( e === a[i]){
      var itis = 'yes';
    }
}
if( itis !== 'yes' ){
    itis = 'no'
}
console.log(itis)



/* Write a program that multiplies every positive
 element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
 */
var a =[-3, 11, 5, 3.4, -8];
var i ;
var duble =[];
for ( i= 0; i<a.length;i++){
    if(a[i]> 0){
        
        a[i] = a[i]*2;
         
         
    }
    else{
        a[i]=a[i];
    }
}
console.log(a)

/* Write a program that finds the minimum
 of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

 */
var a =[4, 2, 2, -1, 6];
var min = a[0];
var minIx =0;
var i;
for (i=0; i<a.length; i++){
    if(min >a[i]){
    min =a[i];
    minIx=i;
    }
}
console.log(min,minIx)


/* Write a program that finds the first
 element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
 */
var a =[4, 2, 2, -1, 6];
var min = a[0];
var minIx =0;
var i;


/* Write a program that calculates the 
sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
 */
var a= [3, 11, -5, -3, 2];
var i;
var sum =0;
for(i =0; i<a.length; i++){
    if ( a[i]>0){
        sum += a[i];
    }
}
console.log(sum)

Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
/* Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
 */

/* Write a program that intertwines two arrays.
 You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
 */
var a= [4, 5, 6, 2];
var b=[3, 8, 11, 9];
var i;
var j =0;
var z=0;
var mix =[];
for(i=0;i<a.length;i++){
    mix[z]=a[i];
    console.log(mix);
    mix[z+1]=b[j];
    j++;
    console.log(mix);
    
    
     
}
console.log(mix)
/* 
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
 */
var a= [4, 5, 6, 2];
var b=[3, 8, 11, 9];
var i;
var j;
var bar=[];
for(i=0;i<a.length; i++){
    bar[i]=a[i];
}
    for(j= 0; j<b.length; j++){
bar[i]=b[j];
i++;
    }


console.log(bar)

/* Write a program that deletes a given
 element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
 */
var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var i;
var j=0;
var newa=[];
for (i =0; i<a.length; i++){
    if(a[i]!==e){
        newa[j] = a[i] ;
        j++
    }
}
console.log(newa)


/* Write a program that inserts a given
 element e on the given position p in the array a.
  If the value of the position is greater than the
   array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */ 
var e = 78;
 var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
var newa=[];
var j =0;
for (i =0 ; i<a.length;i++){
    if (i !== p){
        newa[j] = a[i];
    j++;
       
    }
if else{
    newa[j] = a[i];
    j++;
    a.length = a.length+1;
        console.log(a.length);
        newa[j]=e;
        newa[j+1]= a[i];
        
console.log(newa[j]);
console.log(a[i]+1);


    
}
}
console.log(newa)