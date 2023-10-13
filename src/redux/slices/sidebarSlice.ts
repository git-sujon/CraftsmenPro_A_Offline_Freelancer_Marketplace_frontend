import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SidebarState {
  open: boolean
}

const initialState: SidebarState = {
  open: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
   showSidebarDrawer: (state)=> {
    state.open = true
   },
   onSidebarDrawerClose: (state)=> {
    state.open = false
   }
  },
})

// Action creators are generated for each case reducer function
export const { showSidebarDrawer, onSidebarDrawerClose   } = sidebarSlice.actions

export default sidebarSlice.reducer