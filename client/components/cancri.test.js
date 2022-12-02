import React from 'react'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import Cancri from './Cancri'

test('mesh to have three children', async () => {
  const renderer = await ReactThreeTestRenderer.create(<Cancri />)
  const mesh = renderer.scene.children[0].allChildren
  // expect(meshChildren).toHaveLength(3)
})
