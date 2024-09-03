
import './Navbar.css';
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';



const Navbar = () => {
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu =()=>{
    menuRef.current.style.left= "-350px";
  }
  
  return (
    <div className='navbar'>
        <img src={logo} alt='' />
        <img src={menu_open} onClick={openMenu}  alt="" className='nav-mob-open' />
        <ul  ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu}    alt="" className="nav-mob-close" />
          <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About</p></AnchorLink></li>
          {/* <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Service</p></AnchorLink></li> */}
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#condact'><p>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#condact'> Connect With Me</AnchorLink></div>


    </div>
  )
}

export default Navbar