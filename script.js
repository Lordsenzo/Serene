// Get the container element
// let lnkContainer = document.getElementsByClassName("first")
// Get all links with class lnk
// var lnks = document.getElementsByClassName("lnk")

// for (var i = 0; i < lnks.length; i++){
//     lnks[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active")
//         current[i].classList = current[i].classList.replace(" active", "")
//         this.classList += " active"
//         if(current.length > 0){
//             current[0].className = current[0].className.replace(" active", "")
//         }
//         this.className += " active"
//     })
// }
// for(link of lnks){
//     link.addEventListener('click', function(){
//         link.classList.add = "active"
//     })
// }


const burger = document.querySelector('.harmburger')
const icon = document.querySelector('.harmburger .icon');
// const first = document.querySelector('.first');
const one = document.querySelector('.one')
const icon1 = document.querySelector('.harmburger .icon1')
// var icon = btn.querySelector(".icon")

// burger.onclick = function(){
//     if(icon.classList.contains("icon")){
//         icon.classList.replace("icon", "icon1")
//     }
// }


const navshow = function(){
    burger.addEventListener('click', function(){
        // first.classList.toggle('show')
        one.classList.toggle('show')
        // icon.classList.toggle('burger-of')
        // icon1.classList.toggle('burger-on')

        
        // if (icon.style.display=="block"){
        //     icon.style.display="none"
        // }
//         // icon.classList.toggle("icon1")
//         if(icon.classList.contains('show')){
//         icon.classList.replace('icon', 'icon1')
//     }
        })
    }
    navshow()

// icon.onclick = function(){
//     if(icon.classList.contains("show")){
//         icon.classList.replace('icon', 'icon1')
//     }




