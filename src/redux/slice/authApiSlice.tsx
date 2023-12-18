import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginAuth: builder.mutation({
      query: (data) => ({
        url: "api/auth/login/",
        method: "POST",
        body: { ...data },
      }),
    }),
    signUpAuth: builder.mutation({
      query: (data) => ({
        url:  "/api/auth/register/",
        method: "POST",
        body:data,
      }),
    }),
   confirmEmail: builder.mutation({
      query: (data) => ({
        url:  "/api/auth/account-confirm-email/",
        method: "POST",
        body:data,
      }),
    }),
    verifyResetPasswordEmail: builder.mutation({
      query: (data) => ({
        url:  "/api/auth/password/reset/",
        method: "POST",
        body:data,
      }),
    }),
    
  }),
});

export const { useLoginAuthMutation, useSignUpAuthMutation,useConfirmEmailMutation,useVerifyResetPasswordEmailMutation } = authApiSlice;
