const n = 7
const house_num=[0,1,4,1,0,5,1,6]
let right=0
let left=0
let arrayL=[]
let arrayR=[]
let mustArray=[]
let avg=Math.floor(house_num.length/2) //?
for (const value of house_num) {
    arrayR.push(left++)
    if (value===0)
    {
        for (let index = 0; index <right; index++) {
             arrayR.push(right+index)
        }
        for (let index = left; index >0; index--) {
            arrayL.push(index); //?
        }
         mustArray=[...mustArray,...arrayL,...arrayR,]
         left=0;
         right=0;
    }
        right++ //?
        left++
    }


    console.log(mustArray)


