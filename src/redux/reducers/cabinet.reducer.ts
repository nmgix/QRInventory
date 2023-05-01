import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cabinet } from "types/Cabinet";

type InitialState = {
  cabinetData: Cabinet[] | undefined;
};

const initialState: InitialState = {
  cabinetData: undefined,
};

const CabinetSlice = createSlice({
  name: "cabinet",
  initialState,
  reducers: {
    updateCabinet: (state, action: PayloadAction<Cabinet[]>) => {
      state.cabinetData = action.payload;
      return state;
    }
  }
});

export const cabinetActions = CabinetSlice.actions;
export default CabinetSlice.reducer;