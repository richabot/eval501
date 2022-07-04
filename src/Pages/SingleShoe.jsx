import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getshoes } from "../Redux/AppReducer/action";
const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appreducer.shoes);
  const [currentBook, setCurrentBook] = useState({});
  useEffect(() => {
    if (!data.length) {
      dispatch(getshoes());
    }
  }, [dispatch,data.length]);

  useEffect(() => {
    if (id) {
      const temp = data.find((data) => data.id === +id);
      temp && setCurrentBook(temp);
    }
  }, [data, id]);


  return (
    <div style={{ textAlign: "center" }}>
      <h2>{currentBook?.name}</h2>
      <div>
        <img src={currentBook?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentBook?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
