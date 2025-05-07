// src/redux/ticketSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTickets: [],
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.selectedTickets.push(action.payload);
    },
    removeALP: (state, action) => {
      const bunchToRemove = action.payload;

      // Find the first matching LP entry to remove
      const index = state.selectedTickets.findIndex(
        (item) => item.type === "LP" && item.value === bunchToRemove
      );

      if (index !== -1) {
        state.selectedTickets.splice(index, 1);
      }
    },
    removeTicket: (state, action) => {
      const ticketValue = action.payload;
      state.selectedTickets = state.selectedTickets.filter(
        (ticket) => ticket.type !== "ticket" || ticket.value !== ticketValue
      );
    },
    clearTickets: (state) => {
      state.selectedTickets = [];
    },
  },
});

export const {
  addTicket,
  removeALP,
  removeTicket,
  clearTickets,
} = ticketSlice.actions;

export default ticketSlice.reducer;
