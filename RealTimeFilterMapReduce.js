const orders2 = [ 
    {
      userid : 1,
      amount : 10
    },
    {
       userid : 1,
      amount : 15
    },
    {
        userid : 2,
        amount : 5
    },
    {
        userid : 2,
        amount : 100
    }];
const result1 = orders2.filter(order => order.userid == 1)
     .map(order => order.amount)
     .reduce((a,b) => a+b);
console.log(result1);