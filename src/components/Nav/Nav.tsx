import './Nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <button className="nav__btn">
        <img src="/menu-coffee.svg" alt="" className="nav__image" />
      </button>
      <button className="nav__btn">
        <img src="/menu-fav.svg" alt="" className="nav__image" />
      </button>
      <button className="nav__btn">
        <img src="/menu-cart.svg" alt="" className="nav__image" />
      </button>
      <button className="nav__btn">
        <img src="/menu-user.svg" alt="" className="nav__image" />
      </button>
    </nav>
  )
}

export default Nav
