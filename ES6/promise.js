const fetchData = new Promise((resolve, reject) => {
    let success = true; 
    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error: Unable to fetch data.");
        }
    }, 1000);
}); 


fetchData
    .then(response => console.log(response)) 
    .catch(error => console.log(error)); 