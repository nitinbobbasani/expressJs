import  { useContext } from 'react'
import { ThemeContext } from '../context/context'

const ChildC = () => {

    
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
    }
    
  return (
    <div>
        <button className="button button--theme" onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChildC