import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Overwatch 2"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [ newCategory, ...cat]);
  };

  return (
    <>
      <h1 className="GifExpertApp">GifExpertApp</h1>
      
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid 
        key={category}
        category={category} />
      ))}
    </>
  );
};
