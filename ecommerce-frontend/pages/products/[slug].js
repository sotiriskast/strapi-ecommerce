import Head from "next/head";
import {API_URL, fromImageToUrl} from "../../utils/urls";

const Product = ({product}) => {
    return (
        <div>
            <Head>
                {product.attributes.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {product.attributes.meta_description &&
                    <meta name={'description'} content={product.meta_description}/>
                }

            </Head>
            <h3>{product.attributes.name}</h3>
            <img width={100} src={fromImageToUrl(product.attributes.image)} alt=""/>
            <h3>{product.attributes.content}</h3>
            <h3>{product.attributes.price}</h3>
        </div>
    )
}

export async function getServerSideProps( content) {

    // Fetch data from external API
    const res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${content.params.slug}&populate=image`)
    const data = await res.json()
    const product=data.data[0];
    // Pass data to the page via props
    return { props: { product } }

}

export default Product;