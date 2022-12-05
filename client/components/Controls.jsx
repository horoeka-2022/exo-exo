import { useThree } from '@react-three/fiber'

export default function Controls() {
  const { camera } = useThree()

  document.addEventListener('keydown', onDocumentKeyDown, false)

  function onDocumentKeyDown(event) {
    const delta = 1.5
    event = event || window.event
    const keycode = event.keyCode

    // const lon = camera.position.x - event

    // const lat = camera.position.y - event

    // camera.position.x = Math.max(-85, Math.min(85, lat))
    // camera.position.y = Math.max(-85, Math.min(85, lon))

    switch (keycode) {
      case 40:
        camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * delta
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * delta
        break
      case 38:
        camera.position.x += Math.sin(camera.rotation.y) * delta
        camera.position.z += -Math.cos(camera.rotation.y) * delta
        break
      case 39:
        camera.position.x -= Math.sin(camera.rotation.y) * delta
        camera.position.z -= -Math.cos(camera.rotation.y) * delta
        break
      case 37:
        camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * delta
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * delta
        break
    }
  }
}

// event keyCode:
// left = 37
// up = 38
// right = 39
// down = 40

// document.addEventListener('keyup', onDocumentKeyUp, false)
// function onDocumentKeyUp(event) {
//   document.removeEventListener('keydown', onDocumentKeyDown, false)
// }
// document.onkeydown = function (e) {
//   console.log(e)
// }

// const lon = camera.position.x - event

// const lat = camera.position.y - event

// lat = Math.max(-85, Math.min(85, lat))

// camera.target.y = radius * Math.cos(phi)
// camera.target.z = radius * Math.sin(phi) * Math.sin(theta)

// const phi = THREE.Math.degToRad(90 - lat)
// const theta = THREE.Math.degToRad(lon)
// const radius = Math.hypot(camera.position)

// const keysDown: any = {
//   KeyW: 0,
//   KeyA: 0,
//   KeyS: 0,
//   KeyD: 0,
// }

// document.addEventListener('keydown', ({ code }) => {
//   keysDown[code] = 1
// })
// document.addEventListener('keyup', ({ code }) => {
//   keysDown[code] = 0
// })

// if(controls["KeyW"]){ // w
//   camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
//   camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
// }
// if(controls["KeyS"]){ // s
//   camera.position.x += Math.sin(camera.rotation.y) * player.speed;
//   camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
// }
// if(controls["KeyA"]){ // a
//   camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
//   camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
// }
// if(controls["KeyD"]){ // d
//   camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
//   camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
// }
// document.addEventListener('keydown', onDocumentKeyDown, false)

// position and point the camera to the center of the scene
// camera.position.x = 15;
// camera.position.y = 16;
// camera.position.z = 13;

// const x = xRadius * Math.sin(t / 2)
// const z = zRadius * Math.cos(t / 2)
