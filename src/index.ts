import { join } from 'lodash'
import './index.css'
export interface Test { copmiler: string; framework: string; }

function component() {
  var element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())

