// map() , filter() , reduce() , forEach(), find() , findIndex() , every() , some()

// map
let q = [1999,1998,1997,1995,1993]
q.map(function(el){
    console.log(2023 - el)
})

// filter

let w = [11,-50,-90,-87,22,65]
 let e = w.filter(function(el){
   return el < 0
})
console.log(e)


// reduce 
let r = [11,22,33,44,55]
let t = r.reduce(function(acc,el){
    return acc + el
},0)
console.log(t)


// forEach

let y = ['pune','mumbai','delhi']
y.forEach(function(el){
    console.log('welcome to',' ' + el)
})

// find (boolean value)
let u = [100,900,800,50,20,97,88]
u.find(function(el){
    console.log(el > 500)
})


// findIndex
let i = u.findIndex(function(el){
    return el > 20 && el < 100
})
console.log(i)
console.log("----------------------------")

// every (even if one statement is false it return false value)
let o = [50,55,67,89,90,89]
let p = o.every(function(el){
    return el > 55
})
console.log(p)
console.log("----------------------------")


// some 
let a = o.some(function(el){
    return el > 55
})
console.log(a)
