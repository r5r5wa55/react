

//* การขัดกรองสมาชิกใน array ที่ผ่านเงิ่อนไขที่เรากำหนดขึ้นมา

const data = [10,20,30,40]

const result = data.filter(e=>{
    return e>20
})

console.log(result)








const data_text = [
    {name:"วี",salary:50000,department:"โปรแกรมเมอร์"},
    {name:"โมโม่",salary:30000,department:"เลขา"},
    {name:"เอส",salary:40000,department:"โปรแกรมเมอร์"}]

// const result_text = data_text.filter(e=>{
//     e.salary>35000
//     return e.salary
// })

//*ลดรูป

const result_text = data_text.filter(e=>e.salary>35000)

console.log(result_text)