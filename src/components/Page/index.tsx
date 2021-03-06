import React from 'react'

import { ModelsWrapper,ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () =>{
  return (

    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Mercedes Class S',
            'Mercedes Class S',
            'Model Three',
            'Model Four',
            'Model Five',            
          ].map( modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName ={modelName}
              overlayNode ={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
              />}          
            />  
          ))}                
         </div>
        
        <Spacer/>

        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>

  )
}

export default Page