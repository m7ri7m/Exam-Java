 let newlist = []
 async function getdata(){
    let response = await fetch(' https://www.themealdb.com/api/json/v1/1/search.php?f=a') 
 .catch(error => console.error(error))
 let data = await response.json()
display()
 }
 getdata()
 function display(){
    let temp = ""
    newlist.forEach((element) => {
        temp+=`<div class="container">
  <input class="form-control" type="text" placeholder="Search by name">
  <input class="form-control" type="text" placeholder="Search by first letter">
</div>`
    })
 
 }
