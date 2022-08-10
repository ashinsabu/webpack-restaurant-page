import chefImgLink from './assets/chef.jpg'


const Home = () =>{
    const HomeContainer = document.createElement('div');
    HomeContainer.className = "home-container";

    const slogan = document.createElement('p');
    slogan.innerHTML = `It’s time to enjoy the finer things in life.`;
    slogan.className = "home-slogan";
    const slogan2 = document.createElement('p');
    slogan2.innerHTML = `A genuine fine-dining experience awaits you at Legato.`;
    slogan2.className = "home-slogan";

    const chefImg = document.createElement('img');
    chefImg.src = chefImgLink;
    chefImg.className = "chef-img";

    const subtext = document.createElement('p');
    subtext.innerHTML = "Order online or visit us.";
    subtext.className = "subtext";

    HomeContainer.append(slogan,slogan2,chefImg,subtext);

    return HomeContainer;

}
    

export default Home