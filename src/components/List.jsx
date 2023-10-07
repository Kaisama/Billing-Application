import { useContext, useState } from 'react';
import './List.css';
import { ProductContext } from '../context/product-context';
const List=({products,isMarking})=>{
    const context=useContext(ProductContext);
return(<table className="table table-striped ">
    <thead >
        <tr >
           <th>Id</th> 
           <th>Name</th>
           <th>Price</th>
           <th>Quantity</th>
           <th>Amount</th>
           <th>Operation</th>
        </tr>
    </thead>
    <tbody>
{products.map((product,index)=><tr className={product.isMarked?'table-danger':''} key={index}>
    <td>{index+1}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.quantity}</td>
    <td>{product.price*product.quantity}</td>
    <td><i onClick={()=>{
        context.getProduct(product);
    }}class="fa fa-edit hand me-5" aria-hidden="true">
        
    </i>
        <i onClick={()=>{
        product.isMarked=!product.isMarked;
        isMarking();
    }}class="fa fa-trash hand" aria-hidden="true"></i></td>
</tr>)}
    </tbody>
</table>)
}
export default List;