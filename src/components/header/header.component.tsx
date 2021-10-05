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
interface props {
  setData?: any;
}
const api = new API();

export const Header = (props: props) => {
  const { setData } = props;
  const [nameSearch, setNameSearch] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  let location = useLocation();
  async function fetchData() {
    const data = await api.getMovie(nameSearch);
    // console.log("dataHeader Submit", data);
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
    <nav className='navBar'>
      <div>
        <a href='/' className='logo'>
          <img
            style={{ width: "100%", padding: "5px" }}
            src={Logo}
            alt='logo-app'
          />
        </a>
      </div>
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
      <div>
        <ul className='navOptions'>
          <li className='navOptions-item'>
            <a className='navOptions-a'>
              <AiOutlinePlus size={30} />
            </a>
          </li>
          <li className='navOptions-item'>
            <a className='navOptions-a' href='#'>
              <CgNotifications size={30} />
            </a>
          </li>
          <li className='navOptions-item'>
            <Link className='navOptions-a' to='/'>
              <AiOutlineHome size={30} />
            </Link>
          </li>
          <li className='navOptions-item'>
            <p>TEST NAME</p>
          </li>
          <li className='navOptions-item'>
            <div className=' burger'>
              <AiOutlineMenu size={30} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
