// const name = new URLSearchParams(window.location.search).get("")
// console.log("RESOURCE ID IS: ", artistId)

const getInput = () => {
    let input = document.getElementById('exampleFormControlInput1')
 let value = input.value
console.log(value)
}

getInput()



   let filteredObject = () => {
      userData.filter(userData => 
      userData.name.toLowerCase().includes(value.toLowerCase()))

   }




const getData = async () => {

   try{
       const response = await fetch("https://jsonplaceholder.typicode.com/users")

       if (response.ok){
           
        const userData = await response.json()
        console.log(userData)
        filteredObject(userData)
       console.log(filteredObject);
       }
   }

   catch (err) {

    console.log(err)
   }
}

getData()