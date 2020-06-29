let obj = {a: 'Toby', b: 'Rob', c: 'Dave'}
let arr = []

for (let key in obj) {
  let smallArr = []
  smallArr.push(key)
  smallArr.push(obj[key])
  arr.push(smallArr)
}



console.log(arr)
