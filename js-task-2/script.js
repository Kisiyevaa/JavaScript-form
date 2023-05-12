const namee = document.getElementById("namee")
const surname = document.getElementById("surname")
const year = document.getElementById("year")
const email = document.getElementById("email")
const btn = document.getElementById("btn")
const forumm = document.getAnimations("forumm")
const demo1 = document.getElementById("demo1")
const demo2 = document.getElementById("demo2")
const demo3 = document.getElementById("demo3")
const demo4 = document.getElementById("demo4")
const demoo = document.getElementById("demoo")
const form=document.getElementById("form")
const flex=document.getElementById("flex")

document.getElementById("forumm").style.display = "none"; 

function show() {
    document.getElementById("forumm").style.display = "block"; 
    document.getElementById("demoo").style.paddingLeft = "20px"; 
    flex.style.display=`flex`
    form.style.width=`700px`
    flex.style.alignItems=`center`
    flex.style.justifyContent=`center`
    demo1.innerHTML = `Adınız: ${namee.value}`
    demo2.innerHTML = `Soydınız: ${surname.value}`
    demo3.innerHTML = `Yaşınız: ${year.value}`
    demo4.innerHTML = `Email: ${email.value}`
}
form.addEventListener("click",function(e){
    e.preventDefault()
})