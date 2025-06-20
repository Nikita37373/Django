import {createApi} from "@reduxjs/toolkit/query/react";
import type {ICategoryCreate, ICategoryItem} from "./types.ts";
import {createBaseQuery} from "../utils/createBaseQuery.ts";

export const apiCategory = createApi({
    reducerPath: "api",
    baseQuery: createBaseQuery('categories'),
    endpoints: (builder) => ({
        getAllCategories: builder.query<ICategoryItem[], void>({
            query: () => ''
        }),
        createCategory: builder.mutation<ICategoryItem, ICategoryCreate>({
            query: (newCategory)=>{
                return {
                    url: '/',
                    method:'POST',
                    body: newCategory
                }
            }
        })

    })
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation} = apiCategory;