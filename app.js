function splitName() {
    let full = document.getElementById("fullName").value.trim();

    let parts = full.split(" ");

    if (parts.length < 3) {
        
        return;
    }

 
    document.getElementById("name").innerText = parts[0];


    document.getElementById("surname").innerText = parts[1];


    let fatherName = parts.slice(2).join(" ");
    document.getElementById("father").innerText = fatherName;
}
