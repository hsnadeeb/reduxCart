import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  { id: 1, price: 20, title: "Apple", description: "fruit" },
  { id: 2, price: 15, title: "Banana", description: "yellow fruit" },
  { id: 3, price: 30, title: "Orange", description: "citrus fruit" },
  { id: 4, price: 25, title: "Grapes", description: "small juicy fruit" },
  { id: 5, price: 18, title: "Strawberry", description: "red berry" },
  { id: 6, price: 22, title: "Mango", description: "tropical fruit" },
  { id: 7, price: 12, title: "Pineapple", description: "sweet tropical fruit" },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
