import React, {useEffect, useState} from 'react';
async function getRecipe(url) {
    const response = await fetch(url);
    if (response === 200) {
        return response.json();
    }

    throw new Error('Something went wrong');
}
const url = 'https://api.spoonacular.com/recipes/random?apiKey=1e1f617afebc4d7a99e0140bed9763dd';
const recipe = getRecipe(url);

function RecipeDetails() {
    const [data,setData] = useState([]);
    useEffect(() => {
        recipe.then(data=>setData(data))
        console.log(recipe)
    },[])
    return (
        <>
            <div className="card bg-base-100 w-screen/2 shadow-sm flex flex-row ">
                {data.map((item,index)=><div key={index}>
                <figure>
                    <img
                        src={item.image} width={200} className={
                        'mask-b-from-30%'
                    }
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>)}
            </div>

        </>
    );
}

export default RecipeDetails;