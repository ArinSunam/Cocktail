import React from 'react'

import { useGetOrdinaryDrinksQuery } from '../Features/JuiceApi'
const HomePage = () => {
  const { data, isLoading } = useGetOrdinaryDrinksQuery()
  console.log(data)
  return (
    <div className='p-5'>

      <div className='space-y-2 
       grid grid-cols-4'>
        {data?.drinks.map((drink) => {
          return <div key={drink.idDrink}>
            <h1>{drink.strDrink}</h1>

            <img className='h-[250px]' src={drink.strDrinkThumb} alt="" />
          </div>
        })}
      </div>


    </div >

  )
}

export default HomePage
