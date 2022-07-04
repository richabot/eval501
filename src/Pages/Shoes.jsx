import React from "react";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { useEffect } from "react";
import { getshoes } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation, Link } from "react-router-dom";

import "../App.css"
const Shoes = () => {
  const data = useSelector((state) => state.appreducer.shoes);
  const [searchParams] = useSearchParams();
 
  //const [searchParams] = useSearchParams();

  const location = useLocation();

  const dispatch = useDispatch();


  useEffect(() => {
    if (!data.length || location.search) {
      // const sortBy = searchParams.get("sortBy");
 
      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          
          // _order: sortBy,
        },
      };
    if(getBooksParams.params.category)
  dispatch(getshoes(getBooksParams));




    }
  }, [data.length,dispatch,location.search,searchParams]);
  return (
    <div>
      <Filter />
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}
    >
      {data?.map((item) => (
        <Link key={item.id} to={`/shoes/${item.id}`}>
          <ShoeCard item={item} />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Shoes;





