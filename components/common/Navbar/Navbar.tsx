import style from './Navbar.style.module.scss'
import { Container, Logo } from '@components/ui'

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      {
        <Container>
          <Logo />
        </Container>
      }
    </div>
  )
}

export default Navbar
