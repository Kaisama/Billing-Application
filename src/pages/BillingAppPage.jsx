import { useState } from "react"
import { Form } from "../components/Form"
import List from "../components/List"
import { Text } from "../widgets/Text"
import { ProductContext } from "../context/product-context"

export const BillingAppPage=()=>{
    const [products,setProducts]=useState([]);
    const[product,setProduct]=useState(null);

    const isMarking=()=>{
        setProducts([...products]);
    }
    const collectData=(product)=>{
        const clone=[...products];
        clone.push(product);
        setProducts(clone);
        //console.log('product data',product);
    }
    const deleteForever=()=>{
        setProducts(products.filter(product=>!product.isMarked));
    }
    const getProduct=(product)=>{
        setProduct(product);
        console.log(product);
    }


    
    const compute=()=>
        products.reduce((sum,currentProduct)=>sum+(currentProduct.price*currentProduct.quantity),0);
    const getMarkedCount=()=>
        products.filter(product=>product.isMarked).length;
    return(

        <div className="container">
            
            <ProductContext.Provider value={{products:products,changeProducts:deleteForever,total:0,mark:0,getProduct:getProduct,currentProduct:product}}>
            <Form deleteRecords={deleteForever} collectData={collectData} markCount={getMarkedCount()}/>
            <br/>
            <p class="p-3 mb-2 bg-info text-white text-center text-primary ">  <Text msg="Total Records :- " val={products.length}/></p>
            <p class="p-3 mb-2 bg-info text-white  text-center text-primary">  <Text msg="Marks Records :- " val={getMarkedCount()}/></p>
            <List products={products} isMarking={isMarking}/>
            <p class="p-3 mb-2 bg-info text-white  text-center text-primary"> <Text msg="Grand Total :- " val={compute()}/></p>
            </ProductContext.Provider>
        </div>
    )
}