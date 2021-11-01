import { useState, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from './components/Container/Container'
import './App.css'
import PersonForm from './components/PersonForm/PersonForm'
import AppBar from './components/AppBar/AppBar'
import Preview from './components/Preview/Preview'

const ContextParent = createContext()
const ContextChildren = createContext()

function App() {
  const [children, setChildren] = useState('')
  const [parent, setParent] = useState('')

  console.log(parent)
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <ContextChildren.Provider value={[children, setChildren]}>
            <ContextParent.Provider value={[parent, setParent]}>
              <PersonForm />
            </ContextParent.Provider>
          </ContextChildren.Provider>
        </Route>
        <Route path="/preview">
          <Preview children={children} parent={parent} />
        </Route>
      </Switch>
    </Container>
  )
}

export { App, ContextParent, ContextChildren }
