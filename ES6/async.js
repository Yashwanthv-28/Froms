async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
        const user = await response.json(); 
        console.log(user); 
    } catch (error) {
        console.log("Error fetching data:", error); 
    }
}

fetchUser(); 