const $registerForm = document.querySelector("#register-form");
const $inputs = $registerForm.querySelectorAll("input"); 

const handleRegister = (e) => {
    e.preventDefault();

    try {
      
        const values = Array.from($inputs).map(input => input.value);
        const user = {
            name: values[0],
            email: values[1],
            password: values[2],
            image: values[3] 
        };

       
        fetch("https://fakestoreapi.com/users", {
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

$registerForm.addEventListener("submit", handleRegister);

