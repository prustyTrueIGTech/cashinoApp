import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    selectedTickets: [],
    isAddingLP: false,
  },
  reducers: {
    toggleAddLP: (state) => {
      state.isAddingLP = !state.isAddingLP;
    },
    addTicket: (state, action) => {
      if (!state.selectedTickets.includes(action.payload)) {
        state.selectedTickets.push(action.payload);
        console.log('ticket added', [...state.selectedTickets])
      }
    },
    removeTicket: (state, action) => {
      state.selectedTickets = state.selectedTickets.filter(
        (ticket) => ticket !== action.payload
      );
    },
    /**
     * {
        type: "LP",
        value: selectedBunch,
      }
     */
    removeAllLP: (state) => {

      const result = [];
      for(let i=0;i<state.selectedTickets;i++){
        if(state.selectedTickets[i].type !== "LP"){
          result.push(state.selectedTickets[i]);
        }
      }
      state.selectedTickets = result;
    },
    removeALP: (state) => {

      const result = [];
      for(let i=0;i<state.selectedTickets;i++){
        if(JSON.stringify(state.selectedTickets[i].value) !== JSON.stringify(state.payload)){
          result.push(state.selectedTickets[i]);
        }
      }
      state.selectedTickets = result;
    }
  },
});

export const { toggleAddLP, addTicket, removeTicket, removeAllLP, removeALP } = ticketSlice.actions;
export default ticketSlice.reducer;