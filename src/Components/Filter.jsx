import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
//import { getshoes } from "../Redux/AppReducer/action";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();


  const urlCategory = searchParams.getAll("category");

  
  const [category, setCategory] = useState(urlCategory || []);
  const handleChange = (e) => {
    let newCategory = [...category];
    const option = e.target.value;

    //if option is already present then remove it else ppush it.
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
     
      setSearchParams(params);
     // dispatch(getshoes({ params: { category } }));
     
    }
  }, [category, searchParams, dispatch,setSearchParams]);
  

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers"
            defaultChecked={category.includes("Sneakers")}
            onChange={handleChange} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers"
            defaultChecked={category.includes("Loafers")}
            onChange={handleChange} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas"
            defaultChecked={category.includes("Canvas")}
            onChange={handleChange}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots"
            defaultChecked={category.includes("Boots")}
            onChange={handleChange} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
