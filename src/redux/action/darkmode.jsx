import { createSlice } from "@reduxjs/toolkit";

const darkmode = createSlice({
  name: "darkmode",
  initialState: { color: true, faceColor: true, zoom: 1 },
  reducers: {
    colorF: (state) => {
      state.color = !state.color;
    },
    faceColorF: (state) => {
      state.faceColor = !state.faceColor;
    },
    zoomF: (state, action) => {
      state.zoom = action.payload;
    },
  },
});

export const { colorF, faceColorF, zoomF } = darkmode.actions;
export default darkmode.reducer;
