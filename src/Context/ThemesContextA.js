import React, { Component, createContext } from 'react'
export const ThemesContextA = createContext();
export default class ThemeContextProvider extends Component{
    state ={
        islight:true,
        light:{text:'black',bg:'white'},
        dark:{text:'white',bg:'black'}
    }
    render(){
        // console.log(this.props.children)
    return(
<>
<ThemesContextA.Provider value={{...this.state}}>
    {this.props.children}
</ThemesContextA.Provider>
</>
    )
    }
}