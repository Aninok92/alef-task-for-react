import { NavLink } from 'react-router-dom'

import s from './Navigation.module.scss'

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Форма
    </NavLink>
    <NavLink to="/preview" className={s.link} activeClassName={s.activeLink}>
      Превью
    </NavLink>
  </nav>
)

export default Navigation
