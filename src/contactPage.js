import './styles/contactPage.css'

const Contact = () =>{
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    const phone = document.createElement('p');
    phone.className='phone';
    phone.innerHTML='📞 123 456 789';

    const address = document.createElement('p');
    address.className = 'address';
    address.innerHTML = '🏠 3rd St., HSR Layout, Bangalore';

    const email = document.createElement('p');
    email.className='email';
    email.innerHTML='📧 legato@xyz.xyz'

    contactContainer.append(phone,address,email);

    return contactContainer;
}

export default Contact;