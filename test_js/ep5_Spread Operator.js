



///1
// การนำข้อมูลใน array มารวมกัน โดยที่ไม่ใช้การยัน array เข้าไปอีกชุด
// โดย ถ้า const moarry = [wearry,4,5,6,] จะได้ผลลัพ  [ 4, 5, 6, [ 1, 2, 3 ] ] (การกระจายสมาชิก)
// แต่     const moarry = [...wearry,4,5,6,]  จะได้   [ 1, 2, 3, 4, 5, 6 ]
// เรียกว่า spread operator
 
const wearry = [1,2,3]
const moarry = [...wearry,4,5,6,]


// console.log(moarry);



///2

// .push() คำสั่งที่เป็นการยัด array เข้าไป

 
const wearry1 = [1,2,3]
const moarry1 = [4,5,6,]

wearry1.push(...moarry1)

console.log(wearry1);