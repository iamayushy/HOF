let str = ['amama', 'mica', 'amara', 'mizu', 'apppa'];
console.log(str.filter((i) => {
    if(i[0] === 'a' && i[str.length - 1] === 'a'){
        return i;
    }
}));