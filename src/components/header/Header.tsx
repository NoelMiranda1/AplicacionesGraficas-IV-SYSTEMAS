/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import API from "../../utils/api";
import { AiOutlinePlus, AiOutlineHome } from "react-icons/ai";
import { CgNotifications } from "react-icons/cg";
interface props {
  setData: any;
}
const api = new API();

export const Header = (props: props) => {
  const { setData } = props;
  const [nameSearch, setNameSearch] = useState<string>("batman");

  useEffect(() => {
    async function fetchData() {
      const data = await api.getMovie(nameSearch);
      setData(data.Search);
      // setNameSearch("");
    }
    fetchData();
  }, [nameSearch]);

  const SearchMovie = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='navBar'>
      <div>
        <a href='#' className='logo'>
          <img
            style={{ width: "100%", padding: "5px" }}
            src={Logo}
            alt='logo-app'
          />
        </a>
      </div>
      <div>
        <form onSubmit={(e) => SearchMovie(e)}>
          <input
            type='text'
            placeholder='Search'
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            autoFocus
          />
        </form>
      </div>
      <div>
        <nav>
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
          </ul>
        </nav>
      </div>
    </div>
  );
};
