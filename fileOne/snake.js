let arr = ['simran', 'raj', 'papa'];
let skc = arr.reduce((first, last) => {
    return first +"_"+last;
})
console.log(skc);