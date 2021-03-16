//import functionToTest from '../UTIL/functionToTest'
const functionToTest = require('../UTIL/functionToTest');


// working with async data
test("User fetched name should be lean granham", ()=>{
    expect.assertions(1)
   return  functionToTest.fetchUser().then(data=>{
       expect(data.name).toEqual('Leanne Graham')
   })

   
})


//promise
test("User fetched name should be lean granham async", async ()=>{
    expect.assertions(1)
    const data = await functionToTest.fetchUser();
    expect(data.name).toEqual('Leanne Graham')

   
})