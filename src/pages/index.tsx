import Head from "next/head";

import Layout from "components/layout";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("dashboard");
  }, []);
  return true;
};

export default Home;
