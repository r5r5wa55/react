

//*  ต.ย  1.   การส่งข้อมูลเป็น array ไป เพื้อหาผลรวมของตัวเลข  2 ตัว
 

plus_number=(x,y)=>{
    return x,y
}





//*  ต.ย 2 หาผลรวมของตัวเลข 3 ตัว ก็ต้องสร้างใหม่ และเพื่มจำนวน

plus_number=(x,y,z)=>{
    return x,y,z
}
// console.log(plus_number(20,10))  //*ไม่ได้เนืองจาก ฟั่งชั่นนี้จำเป็นต้องใส่ตัวเลข 3 ตัว ไม่งั้นจะไม่ทำงาน
// console.log(plus_number(20,10,50))  


//*  ต.ย 3 หาผลรวมของตัวเลข หลายตัวได้ โดยการส่งข้อมูลเป็น array แล้วนำมาลูปเพื่อหาค่า


plus_number=(...number_test)=>{             //* ส่ง number_test ไปในรูปแบบ array

    let test = 0                                //* กำหนดตัวแปล test ให้เท่ากับ 0 เพื่อนำไป + กับค่าใน array และ return ค่ากลับออกมา
    for(let test_n of number_test) test += test_n       //*for of ลูปค่า แล้วนำ 0 มา+ช ค่าของตัวแปล test ก็จะเท่ากับ  test = test+test_n 
    return test                                 //* แล้วก็ return ค่า test ที่ทำการตำนวนแล้วกลับออกไป
    
}
console.log(plus_number(20,100,50))  