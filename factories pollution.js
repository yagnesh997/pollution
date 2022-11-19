A = [5, 19, 8, 1]
total = 0
for (let i = 0; i < A.length; i++) {
      total += A[i] 
    }
    let k = total
    target = total/2
    count = 0
    let z=0
    while (total>target){
        count+=1
        let x = Math.max(...A)
        total -= x/2
       let y= A.sort(function(a, b){return a - b})
        A.pop()
        A.push(x/2)
        
      }
      for (let j = 0; j < A.length; j++) {
        z += A[j] 
      }
      console.log('Our total factories pollution is '+k+
        ' Its half is '+k/2+
        ' But we can make its pollution '+total+' by giving it '+count+' filters.');