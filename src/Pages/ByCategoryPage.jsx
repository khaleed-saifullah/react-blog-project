import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { postByCat } from "../APIRequest/APIRequest";
import BlogList from "../Component/BlogList";
import Loader from "../Component/Loader";

const ByCategoryPage = () => {
  let { categoryID } = useParams();

  let [list, SetList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCat(categoryID);
      SetList(res);
    })();
  }, [categoryID]);
  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default ByCategoryPage;
