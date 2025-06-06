import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import { Rowlist } from '../../components/Rows/RowList/RowList';


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
}

export default Home