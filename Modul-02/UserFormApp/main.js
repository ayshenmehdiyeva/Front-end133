let fullnameInput = document.getElementById("fullname");
let useremailInput = document.getElementById("useremail");
let passwordInput = document.getElementById("password");
let addbtn = document.getElementById("addbtn");
let changebtn = document.getElementById("changebtn");
let search = document.getElementById("search");
let getinfo = document.getElementById("getinfo");
let tbody = document.querySelector("tbody");


let localeUsers = JSON.parse(localStorage.getItem("users"))
let localID = localStorage.getItem("usersId")

let users = localeUsers ? [...localeUsers] : [];
let id = localID ;
let globalId = 0;
render(localeUsers)

addbtn.addEventListener("click", function (e) {
    e.preventDefault()
    users.push({
        id: ++id,
        fullname: fullnameInput.value,
        useremail: useremailInput.value,
        password: passwordInput.value
    });
    render(users)
    fullnameInput.value = "";
    useremailInput.value = "";
    passwordInput.value = "";
    localStorage.setItem("usersId", id)

})


changebtn.addEventListener("click", function () {
    addbtn.classList.remove("d-none");
    changebtn.classList.add("d-none");
    users.forEach(user => {
        if (user.id === globalId) {
            user.fullname = fullnameInput.value;
            user.useremail = useremailInput.value;
            user.password = passwordInput.value;
        }
    })
    render(users)
    fullnameInput.value = "";
    useremailInput.value = "";
    passwordInput.value = "";
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
    render(users)
}



search.addEventListener("keyup", function (e) {
    let filterusers = users.filter(user =>
        user.fullname.toLowerCase().includes(search.value.toLowerCase())
    );
    render(filterusers)

})


function render(param) {
    tbody.innerHTML = "";
    param?.forEach(user => {
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

    users ? localStorage.setItem("users", JSON.stringify(users)) : null;
}

