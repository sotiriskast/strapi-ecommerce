import Head from "next/head";
import products from '../products.json';
import {fromImageToUrl} from "../../utils/urls";

const product = products[0];

const Product = () => {
    return (
        <div>
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {product.meta_description &&
                    <meta name={'description'} content={product.meta_description}/>
                }

            </Head>
            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.image)} alt=""/>
            <h3>{product.content}</h3>
            <h3>{product.price}</h3>
        </div>
    )
}
export default Product;