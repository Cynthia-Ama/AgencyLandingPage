const navBtn = document.querySelector('.navBtn')
const sidebar = document.querySelector('.sidebar')


navBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle("show-sidebar")
})