import { useRef } from "react"
import { Button } from "../widgets/Button"
import { Text } from "../widgets/Text"
import { TextField } from "../widgets/TextField"
import { ProductContext } from "../context/product-context"
import { useContext } from "react"

export const Form=({collectData,markCount,deleteRecords})=>{
    const name=useRef();  
    const price=useRef();
    const quantity=useRef();
    const pcontext=useContext(ProductContext);
    const add=()=>{
        const product={
            "name":name.current.value,
            "price":price.current.value,
            "quantity":quantity.current.value,
            "isMarked":false
        }
        collectData(product);
        console.log('Add call',product);
    }
    return(
        <div>
          <p class="text-center text-primary ">  <Text msg="Billing App"/></p>
          <p class="p-3 mb-2 bg-info text-white"> <TextField val={pcontext.currentProduct?.name} inputRef={name} lbl="Name " /></p>
          <p class="p-3 mb-2 bg-info text-white"> <TextField val={pcontext.currentProduct?.price}inputRef={price}lbl="Price" /></p>
          <p class="p-3 mb-2 bg-info text-white"> <TextField val={pcontext.currentProduct?.quantity}inputRef={quantity} lbl="Quantity" /></p>
            <br/>
            <Button fn={add} val="Add"/>
            <Button fn={pcontext.changeProducts}val="Delete" disable={markCount===0}/>
            {/* <ProductContext.Consumer>
                {(value)=>{
                 <Button fn={value.changeProducts} val="Delete" disable={markCount===0}/>

                }}
            <Button val="Delete" disable={markCount===0}/>
            </ProductContext.Consumer> */}
        </div>
    )
}