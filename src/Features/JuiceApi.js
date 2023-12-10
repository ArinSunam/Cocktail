import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./constant";



export const JuiceApi = createApi({
  reducerPath: 'JuiceApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getOrdinaryDrinks: builder.query({
      query: () => ({
        url: `/filter.php?c=Ordinary_Drink`
      })
    }),


    getCocktailDetail: builder.query({
      query: (id) => ({
        url: `/lookup.php?i=${id}`
      }),
    }),


    getCocktails: builder.query({
      query: () => ({
        url: `filter.php?c=Cocktail
        `
      }),
    })




  })
});

export const { useGetOrdinaryDrinksQuery, useGetCocktailDetailQuery } = JuiceApi