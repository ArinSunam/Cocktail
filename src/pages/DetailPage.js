import React from 'react'
import { useGetCocktailDetailQuery } from '../Features/JuiceApi'
import { useParams } from 'react-router'

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const { isLoading, isError, error, data } = useGetCocktailDetailQuery(id);
  console.log(data)
  return (


    <div className='p-2' key={data?.drinks[0]?.idDrink}>

      {data?.drinks[0]?.strDrink}


      <img src={data?.drinks[0]?.strDrinkThumb} alt="" className='my-4' />

      {data?.drinks[0]?.strAlcoholic} <br />
      {data?.drinks[0]?.strCategory} <br />
      {data?.drinks[0]?.strGlass}

      <p> Ingredients </p>

      {data?.drinks[0]?.
        strIngredient1}


    </div>



  )
}

export default DetailPage
