




const customer = "วีระพล"
const lastname = "จาระนัย"
const number = "06-445-10578"


//สามารถประกาศตัวแปรแค่ตัวเดียว โดยใช้ชื่อเหมือนกันไปเลย หรือจะอ้างอิงโดยการเปลี่ยนชื่อใหม่ก็ได้

const custer = {
    customername : customer,
    lastname,
    number,
    showdata(){
        console.log(custer)
    }
}




console.log(custer)

//สามารถเข้าถึง .showdata ได้ด้วยการใช้ จุด ปิดด้วย ()
// custer.showdata();
