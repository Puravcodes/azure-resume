window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';   
const functionApi = 'https://azureresumecounter1.azurewebsites.net/api/GetResumeCounter?code=-_wMzADGA_fYS6OZ-URPHPDW9FFpjUVjhvtORDm5Wi4-AzFuqMjjew%3D%3D';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}
