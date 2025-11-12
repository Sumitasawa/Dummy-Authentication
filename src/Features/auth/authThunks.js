import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // ✅ Always parse once
      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message || "Invalid credentials");
      }

      console.log("✅ Login API success:", data); // <-- Check this in console
      return data; // Contains { id, token, username, ... }
    } catch (err) {
      return rejectWithValue("Network error");
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
    async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message || "Failed to fetch profile");
      }

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
