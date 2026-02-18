import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ChatBotModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glb/chatbot.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    const animation1=actions.animation1
    const animation2=actions.KeyAction
  
    animation1?.play()
    animation2?.play()
    group.current.traverse((child) => {
      if (child.isSkinnedMesh) {
        child.frustumCulled = false 
      
      }
    })
  },[actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.055, -0.418, 1.035]} scale={2.859}>
          <skinnedMesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials['Material.001']}
            skeleton={nodes.Cube001.skeleton}
          />
          <group name="Cube003">
            <skinnedMesh
              name="Cube004"
              geometry={nodes.Cube004.geometry}
              material={materials['Material.005']}
              skeleton={nodes.Cube004.skeleton}
            />
            <skinnedMesh
              name="Cube004_1"
              geometry={nodes.Cube004_1.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube004_1.skeleton}
            />
            <skinnedMesh
              name="Cube004_2"
              geometry={nodes.Cube004_2.geometry}
              material={materials['Material.004']}
              skeleton={nodes.Cube004_2.skeleton}
            />
            <skinnedMesh
              name="Cube004_3"
              geometry={nodes.Cube004_3.geometry}
              material={materials.Material}
              skeleton={nodes.Cube004_3.skeleton}
            />
          </group>
          <skinnedMesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={materials['Material.003']}
            skeleton={nodes.Plane001.skeleton}
            morphTargetDictionary={nodes.Plane001.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane001.morphTargetInfluences}
          />
          <primitive object={nodes.Head} />
          <primitive object={nodes.Body} />
          <primitive object={nodes.UpperR} />
          <primitive object={nodes.LowerR} />
          <primitive object={nodes.UpperL} />
          <primitive object={nodes.LowerL} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/chatbot.glb')