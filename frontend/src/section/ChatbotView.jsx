import { Suspense } from "react"
import { ChatBotModel } from "./ChatBotModel"



const ChatbotView = () => {
  
   
  

  return (

        <> 
            <perspectiveCamera position={[0,0,0]} />
            <ambientLight intensity={1} />
            <directionalLight intensity={1} />
            <Suspense>
            <ChatBotModel scale={0.6} position={[-1,-1.3,0]} />
            </Suspense>
        </>
      

  )
}

export default ChatbotView
