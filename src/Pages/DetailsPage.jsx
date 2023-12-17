import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BlogDetails from "../Component/BlogDetails";
import { postDetails } from "../APIRequest/APIRequest";
import Loader from "../Component/Loader";

const DetailsPage = () => {
  let { postID } = useParams();
  let [list, SetList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      SetList(res);
    })();
  }, [postID]);
  return (
    <Layout>{list === null ? <Loader /> : <BlogDetails list={list} />}</Layout>
  );
};

export default DetailsPage;
