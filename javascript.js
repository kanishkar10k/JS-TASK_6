var arr=[1,2,3,4,5];
var arr2=[1,2,3,4,5];
var arr5=[1,23,14,3,12,12,12];
function equal(){
    let flag=true;
    document.write(arr+"<br>");
    document.write(arr2+"<br>");
    if(arr.length===arr2.length){
    for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr2[i]){
        flag=false;
        break;
    }}}
    else{
        flag=false;
    }
    if(flag){
        document.write("Equal");
    }
    else{
        document.write("Not Equal");
    }
}

function arrofarr(){
    document.write(arr+"<br>");
    document.write(arr2+"<br>");
    let arr3=[arr,arr2];
    document.write("Array of Arrays:[");
    for(let i of arr3){
        document.write("[");
        for(let j of i){
    document.write(j+' ');
        }
        document.write("]");
    }
    document.write("]");
}
function matcharr(){
    let arr6=[]
    for(let i of arr){
        for(let j of arr5){
            if(i===j){
                arr6.push(j);
                delete arr[j];
            }
        }
    }
    document.write(arr6);
}
function create(len){
    let val=prompt("Enter array Elements");
    let arr4=val.split(" ");
    document.write("Given Array Length:"+len+"<br>");
    for(let i=0;i<len;i++){
        document.write(arr4[i]+" ");
    }
}
function rotate(x){
    document.write(arr+'<br>');
    document.write("No of Rotations:"+x+'<br>');
    let rot=x%arr.length;
    for(let j=0;j<rot;j++){
    let safe=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr[(arr.length)-1]=safe;
}
    document.write("After rotation:"+arr);
}