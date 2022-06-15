// Add your code here
const submitData = {
    userName: "x",
    userEmail: "x",
  };
  

  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submitData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object).newID()
    })
    .catch(function (error) {
      alert("error due to");
      console.log(error.message);
    });