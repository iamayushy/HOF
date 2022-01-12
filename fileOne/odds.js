let names = ['akasha', 'khushi', 'ayush', 'akhilesh', 'vishal', 'maria', 'masai', 'abhinav'];
let sum = 0;
let cal = names.filter((i) => 
    {if(i.length % 2 !== 0) 
        
        sum += i.length;
    })
console.log(sum);
