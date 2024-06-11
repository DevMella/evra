import React from 'react'
import light_mode from '../../assets/Website/light_mode.jpg'
import dark_mode from '../../assets/Website/dark_mode.jpg'

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    console.log(element);

    React.useEffect(() =>{
      localStorage.setItem("theme",theme);
      if(theme === "dark"){
        element.classList.add("dark");
        element.classList.add("dark");
      }else{
        element.classList.remove("light");
        element.classList.remove("dark");
      }
    });

  return (
    <div className='relative'>
        <img onClick={() => setTheme(theme === 'dark' ? "light" : "dark")} src={light_mode} className={`w-12 absolute right-0 z-10 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"} translate-all duration-300`} alt="" />
        <img onClick={()=> setTheme(theme === 'dark' ? "bgColor" : "black")} src={dark_mode} className={`w-12 cursor-pointer `} alt="" />
    </div>
  )
}

export default DarkMode
