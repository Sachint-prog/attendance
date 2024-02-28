import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js'
import { getDatabase, ref, onValue} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js'

const appSetting = {
    databaseURL: "https://attendance-system-c347e-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const users_in_db = ref(database, "users")

let success = "no";

let form = document.querySelector("#container")
let user_name = document.querySelector("#Username")
let password = document.querySelector("#password")
let submit_button = document.querySelector(".btn")

submit_button.addEventListener("click", (event) => {
    event.preventDefault();
    get_data_form_db()
    // if (isFormValid()) {
    //     form.submit()
    // }
    // else{
    //     event.preventDefault();
    // }
})

// user_name.addEventListener("change", (event) => {
//     username_validation()
    
// })

// password.addEventListener("change", (event) => {
//     password_validation()
    
// })


function isFormValid(){
    let input_box = document.querySelectorAll(".input_box")
    let result = true
    input_box.forEach((box) => {
        if (box.classList.contains("error")) {
            result = false
        }
    });
    return result
}

function setError(element, message){
    const parent = element.parentElement;
    if (parent.classList.contains("success")) {
        parent.classList.remove("success")
    }
    parent.classList.add("error")
    const para = parent.querySelector("p")
    para.textContent = message
}

function setSuccess(element, message) {
    const parent = element.parentElement;
    if (parent.classList.contains("error")) {
        parent.classList.remove("error")
    }
    parent.classList.add("success")
    const para = parent.querySelector("p")
    para.textContent = message
}

function get_data_form_db(){
    if(success == "no"){
        onValue(users_in_db, function(snapshort) {
            let users_array = Object.values(snapshort.val())
            console.log(users_array)
            let user_name_value = user_name.value
            let password_value = password.value


            for (let i = 0; i < users_array.length; i++) {
                let current_user = users_array[i]
                console.log(current_user)
                console.log(user_name_value, current_user.userName)
                console.log(password_value, current_user.password)
                
                if(success == "no"){
                    if(user_name_value == current_user.userName && password_value == current_user.password){
                        if(current_user.role == "hod"){
                            let form = document.querySelector("form")
                            form.setAttribute("action", "hod_index.html")
                            form.submit()
                            
                            
                            // setSuccess(user_name, "success")
                            // setSuccess(password, "success")
                            // console.log("hod")
                        }else if(current_user.role == "faculty"){
                            let form = document.querySelector("form")
                            form.setAttribute("action", "faculty_index.html")
                            form.submit()

                            // let original_url = window.location.origin
                            // window.location.href = original_url + "/html/faculty_index.html"
                            // setSuccess(user_name, "success")
                            // setSuccess(password, "success")
                            // console.log("faculty")
                        }

                        success = "yes"
                    }
                    else{
                        setError(user_name, "invalid username")
                        setError(password, "invalid password")
                    }
                }
            }
        })
    }
}