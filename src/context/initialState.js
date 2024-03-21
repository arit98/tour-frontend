export const initialState = {
    user:
      localStorage.getItem("user") !== undefined
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    loading: false,
    error: null,
  };
  