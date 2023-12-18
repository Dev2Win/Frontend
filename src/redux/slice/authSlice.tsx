import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Credential {
  // Define the properties of your credential type
  // For example:
  username: string;
  password: string;
}

interface AuthState {
  credentials: Credential[];
  token: string | null;
}

const initialState: AuthState = {
  credentials: sessionStorage.getItem("credentials")
    ? JSON.parse(sessionStorage.getItem("credentials")!) as Credential[]
    : [],
  token: sessionStorage.getItem("token")
    ? JSON.parse(sessionStorage.getItem("token")!)
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Credential[]>) => {
      state.credentials = action.payload;
      sessionStorage.setItem("credentials", JSON.stringify(action.payload));
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        sessionStorage.setItem("token", JSON.stringify(action.payload));
      } else {
        sessionStorage.removeItem("token");
      }
    },
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const { setCredentials, setToken, logout } = authSlice.actions;

export default authSlice.reducer;