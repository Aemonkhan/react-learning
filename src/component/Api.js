import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Api() {
    const [post, setPost] = useState([])
    useEffect(() => {
        console.log('i am in useEffect')
        Axios.get(' https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data)
            const arr = res.data.slice(0, 10)

            setPost(arr)
            // ('https://www.themealdb.com/api/json/v1/1/random.php')
            // setRecipes(res.data.meals[0]);
        })
    }, [])

    return (
        <div>
            {/* Hello world! hi */}
            {/* <h1>{recipes.strCategory}</h1>
    <p>{recipes.strMeal}{recipes.strInstructions}</p>
    <img src={recipes.strMealThumb}class="img-rounded" alt="Cinque Terre" width="304" height="236"></img> */}


        </div>
    )
}
export default Api;