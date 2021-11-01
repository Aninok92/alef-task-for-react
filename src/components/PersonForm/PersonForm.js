import { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import FloatContainer from '../FloatContainer/FloatContainer'
import Button from '../Button/Button'
//import ChildrenForm from '../ChildrenForm/ChildrenForm'
import { ContextParent } from '../../App'
import { ContextChildren } from '../../App'
import Section from '../Section/Section'
import s from './PersonForm.module.scss'

function PersonForm() {
  const [inputFields, setInputFields] = useState([
    { id: nanoid(), name: '', age: '' },
  ])
  const [inputParentField, setInputParentField] = useState([
    { id: nanoid(), name: '', age: '' },
  ])
  const [isChildrenField, setIsChildrenField] = useState(false)

  const [parent, setParent] = useContext(ContextParent)
  const [children, setChildren] = useContext(ContextChildren)

  const addParent = () => {
    setParent([...inputParentField, ...parent])
  }

  const addChild = () => {
    setChildren([...inputFields, ...children])
  }

  const handleChangeChild = (id, e) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value
      }
      return i
    })
    setInputFields(newInputFields)
  }

  const handleChangeParent = (id, e) => {
    const newInputParentField = inputParentField.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value
      }
      return i
    })
    setInputParentField(newInputParentField)
  }

  const handleAddChild = () => {
    setInputFields([...inputFields, { id: nanoid(), name: '', age: '' }])
  }

  const handleChildrenField = () => {
    setIsChildrenField(true)
  }

  const handleRemoveFields = (id) => {
    const values = [...inputFields]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setInputFields(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addParent(inputParentField)
    addChild(inputFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section title="Персональные данные">
        {inputParentField.map((inputField) => (
          <div key={inputField.id}>
            <FloatContainer
              textLabel="ФИО"
              type="text"
              name="name"
              value={inputField.name}
              onChange={(event) => handleChangeParent(inputField.id, event)}
            />
            <FloatContainer
              textLabel="Возраст"
              type="number"
              name="age"
              value={inputField.age}
              onChange={(event) => handleChangeParent(inputField.id, event)}
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
          inputFields.map((inputField) => (
            <div key={inputField.id}>
              <FloatContainer
                textLabel="Имя"
                type="text"
                name="name"
                value={inputField.name}
                onChange={(event) => handleChangeChild(inputField.id, event)}
              />
              <FloatContainer
                textLabel="Возраст"
                type="number"
                name="age"
                value={inputField.age}
                onChange={(event) => handleChangeChild(inputField.id, event)}
              />
              <Button
                type="button"
                onClick={() => handleRemoveFields(inputField.id)}
              >
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
