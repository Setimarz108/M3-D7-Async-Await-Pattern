// const name = new URLSearchParams(window.location.search).get("")
// console.log("RESOURCE ID IS: ", artistId)

const getInput = () => {
    let input = document.getElementById('exampleFormControlInput1')
 let word = input.value
console.log(word)
}

getInput()

// let filteredObject = []

//    filteredObject = userData.filter((Data) => 
//       userData.name.toLowerCase().includes(value.toLowerCase()))

   
function search(event) {

        const dropdown = document.getElementsByClassName("dropDown").innerText
        console.log(dropdown)

    if (event.length < 3) {

        const Query = event.target.value
        console.log(Query)
      filteredList = userData;
      console.log(userData)
      return;
    }

    filteredUsers = userData.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filteredUsers);
    
  }

function displayUsers(userData) {
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = ""
        
    console.log(userData)
        userData.forEach((userData) => {
          const trnew = document.createElement("tr");

          trnew.innerHTML = `
          <th scope="row">${userData.id}</th>
          <td>${userData.name}</td>
          <td>${userData.username}</td>
          <td>${userData.email}</td> ` ;
          tableBody.appendChild(trnew);
        });
  }


const getData = async () => {

   try{
       const response = await fetch("https://jsonplaceholder.typicode.com/users")

       if (response.ok){
           
        const userDatas = await response.json()
        console.log(userDatas)
        

         displayUsers(userDatas)
        //  console.log(displayUsers()) error
       }
    //    search(userData)
    //    console.log(search(userData));

        
        
   } 



   catch (err) {

    console.log(err)
   }
}










window.onload = async () => {
   
    await getData()
  };