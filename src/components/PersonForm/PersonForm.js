import { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import FloatContainer from '../FloatContainer/FloatContainer'
import Button from '../Button/Button'
import { ContextParent } from '../../App'
import { ContextChildren } from '../../App'
import Section from '../Section/Section'
import s from './PersonForm.module.scss'

function PersonForm() {
  const [inputChildrenFields, setInputChildrenFields] = useState([
    { id: nanoid(), name: '', age: '' },
  ])
  const [inputParentField, setInputParentField] = useState([
    { id: nanoid(), name: '', age: '' },
  ])
  const [isChildrenField, setIsChildrenField] = useState(false)

  const [parent, setParent] = useContext(ContextParent)
  const [children, setChildren] = useContext(ContextChildren)

  const handleChange = (id, e, state, setState) => {
    const newInputField = state.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value
      }
      return i
    })
    setState(newInputField)
  }

  const handleAddChild = () => {
    setInputChildrenFields([
      ...inputChildrenFields,
      { id: nanoid(), name: '', age: '' },
    ])
  }

  const handleChildrenField = () => {
    setIsChildrenField(true)
  }

  const handleRemoveFields = (id) => {
    const values = [...inputChildrenFields]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setInputChildrenFields(values)
  }

  const addParent = () => {
    setParent([...inputParentField, ...parent])
  }

  const addChild = () => {
    setChildren([...inputChildrenFields, ...children])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addParent(inputParentField)
    addChild(inputChildrenFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section title="Персональные данные">
        {inputParentField.map(({ id, name, age }) => (
          <div key={id}>
            <FloatContainer
              textLabel="ФИО"
              type="text"
              name="name"
              value={name}
              onChange={(event) =>
                handleChange(id, event, inputParentField, setInputParentField)
              }
            />
            <FloatContainer
              textLabel="Возраст"
              type="number"
              name="age"
              value={age}
              onChange={(event) =>
                handleChange(id, event, inputParentField, setInputParentField)
              }
            />
          </div>
        ))}
      </Section>
      <Section title="Дети (макс. 5)">
        {isChildrenField ? (
          <Button type="button" onClick={handleAddChild}>
            Добавить ребенка
          </Button>
        ) : (
          <Button type="button" onClick={handleChildrenField}>
            Добавить ребенка
          </Button>
        )}
        {isChildrenField &&
          inputChildrenFields.map(({ id, name, age }) => (
            <div key={id}>
              <FloatContainer
                textLabel="Имя"
                type="text"
                name="name"
                value={name}
                onChange={(event) =>
                  handleChange(
                    id,
                    event,
                    inputChildrenFields,
                    setInputChildrenFields
                  )
                }
              />
              <FloatContainer
                textLabel="Возраст"
                type="number"
                name="age"
                value={age}
                onChange={(event) =>
                  handleChange(
                    id,
                    event,
                    inputChildrenFields,
                    setInputChildrenFields
                  )
                }
              />
              <Button type="button" onClick={() => handleRemoveFields(id)}>
                Удалить
              </Button>
            </div>
          ))}
        <Button type="submit">Сохранить</Button>
      </Section>
    </form>
  )
}

export default PersonForm
