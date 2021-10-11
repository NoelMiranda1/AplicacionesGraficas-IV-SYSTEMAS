/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import API from "../../utils/api";
import { AiOutlinePlus, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { CgNotifications } from "react-icons/cg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
interface props {
  setData?: any;
}
const api = new API();

export const Header = (props: props) => {
  const { setData } = props;
  const [nameSearch, setNameSearch] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let location = useLocation();
  async function fetchData() {
    const data = await api.getMovie(nameSearch);
    setData(data.results);
    setNameSearch("");
    setErrors("");
  }
  async function defaultMovie() {
    const data = await api.getDefaultMovie();
    setData(data.results);
    setNameSearch("");
    setErrors("");
  }
  useEffect(() => {
    defaultMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SearchMovie = (e: any) => {
    e.preventDefault();
    if (!nameSearch) {
      return setErrors("La busqueda no puede ser vacia");
    } else {
      fetchData();
    }
  };

  return (
    <div>
      <Navbar
        dark
        expand='md'
        style={{
          paddingLeft: "30px",
          paddingRight: "60px"
        }}>
        <NavbarBrand href='/AplicacionesGraficas-IV-SYSTEMAS/home'>
          <img className='logoStyle' src={Logo} alt='logo-app' />
        </NavbarBrand>
        <div>
          {location?.pathname.includes("home") ? (
            <form onSubmit={(e) => SearchMovie(e)}>
              <input
                className='inputSearch'
                type='text'
                placeholder='Search'
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
                autoFocus
              />
              {errors !== "" ? (
                <p className='errorText'>{errors !== "" ? errors : null}</p>
              ) : null}
            </form>
          ) : null}
        </div>
        <NavbarToggler style={{ color: "#fff" }} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/AplicacionesGraficas-IV-SYSTEMAS/home'>
                <AiOutlinePlus color='#fff' size={30} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/AplicacionesGraficas-IV-SYSTEMAS/home'>
                <CgNotifications color='#fff' size={30} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/AplicacionesGraficas-IV-SYSTEMAS/home'>
                <Link to='/AplicacionesGraficas-IV-SYSTEMAS/home'>
                  <AiOutlineHome color='#fff' size={30} />
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{ color: "#fff" }}>User Test</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    // <nav className='navBar'>
    //   <div>
    //     <a href='/' className='logo'>
    //       <img
    //         style={{ width: "100%", padding: "5px" }}
    //         src={Logo}
    //         alt='logo-app'
    //       />
    //     </a>
    //   </div>
    //   <div>
    //     {location?.pathname.includes("home") ? (
    //       <form onSubmit={(e) => SearchMovie(e)}>
    //         <input
    //           className='inputSearch'
    //           type='text'
    //           placeholder='Search'
    //           value={nameSearch}
    //           onChange={(e) => setNameSearch(e.target.value)}
    //           autoFocus
    //         />
    //         {errors !== "" ? (
    //           <p className='errorText'>{errors !== "" ? errors : null}</p>
    //         ) : null}
    //       </form>
    //     ) : null}
    //   </div>
    //   <div>
    //     <ul className='navOptions'>
    //       <li className='navOptions-item'>
    //         <a className='navOptions-a'>
    //           <AiOutlinePlus size={30} />
    //         </a>
    //       </li>
    //       <li className='navOptions-item'>
    //         <a className='navOptions-a' href='#'>
    //           <CgNotifications size={30} />
    //         </a>
    //       </li>
    //       <li className='navOptions-item'>
    //         <Link className='navOptions-a' to='/'>
    //           <AiOutlineHome size={30} />
    //         </Link>
    //       </li>
    //       <li className='navOptions-item'>
    //         <p>TEST NAME</p>
    //       </li>
    //       <li className='navOptions-item'>
    //         <div className=' burger'>
    //           <AiOutlineMenu size={30} />
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};
