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

    getRandomCocktail: builder.query({
      query: () => ({
        url: `/randomselection.php`
      })

    }),




  })
});

export const { useGetOrdinaryDrinksQuery, useGetRandomCocktailQuery } = JuiceApi