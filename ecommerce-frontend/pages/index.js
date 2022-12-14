import Head from 'next/head'
import {API_URL, fromImageToUrl} from "../utils/urls";

import {twoDecimals} from "../utils/format";

import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Home({products}) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {products.data.map(product => (
                console.log(product.attributes.name),

                <div key={product.attributes.slug} className={styles.product}>
                    <Link href={`/products/${product.attributes.slug}`}>
                        <a>
                        <div className={styles.product_Row}>
                            <div className={styles.product_colImg}>
                                <img width={150}  src={fromImageToUrl(product.attributes.image)} />

                            </div>
                            <div className={styles.product_Col}>
                                {product.attributes.name} {product.attributes.price}
                            </div>
                        </div>
                        </a>
                    </Link>
                </div>

            ))}

        </div>
    )
}

export async function getStaticProps() {
    const product_res = await fetch(`${API_URL}/api/products?populate=image`)
    const products= await product_res.json();
    return{
        props:{
            products
        }
    }
}