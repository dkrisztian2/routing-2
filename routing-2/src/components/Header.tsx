import { Link } from "react-router-dom"


const Header = () => {
  return (
    <nav>
        <ul className="nav-list">
            <li className="nav-element"><Link to='/'>Home</Link></li>
            <li className="nav-element"><Link to='/users'>Users</Link></li>
        </ul>
    </nav>
  )
}

export default Header