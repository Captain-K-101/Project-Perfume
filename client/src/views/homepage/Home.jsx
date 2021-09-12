import { useEffect, useState } from 'react';
import ProductsGrid from '../../components/products/ProductsGrid';
import StoreHeader from '../../components/header/StoreHeader';
import Footer from '../../components/footer/Footer';
import './home.css'
const Home = () => {
  useEffect(() => {
    document.body.classList.remove('noscroll-web');
    document.body.classList.remove('trans');
  }, []);

  const [customer, setCustomer] = useState(1);

  return (
    <>
     <a href='#'><marquee class="GeneratedMarquee" direction="left" scrollamount="50" behavior="scroll">Discount Image.....</marquee></a>
      <StoreHeader customer={customer} customerChange={(e) => setCustomer(e)} />
      <ProductsGrid customer={customer} />
      <Footer />
    </>
  );
};

export default Home;
