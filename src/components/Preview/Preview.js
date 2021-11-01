import Section from '../Section/Section'
import s from './Preview.module.scss'

function Preview({ parent, children }) {
  return (
    <>
      <Section title="Персональные данные">
        {parent ? (
          parent.map((i) => {
            return (
              <p key={i.id} className={s.text}>
                {i.name}, {i.age} лет
              </p>
            )
          })
        ) : (
          <p className={s.text}>Нет данных</p>
        )}
      </Section>
      <Section title="Дети">
        {children ? (
          children.map((i) => {
            return (
              <p key={i.id} className={s.text}>
                {i.name}, {i.age} лет
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
