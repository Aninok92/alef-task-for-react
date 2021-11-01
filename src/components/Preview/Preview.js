import Section from '../Section/Section'
import s from './Preview.module.scss'

function Preview({ parent, children }) {
  console.log(parent.name)
  return (
    <>
      <Section title="Персональные данные">
        {parent
          ? parent.map((i) => {
              return (
                <p key={i.id} className={s.text}>
                  {i.name}, {i.age} лет
                </p>
              )
            })
          : 'нет данных'}
      </Section>
      <Section title="Дети">
        {children
          ? children.map((i) => {
              return (
                <p key={i.id} className={s.text}>
                  {i.name}, {i.age} лет
                </p>
              )
            })
          : 'нет данных'}
      </Section>
    </>
  )
}

export default Preview
