import { useState, useEffect } from 'react'
import s from './FloatContainer.module.scss'

function FloatContainer(props) {
  const { textLabel, type, onChange, name, id, value } = props
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (value !== '') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [value])

  return (
    <div className={s.floatLabel}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      />

      <label htmlFor={id} className={isActive ? s.active : ''}>
        {textLabel}
      </label>
    </div>
  )
}

export default FloatContainer
