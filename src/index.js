import './styles/style.css'
import Home from './homePage'
import Menu from './menuPage'

const pageContent = document.querySelector('.page-content');
pageContent.append(Home());
const navBarLinks = document.querySelectorAll('.navbar-link');

navBarLinks.forEach((navBarLink) => {
    navBarLink.addEventListener('click', () => {
        if(navBarLink.innerHTML=="Home" && !navBarLink.classList.contains("active")){
            pageContent.innerHTML="";
            navBarLinks.forEach((x)=>{
                x.classList.remove('active');
            });
            navBarLink.classList.add('active');
            pageContent.append(Home());
        }
        else if(navBarLink.innerHTML=="Menu" && !navBarLink.classList.contains("active")){
            pageContent.innerHTML="";
            navBarLinks.forEach((x)=>{
                x.classList.remove('active');
            });
            navBarLink.classList.add('active');
            pageContent.append(Menu());
        }
    })
})
