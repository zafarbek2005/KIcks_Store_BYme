import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: "/products/category-list",
        params,
      }),
      providesTags: ["catigory"],
    }),
    createCategory: build.mutation({
      query: (body) => ({
        url: "/catigory",
        method: "POST",
        body,
      }),
      invalidatesTags: ["catigory"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/catigory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/catigory/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;