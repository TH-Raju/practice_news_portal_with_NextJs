// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getNewses: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => '/news'
        }),
        getSingleNewses: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: (id) => `/news/${id}`
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetNewsesQuery, useGetSingleNewsesQuery } = apiSlice