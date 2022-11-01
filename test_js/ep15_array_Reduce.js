


//*Array Reduce  การนำสามาชิกใน  array มาดำเนินการและก็จะได้ค่า 1 ค่ากลับไป




const data = [10,20,30,40]

const reduceData  = data.reduce((value,e)=>{
    const total = e+value
    return total
},0)    //*0=ค่าเริ่มต้น

//* array.reduce((ค่าที่ถูกประมวลผล,e)=>,ค่าเริ่มต้น)




console.log(reduceData)

