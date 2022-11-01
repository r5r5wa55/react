
//*array map นำมาเปลี่ยนแปลงต่าแล้วสร้างเป็น array ก่อนใหม่ออกมาใช้งาน

const number = [10,20,30,40,]

// const result = number.map(e=>{
//     const a = e*2
//     return a

// })

//*หรือเขียนแบบนี้


const result = number.map(e=>e*2)
console.log(result)



//*ใช้กับตัวหนังสือ


const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากา","หมอก",]

const resultdata = data.map((e,a)=>{
    return `วันที่ ${a+1}. สภาพอากาศ = ${e}`
})
console.log(resultdata)


//* array ที่เป็น obj

const data_obj = [
    {data:"01/06/2564",weather:"แดดร้อน",temp:"27"},
    {data:"02/06/2564",weather:"ฝนตก",temp:"23"},
    {data:"03/06/2564",weather:"หมอก",temp:"18"}
]

const  result_obj = data_obj.map(e=>e.weather)
console.log(result_obj)
