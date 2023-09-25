
// program 1
let q = [11,22,33,44,55,-89,-78,-90]
let w = []
let e = []

for(let i=0 ; i <= q.length ; i++){
    if(q[i] > 0){
        w.push(q[i])
    }
    else if(q[i] < 0){
        e.push(q[i])

    }
}
console.log(w)
console.log(e)


// program 2
let r = [1991,1992,1993,1994,1995,1996]
let age = []
for (let i = 0 ; i <= r.length - 1 ; i++){
    let y = 2023 - r[i]
    age.push(y)
}
console.log(age)

// program 3 
let o = [11,22,33]
total = 0
for (let i =0 ; i < o.length ; i++){
    total = total + o[i]
}
console.log(total)


// program 4
let u = ['mumbai','pune','delhi']
for(let i = 0 ; i <= u.length - 1 ; i++){
    console.log("welcome to","" + u[i])
}

