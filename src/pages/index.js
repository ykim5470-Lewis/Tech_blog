import React from "react";
import { list } from "../components/course_units/index";
import Layout from "../components/style/Layout";
import styled from "styled-components";

const Home = () => {
  return (
    <Background>
      <Layout>{list}</Layout>;<p></p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxWYua8RBnqNmqUM82X7rsLPZvUNEW2qTQJDzi6HPxCRxD01C4");
  background-repeat: no-repeat;
  background-color: lightblue;
  background-size: 100%;
`;
