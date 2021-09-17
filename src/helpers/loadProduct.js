import { db } from '../firebase/firebaseConfig';

export const loadProduct = async () => {

    const productStore = await db.collection(`Producto`).get();
    const product = [];
    productStore.forEach(ele => {
        product.push({
            id: ele.id,
            ...ele.data()
        })
    })
    //console.log(product);
    return product;
}