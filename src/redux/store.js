import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './features/tasks/tasksSlice'


const store = configureStore({
    reducer: {
        taskSlice: taskSlice
    },

})

export default store
