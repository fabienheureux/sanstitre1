import {
  BoxGeometry,
  Line,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  Geometry,
  LineBasicMaterial,
  WebGLRenderer,
} from 'three'

import './index.css'

const scene = new Scene()
const renderer = new WebGLRenderer()
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
const geometry = new Geometry()
const material = new LineBasicMaterial({ color: 0x0000ff })

camera.position.set(0, 0, 100)
camera.lookAt(new Vector3(0, 0, 0))

geometry.vertices.push(new Vector3(-10, 0, 0))
geometry.vertices.push(new Vector3(0, 10, 0))
geometry.vertices.push(new Vector3(10, 0, 0))
renderer.setSize( window.innerWidth, window.innerHeight )

const line = new Line(geometry, material)
scene.add(line)

renderer.render(scene, camera)

document.body.appendChild( renderer.domElement )
