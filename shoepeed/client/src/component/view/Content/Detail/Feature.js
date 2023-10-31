import React from 'react'
import {  Button } from 'antd';

const Feature = () => {
  const features = ['# 깔끔한', ' # 발 편한', '# 어디에나 어울리는', '#스니커즈 ', '# 요즘 HOT', '# 브랜드명']
  
  return (
    <>
      {features.map((feature)=> {
        return(
        <React.Fragment key={feature} >
            <Button 
              type="primary" 
              style={{ 
                color: 'black',
                fontWeight: 'bold',
                backgroundColor: '#ddd',
                margin: '10px'

              }} 
              >
                {feature}
            </Button>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Feature
