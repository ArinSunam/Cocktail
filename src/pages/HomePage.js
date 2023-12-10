import React, { useState } from 'react'

import { useGetOrdinaryDrinksQuery } from '../Features/JuiceApi'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const { data, isLoading } = useGetOrdinaryDrinksQuery()
  const nav = useNavigate()

  const [visible, setVisible] = useState(8);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 8)
  };
  return (
    <div className='p-5 flex flex-col items-center w-full'>
      <h1 className='my-6 text-center text-2xl font-bold border-2 border-b-cyan-700 pb-2 outline-none'>Ordinary drinks</h1>

      <div className='space-y-4
       grid grid-cols-4 gap-3 w-full'>
        {data?.drinks.slice(0, visible).map((drink) => {
          return <div key={drink.idDrink} onClick={() => nav(`/drinks/detail/${drink.idDrink}`)}>

            <h1>{drink.strDrink}</h1>

            <img className='h-[250px]' src={drink.strDrinkThumb} alt="" />



          </div>

        })}

        <Button
          size='md'
          color='cyan'
          variant='outlined'

          className='relative left-[500px] top-2'

          onClick={loadMore}
        >
          Read more

        </Button>
      </div>


    </div >

  )
}

export default HomePage
