import './styles/index.css'
import Header from './components/Header'
import Content from './components/Content'

const render = () => {
  const root = document.querySelector('#app')

  root.appendChild(
    Header()
  )
  root.appendChild(
    Content()
  )
}

render()
