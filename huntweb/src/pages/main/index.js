import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
     state = {
          products: [],
          productInfo: {},
          page: 1,
     };

     componentDidMouth(){
          this.loadProducts();
     }

     loadProducts = async (page = 1) =>{
          const response = await api.get(`/products?page=${page}`);

          const { docs, ...productInfo } = response.data;

          //console.log(response.data.docs);

          this.setState({ products: docs , productInfo ,page});
     };

     PrevPage = () => {
          const { page , productInfo } = this.state;

          if(page === 1) return;

          const pageNumber = page - 1;

          this.loadProducts(pageNumber);
     };

     NextPage = () => {
          const { page , productInfo} = this.state;

          if(page === productInfo.pages) return;

          const pageNumber = page + 1;

          this.loadProducts(pageNumber);
     }

     render(){
          const { products ,page , productInfo} = this.state;
          return(
          <div className="product-list">
               {products.map(product => (
                    <article key={product._id}>
                         <strong>{product.title}</strong>
                         <p>{product.description}</p>
                         <Link to={`/product/${product._id}`}>Acessar</Link>
                    </article>
               ))}
               <div className="actions">
                    <button disable={page === 1} onClick={this.PrevPage}>Anterior</button>
                    <button disable={page === productInfo.pages } onClick={this.NextPage}>Proximo</button>
               </div>
          </div>
          );
     }
}