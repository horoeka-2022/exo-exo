import { useThree } from '@react-three/fiber'

export default function Controls() {
  const { camera } = useThree()

  document.addEventListener('keydown', onDocumentKeyDown, false)

  function onDocumentKeyDown(event) {
    const delta = 3
    event = event || window.event
    const keycode = event.keyCode

    // const lon = camera.position.x - event

    // const lat = camera.position.y - event

    // camera.position.x = Math.max(-85, Math.min(85, lat))
    // camera.position.y = Math.max(-85, Math.min(85, lon))

    switch (keycode) {
      case 39:
        camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * delta
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * delta
        break
      case 40:
        camera.position.x += Math.sin(camera.rotation.y) * delta
        camera.position.z += -Math.cos(camera.rotation.y) * delta
        break
      case 38:
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
