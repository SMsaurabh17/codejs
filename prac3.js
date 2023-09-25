// array methods using loop and method both

let q = [1995,1996,1999,1997]
for (let i = 0 ; i < q.length ;i++){
    console.log(2023 - q[i])
}

// 1.map method
let w = q.map(function(el){
    return 2023 - el
})
console.log(w)


// 
let transactions = [11,-90,-87,-66,-65,55,99,88]
let positive = []
for(let i = 0 ; i < transactions.length ; i++){
    if(transactions[i] > 0){
        positive.push(transactions[i])
    }
}
console.log(positive)

// 2.filter
let e = transactions.filter(function(el){
    return el < 0
})
console.log(e)


// 

let r = [11,22,33,44]
let total = 0
for (let i = 0 ; i < r.length ; i++){
    total = total + r[i]
    
}
console.log(total)

// 3.reduce
let t = r.reduce(function(acc,el){
    return acc + el
},0)
console.log(t)