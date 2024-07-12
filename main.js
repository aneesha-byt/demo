document.getElementById("questionForm").addEventListener("change", handleChange);

function handleChange(){
   const form = document.getElementById('questionForm');
   const selectedCar = form.querySelector('[name="car"]:checked').value;
   var resultTitle = document.getElementById("result");
   
   switch(selectedCar) {
      case "alto":
         resultTitle.innerHTML="alto";
         document.getElementById('pic').src = "./alto.webp"
      break;

      case "baleno":
        resultTitle.innerHTML = "baleno";
        document.getElementById('pic').src = "Baleno.jpeg"
      break;

      case "swift":
         resultTitle.innerHTML = "swift";
         document.getElementById('pic').src = "swift.jpeg"
      break;

   }

    
    
    
   
    

    
    
    
    
    





   

}