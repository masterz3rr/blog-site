import React from 'react'
import { useSelector } from 'react-redux'


export default function ThemeProvider({children}) {
    const {theme} = useSelector(state => state.theme);
  return (
    <div className={theme}>
        <div className="bg-white text-gray-900 dark:text-gray-200 dark:bg-[rgb(16,23,42)] transition 2s min-h-screen">
            {children}
        </div>
    </div>
  )
}
