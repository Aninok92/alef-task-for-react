import Navigation from '../Navigation/Navigation'
import s from './AppBar.module.scss'

function AppBar() {
  return (
    <header className={s.nav}>
      <Navigation />
    </header>
  )
}

export default AppBar
