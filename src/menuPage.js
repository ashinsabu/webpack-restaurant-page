import './styles/menuPage.css'
import FoodObject from './foods';

const Menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = "Our Menu";
    menuContainer.append(mainTitle);
    const foods = FoodObject['foods'];
    for(let i=0;i<foods.length;i++){
        const menuItem = document.createElement('div');
        menuItem.className='menu-item';

        const itemImage = document.createElement('img');
        itemImage.src = foods[i]['imgLink'];
        itemImage.className = "item-image";

        const itemInfo = document.createElement('div');
        itemInfo.className='item-info';

        const itemName = document.createElement('h3');
        itemName.textContent = foods[i]['name'];

        const itemDesc = document.createElement('p');
        itemDesc.innerHTML = foods[i]['desc'];

        itemInfo.append(itemName,itemDesc);

        menuItem.append(itemImage,itemInfo);
        menuContainer.append(menuItem);    
    }
    console.log(menuContainer);
    return menuContainer;
}

export default Menu;