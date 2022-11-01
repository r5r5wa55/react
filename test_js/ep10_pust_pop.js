




//* pust pop shift unshift

const data = [10,20,30]
data.push(...[500,1000,1222])   //* เพิ่ม array เข้าไป  Push
console.log(data)

data.pop()                      //* pop เอาตัวหลังสุดออก 
console.log(data) 

data.shift()                    //* shift ลบด้านหน้าออกไป
console.log(data)

data.unshift(50)                 //* unshift เพิ่มเข้าไปด้านหน้า
console.log(data)


