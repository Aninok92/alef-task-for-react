import { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import FloatContainer from '../FloatContainer/FloatContainer'
import Button from '../Button/Button'
import { ContextChildren } from '../../App'

function ChildrenForm({ onSubmitChild }) {
  // const [nameChild, setNameChild] = useState('')
  // const [ageChild, setAgeChild] = useState('')
  // const [count, setCount] = useState(0)
  // const [children, setChildren] = useContext(ContextChildren)
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   switch (name) {
  //     case 'nameChild':
  //       setNameChild(value)
  //       break
  //     case 'ageChild':
  //       setAgeChild(value)
  //       break
  //     default:
  //       return
  //   }
  // }
  // const addChild = (nameChild, ageChild) => {
  //   const newChild = {
  //     id: nanoid(),
  //     nameChild,
  //     ageChild,
  //   }
  //   console.log(newChild)
  //   setChildren([newChild, ...children])
  // }
  // // const handleAddFields = () => {
  // //   setCount(count + 1)
  // //   console.log(count)
  // //   if (count > 0) {
  // //     // setInputFields([...inputFields, { id: nanoid(), name: '', age: '' }])
  // //   }
  // // }
  // const handleRemoveFields = (id) => {
  //   // const values = [...inputFields]
  //   // values.splice(
  //   //   values.findIndex((value) => value.id === id),
  //   //   1
  //   // )
  //   // setInputFields(values)
  // }
  // const nameInputId = nanoid()
  // const ageInputId = nanoid()
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setCount(count + 1)
  //   console.log(nameChild)
  //   addChild(nameChild, ageChild)
  // }
  // return (
  //   <>
  //     {count < 6 && (
  //       <Button type="submit" onClick={handleSubmit}>
  //         Добавить ребенка
  //       </Button>
  //     )}
  //     {count > 0 && (
  //       {
  //         inputFields.map((inputField) => (
  //           <div key={inputField.id}>
  //             <FloatContainer
  //               textLabel="ФИО"
  //               type="text"
  //               name="name"
  //               value={inputField.name}
  //               onChange={(event) => handleChange(inputField.id, event)}
  //               id={nameInputId}
  //             />
  //             <FloatContainer
  //               textLabel="Возраст"
  //               type="text"
  //               name="age"
  //               value={inputField.age}
  //               onChange={(event) => handleChange(inputField.id, event)}
  //               id={ageInputId}
  //             />
  //             <Button
  //               type="button"
  //               onClick={() => handleRemoveFields(inputField.id)}
  //               className={inputField}
  //             >
  //               Удалить
  //             </Button>
  //           </div>
  //         ))
  //       }
  //     )
  //     }
  //   </>
  // )
}

export default ChildrenForm
