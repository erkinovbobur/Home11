const $registerForm = document.querySelector("#register-form");
const $inputs = $registerForm.querySelectorAll("input"); 

const handleUserLogin = (e) => {
    e.preventDefault();

    try {
      
        const values = Array.from($inputs).map(input => input.value);
        const user = {
           
            email: values[0],
            password: values[1],
           
        };

       
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
               
                location.replace(""); 
            } else {
                console.log("User registration failed."); 
            }
        })
        .catch(error => {
            console.error("Error:", error); 
        });

    } catch (error) {
        console.error("Error:", error); 
    }
};

$registerForm.addEventListener("submit", handleUserLogin);

