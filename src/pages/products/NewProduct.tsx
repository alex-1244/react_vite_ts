import { useState } from "react";

interface IProduct{
    name: string
}

function NewProduct(){
    const [product, setProduct] = useState<IProduct>({name:""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({...product, name: e?.target.value});
    };

    return (
        <form>
          <h3>New Product</h3>

          <input type="text" onChange={handleChange} value={product.name} />
          <input type="submit" value="Save"/>
        </form>
      );
}

export default NewProduct;