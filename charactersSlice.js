import { createSlice } from "@reduxjs/toolkit";

export const getCharacters = createAsyncThunk(
	"characters/getCharacters",
	async () => {
	  const response = await fetch("http://localhost:8080/characters");
	  const data = await response.json();
	  return data;
	}
  );

  export const charactersSlice = createSlice({
	name: "characters",
	initialState: {
	  characterList: [],
	  status: "idle",
	  error: null,
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
	extraReducers(builder) {
	  builder
		.addCase(getCharacters.pending, (state, action) => {
		  state.status = "loading";
		})
		.addCase(getCharacters.fulfilled, (state, action) => {
		  state.status = "succeeded";
		  state.characterList = action.payload;
		})
		.addCase(getCharacters.rejected, (state, action) => {
		  state.status = "failed";
		  state.error = action.error;
		});
	},
  });
  
  export const { setBattleCharacters } = charactersSlice.actions;
  
  export default charactersSlice.reducer;