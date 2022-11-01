


//** ต.ย */
getDataCustomer=(customername,customeraddress)=>{
    const address =  `ชือลูกค้า : ${customername}
    ที่อยู่ : ${customeraddress}`
    return address

}

// console.log(getDataCustomer("วีระพล","สมุทรสาคร"))

//** ในกรณีที่ ไม่ได้ใส่ข้อมูลมาครบ คือใส่มาค่าเดียว ก็ต้องมา ใช้ if ในการเช็ค */

getDataCustomer=(customername,customeraddress)=>{
    if(!customeraddress){
        customeraddress = "บางนา"

    }
    const address =  `ชือลูกค้า : ${customername}
    ที่อยู่ : ${customeraddress}`
    return address

}
console.log(getDataCustomer("วีระพล"))


//** แต่เราสามารถเปลี่ยนให้เป็นแบบ Default Parameter ได้ โดยไม่ต้องใช้ if*/


getDataCustomer=(customername,customeraddress="มีนบุรี")=>{

    const address =  `ชือลูกค้า : ${customername}
    ที่อยู่ : ${customeraddress}`
    return address

}
console.log(getDataCustomer("วีระพล"))