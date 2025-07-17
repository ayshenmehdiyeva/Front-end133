let fullnameInput = document.getElementById("fullname");
let useremailInput = document.getElementById("useremail");
let passwordInput = document.getElementById("password");
let addbtn = document.getElementById("addbtn");
let changebtn = document.getElementById("changebtn");
let tbody = document.querySelector("tbody");


let users = [];
let id = 0;
let globalId = 0;

addbtn.addEventListener("click", function (e) {
    e.preventDefault()
    users.push({
        id: ++id,
        fullname: fullnameInput.value,
        useremail: useremail.value,
        password: passwordInput.value
    });
    render()
    fullnameInput.value = "";
    useremail.value = "";
    passwordInput.value = "";

})


changebtn.addEventListener("click", function () {
    addbtn.classList.remove("d-none");
    changebtn.classList.add("d-none");
    users.forEach(user => {
        if (user.id === globalId){
            user.fullname = fullnameInput.value;
            user.useremail = useremailInput.value;
            user.password = passwordInput.value;
        }
    })
    render()
})



function Update(param) {
    globalId = param;
    addbtn.classList.add("d-none");
    changebtn.classList.remove("d-none");
    const { fullname, useremail, password } = users.find(user => user.id === param);
        fullnameInput.value = fullname
        useremailInput.value = useremail
        passwordInput.value = password

}

function Delete(param) {
    users = users.filter(user => user.id !== param)
    render()
}

function render() {
    tbody.innerHTML = "";
    users.forEach(user => {
        tbody.innerHTML += `<tr>
                <td scope="row">${user.id}</td>
                <td>${user.fullname}</td>
                <td>${user.useremail}</td>
                <td>
                    <button class="btn btn-danger" onclick="Delete(${user.id})" >delete</button>
                    <button class="btn btn-secondary" onclick="Update(${user.id})">update</button>
                </td>
            </tr>`
    })
}

