import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST
};

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNews = createApi({
    reducerPath: 'cryptoNews',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ count, category , freshness}) => createRequest(`/news/search?q=${category}&freshness=${freshness}&safeSearch=Off&textFormat=Raw&count=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNews;