import PropTypes from 'prop-types'
import s from './Button.module.scss'

const Button = ({ children, type, onClick, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => null,
  className: `${s.button}`,
  children: null,
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button
