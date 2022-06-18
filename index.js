// Add your code here
const formData ={
  name:"Steve",
email:"steve@steve.com",


  };

  const submitData=(name,email)=>{
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept:"application/json"
  
  },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      document.body.innerHTML=data['id'];
    
    }
    
    )
    .catch(function (error) {
    alert ("Unauthorized Access");
     console.log("Unauthorized Access");
     // Document.body.innerHTML='error'
      //return 'Unauthorized Access'
    });
  }