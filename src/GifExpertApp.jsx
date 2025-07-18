import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from './components/GifGrid'
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory  = (newCategory)=>{
      if (categories.includes(newCategory)) return;
        // categories.push (newCategory);
        // console.log (newCategory)
        setCategories ([newCategory, ...categories]);
        // setCategories (cat => [...cat, "Valorant"])
    }


  return (
    <>
    
     <h1>GifExpertApp</h1>

     
     <AddCategory 
     onNewCategory = {(value) => onAddCategory (value)}
     currentCategories={categories}
     />
            { 
            categories.map( (category) => (
            <GifGrid 
            key={category} 
            category={category}/>

                ))
            }
            
         

          </>
  )
}
