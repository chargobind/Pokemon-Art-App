import { createSlice } from "@reduxjs/toolkit";

	export const charactersSlice = createSlice({
	  name: "characters",
	  initialState: {
	    characterList: [
	      {
            name: "Pikachu",
            health: 100,
            fraction: "Lightening",
            weapon: "Thunder-Bolt",
            damagePerHit: 60,
	      },
	      {
            name: "Charizard",
            health: 100,
            fraction: "Fire",
            weapon: "Flame Thrower",
            damagePerHit: 80,
	      },
	      {
            name: "Zapdos",
            health: 120,
            fraction: "Lightening",
            weapon: "Thunder-Storm",
            damagePerHit: 90,
	      },
	    ],
	    battleCharacters: [],
	  },
	  reducers: {
	    setBattleCharacters: (state, action) => {
	      return {
	        characterList: state.characterList,
	        battleCharacters: action.payload,
	      };
	    },
	  },
	});
	
	export const { setBattleCharacters } = charactersSlice.actions;
	

	export default charactersSlice.reducer;
