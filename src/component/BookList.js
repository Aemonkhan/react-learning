import React,{useContext,useState} from 'react'
import {ThemesContextA} from '../Context/ThemesContextA'
function BookList(){
const {islight,light,dark}=useContext(ThemesContextA)
const ui=islight ? light : dark ;
console.log(ui)
const [books,setbooks]=useState([
 {name:'htmlcss',Auther:'Ducket'},
 {name:'js',Auther:'mark'}, 
 {name:'react',Auther:'jar'},
])


return(
    <>
    <div style={{backgroundColor: ui.bg, color: ui.text}}>
        <ul>
            {books.map((item)=>(
                 <li key={item.name}>{`${item.name} is written by ${item.Auther}`}</li>)

            )}
        </ul>
    </div>
    </>
)
}
export default BookList