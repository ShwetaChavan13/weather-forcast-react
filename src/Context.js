import React,{useState} from "react";
export const Context=React.createContext();
export const ContextProvider=({children})=>{
    const[weatherData,setWeatherData]=useState(undefined);
    return(
        <Context.Provider value={{weatherData,setWeatherData}}>
            {children}
        </Context.Provider>
    );
};