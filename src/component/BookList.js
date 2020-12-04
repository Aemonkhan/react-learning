import React,{useContext,useState} from 'react'
import {ThemesContextA} from '../Context/ThemesContextA'
function BookList(){
const {isLight,Light,dark}=useContext(ThemesContextA)
const ui=isLight ? Light : dark ;
console.log(ui)
const [books,setbooks]=useState([
 {name:'htmlcss',Auther:'Ducket'},
 {name:'js',Auther:'mark'},   
])


return(
    <>
    <div style={{backgroundColor: ui.bg, color: ui.text}}>
        <ul>
            {books.map((item)=>(
                 <li key={item.name}>{`${item.name} is written by ${item.author}`}</li>)

            )}
        </ul>
    </div>
    </>
)
}
export default BookList