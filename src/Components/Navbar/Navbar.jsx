
import './Navbar.css';
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles




const Navbar = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 ,once :true});
  }, []);

  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0"; // Show menu
      AOS.refresh(); // Refresh AOS to account for changes
    }
  };
  
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px"; // Hide menu off-screen
      AOS.refresh(); // Refresh AOS to account for changes
    }
  };
  
  
  return (
    <div className='navbar'>
        <img src={logo} alt='' />
        <img src={menu_open} onClick={openMenu}  alt="" className='nav-mob-open' data-aos="fade-left"/>
        <ul  ref={menuRef} className='nav-menu' role="menu" aria-hidden="true">
          <img src={menu_close} onClick={closeMenu}    alt="Close menu" className="nav-mob-close" />
          <li><AnchorLink className='anchor-link' href='#home' data-aos="fade-down"><p>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about' data-aos="fade-down"><p>About</p></AnchorLink></li>
          {/* <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Service</p></AnchorLink></li> */}
          <li><AnchorLink className='anchor-link' offset={50} href='#work' data-aos="fade-down"><p>Portfolio</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#condact' data-aos="fade-down"><p>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#condact' data-aos="fade-down"> Connect With Me</AnchorLink></div>


    </div>
  )
}

export default Navbar