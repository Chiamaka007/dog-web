import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllBreedsResponse, RequestResponse } from "./dogType";

interface ImagePayload {
  breed:string;
  subBreed?: string;
}


export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  endpoints: (builder) => ({
    getDogsByBreed: builder.mutation<RequestResponse, string>({
      query: (breed) => `breed/${breed}/list`,
    }),
    getAllBreeds: builder.query<AllBreedsResponse, void>({
      query: () => "breeds/list/all",
    }),
    getBreedsImages: builder.mutation<RequestResponse, ImagePayload>({
      query: ({breed, subBreed})  => `breed/${breed}/${subBreed ? `${subBreed}/images`: "images"}`,
    }),
  }),
});

export const {
  useGetDogsByBreedMutation,
  useGetAllBreedsQuery,
  useGetBreedsImagesMutation,
} = dogApi;
