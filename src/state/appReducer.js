import { createSlice } from '@reduxjs/toolkit';
import { getCityWeather } from '../weatherData';


export const slice = createSlice({
  name: 'weather',
  initialState: {
    city: "",
    weather: null
  },
  reducers: {
    selectCity: (state, action) => {
        const w = getCityWeather(action.payload)
        if(w) {
            state.city = action.payload;
            state.weather = w;
        }
    }
  },
});

export const { selectCity } = slice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectedCity = state => state.appReducer.city;
export const selectedWeather = state => state.appReducer.weather;

export default slice.reducer;
