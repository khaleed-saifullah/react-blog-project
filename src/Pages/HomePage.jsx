import { useEffect, useState } from "react";
import BlogList from "../Component/BlogList";
import Layout from "../Layout/Layout";
import { postLatest } from "../APIRequest/APIRequest";
import Loader from "../Component/Loader";

const HomePage = () => {
  let [list, SetList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postLatest();
      SetList(res);
    })();
  }, []);
  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default HomePage;
