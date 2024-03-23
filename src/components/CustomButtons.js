import React from 'react'
import Button from './Button';

const CustomButtons = () => {

  const buttonList = ['ComputerEngineering', 'Football',
  'Laliga','Futsal','Javascript','PremierLegue',
  'Dribbling','RealMadridFC','Podcasts','Africans'];
  return (
    <div className='flex items-center overflow-x-hidden'>
      {
        buttonList.map(button =>(
          <Button key={button} name={button} />
        ))
      }
    </div>
  )
}

export default CustomButtons
