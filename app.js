
const getData = async () => {

   try{
       const response = await fetch("https://jsonplaceholder.typicode.com/users")

       if (response.ok){
           
        const Object = await response.json()
        console.log(Object)
       }
   }

   catch (err) {

    console.log(err)
   }
}

getData()