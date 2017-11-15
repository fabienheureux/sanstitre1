import * as THREE from 'three'
import randomColor = require('randomcolor')

import './index.css'
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)

camera.position.set(1, 0, 50)
camera.lookAt(new THREE.Vector3(0, 0, 0))

const scene = new THREE.Scene()

const material = new THREE.LineBasicMaterial({ color: 'turquoise' })
const sphereMaterial = new THREE.MeshLambertMaterial({
  color: 'pink'
})

const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.x = 10
pointLight.position.y = 50
pointLight.position.z = 130


const sphere = new THREE.Mesh(
	new THREE.SphereGeometry(50, 16, 16)
)

const geometry = new THREE.Geometry()
geometry.vertices.push(new THREE.Vector3(-10, 0, 0))
geometry.vertices.push(new THREE.Vector3(0, 10, 0))
geometry.vertices.push(new THREE.Vector3(10, 0, 0))
geometry.vertices.push(new THREE.Vector3(0, -10, 0))
geometry.vertices.push(new THREE.Vector3(0, 0, 10))


camera.position.set(1, 0, 200)

const line = new THREE.Line(geometry, material)
setInterval(() => {
  const randomPosition = Math.random() * Math.PI
  console.log(randomPosition)
  line.rotation.x = randomPosition
  line.updateMatrix()
  renderer.render(scene, camera)
}, 400)

scene.add(line)
scene.add(sphere)
scene.add(pointLight)
console.log(scene)
renderer.render(scene, camera)
