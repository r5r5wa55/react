//* การกำหนดค่าที่อยู่ภายใน array หรือ obj ให้กับตัวแปร โดยการจับคู่ตัวแปรกับค่าใน array 

//*ต.ย. 1 แบบทั่วไป

const test_Arr = [1,2,3,4]

const a = test_Arr[0]
const b = test_Arr[1]

// console.log(b)
//*ต.ย. 2 แบบ Destructuring  

const test_Arr1 = [1,2,3,4,5]

const [one,two,three,four,five] = test_Arr1
const [,,,four4,five5] = test_Arr1                  //* สามารถนำแค่ตัวเลขที่จะใช้ได้ โดยการใช้ , 

// console.log(one)


//*ต.ย. 3 


const product = {
    productName : "คอมพิวเตอร์",
    price : 1000,
    stock : 10
} 
                                                   
const {productName:we1,priceP,} = product             // ******  ถ้า [] = array  {} obj  
console.log(we1)                                      //*productName:we1  ข้างหน้า : จะเป็นชื่อตัวแปลที่ส่งมา  หลัง : จะเป็นชื่อที่เอาไว้เก็บตัวแปล  

