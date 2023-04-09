/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: m31odyr (https://sketchfab.com/m31odyr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/room-shell-fcaf7aa12c1f4c568ce33dd6ad8bccdb
Title: Room shell
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Room(props) {
  const { nodes, materials } = useGLTF('/room-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.lambert1} rotation={[-Math.PI / 2, 0, 0]} scale={0.05} color='white' />
    </group>
  )
}

useGLTF.preload('/room-transformed.glb')