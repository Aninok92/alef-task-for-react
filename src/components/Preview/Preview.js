import Section from '../Section/Section'
import s from './Preview.module.scss'

function Preview({ parent, children }) {
  return (
    <>
      <Section title="Персональные данные">
        {parent ? (
          parent.map(({ id, name, age }) => {
            return (
              <p key={id} className={s.text}>
                {name}, {age} лет
              </p>
            )
          })
        ) : (
          <p className={s.text}>Нет данных</p>
        )}
      </Section>
      <Section title="Дети">
        {children ? (
          children.map(({ id, name, age }) => {
            return (
              <p key={id} className={s.text}>
                {name}, {age} лет
              </p>
            )
          })
        ) : (
          <p className={s.text}>Нет данных</p>
        )}
      </Section>
    </>
  )
}

export default Preview
