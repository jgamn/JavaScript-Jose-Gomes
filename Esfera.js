const r= 6
const pi= 3.14159
let Volume= 0
function calVolume(){
 Volume= (4/3) * pi * r
 let formatoVol= Volume.toFixed(3)
 console.log('O volume é = ', formatoVol)
}
calVolume()
