import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click to visit website'
// }

const anotherUser = "ReactJS"

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit W3school</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click to visit website',
  anotherElement
)

createRoot(document.getElementById('root')).render(
 
  reactElement
  
)