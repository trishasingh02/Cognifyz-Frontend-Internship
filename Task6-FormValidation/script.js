function validateForm(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    if(name === "" || email === ""){

        document.getElementById("message")
        .innerHTML =
        "❌ Please fill all fields";

        return false;
    }

    document.getElementById("message")
    .innerHTML =
    "✅ Registration Successful";

    return false;
}
