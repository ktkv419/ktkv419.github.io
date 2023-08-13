import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAppInitialValue {
  username: string
}

const appInitialValue = {
  username: '',
} as IAppInitialValue

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialValue,
  reducers: {
    // setUsername(state, action: PayloadAction<string>) {
    // 	state.username = action.payload
    // }
  },
})
