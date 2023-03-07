import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://contact-app.mms-it.com/api/v1/register"
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user,
            }),



            invalidatesTags: ["Auth"],
        }),
        // 5log 
        login1: builder.mutation({
            query: (user) => ({
                url: "/login1",
                method: "POST",
                body: user,
            }),



            invalidatesTags: ["Auth"],
        })
    })
});
// 6log ----useLogin1Mutation
export const { useRegisterMutation,useLogin1Mutation } = authApi;
