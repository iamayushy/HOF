let ncube = [2, 3, 6, 9, 12, 16, 18, 29];
let cubeSum = 0;
ncube.filter((i) =>{
    if(i % 3 === 0){
        cubeSum += i * i * i;
    }
})
console.log(cubeSum);