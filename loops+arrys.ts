
//Loops
for(let i=0;i<5;i++){
    console.log(i);
}

let reviews:number[]=[5,3,2,5,6,8,9];
for(let i=0;i<reviews.length;i++){
    console.log(reviews[i]);
}

//Arrays
let sports:string[]=["Golf","Cricket","Football"];
for(let i=0;i<sports.length;i++){
    console.log(sports[i]);
}

sports.push("Tennis");
sports.pop();

for( let tempsport of sports){
    console.log(tempsport);
}