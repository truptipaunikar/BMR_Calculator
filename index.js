function calculate(){
  
    let age = document.getElementById("age").value
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let gender = document.querySelector("input[name='gender']:checked").value
   if(age>15){
      if(gender=="male"){
          document.getElementById('output').innerHTML=(10*weight+6.25*height)-(5*age)+5
      }
      else{
          document.getElementById('output').innerHTML=(10*weight+6.25*height)-(5*age)-161
      }
   }
   else{
    alert("bmr is not applicable less than age 15")
   }
document.getElementById("age").value=""
document.getElementById("height").value=""
document.getElementById("weight").value=""
document.querySelector("input[name='gender']:checked").checked = false
}

function refresh(){
    window.location.reload('refresh')
}





