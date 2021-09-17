import { types } from '../types/types';
import { db } from '../firebase/firebaseConfig';
import { fileUpLoad } from '../helpers/fileUpLoad';
import { loadProduct } from '../helpers/loadProduct';
import Swal from 'sweetalert2'

//Agregar un producto nuevo a la base de datos
export const AddProduct = (product, file) => {
    return async (dispatch) => {
        let fileUrl = []

        try {
            fileUrl = await fileUpLoad(file)
        } catch (error) {
            file = []

        }

        const newProduct = {
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            url: fileUrl
        }

        const docRef = await db.collection(`Producto`).add(newProduct);
        const id = docRef.id
        dispatch(addNewProduct(id, newProduct))
    }

};

//funcion para agregar productos
export const addNewProduct = (id, product) => ({
    type: types.AddNewProduct,
    payload: {
        id, ...product
    }
});

//Muestra el producto que esta siendo cargado actualmente se usa solo para editar y eliminar
export const activeProduct = (id, newProduct) => ({
    type: types.ActiveProduct,
    payload: {
        id,
        ...newProduct
    }
});

//Se descarga el dato del helper enviando el return a set product es igual listProduct
export const startLoandingProduct = () => {
    return async (dispatch) => {
        const product = await loadProduct();
        dispatch(setProduct(product))
    }
}

//se envia el payload al reducer para actualizar el store
export const setProduct = (id, newProduct) => {
    return {
        type: types.LoadProduct,
        payload: id, newProduct
    }
}

// Se hace la actualizacion para editar el producto
export const startSaveProduct = (product, file) => {

    return async (dispatch) => {

        let fileUrl = []

        try {
            fileUrl = await fileUpLoad(file)
        } catch (error) {
            fileUrl = product.url
        }
        console.log("desde startSaveProduct", fileUrl);
        if (!product.url) {
            delete product.url;
        }

        const editProduct = {
            title: product.title,
            sipnosis: product.sipnosis,
            gender: product.gender,
            url: fileUrl
        }

        const productToFirestone = { ...editProduct }
        delete productToFirestone.id

        Swal.fire({
            title: 'Cargando...',
            text: 'Por favor espere ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        await db.doc(`Producto/${product.id}`).update(editProduct)
        console.log(editProduct);
        dispatch(refreshProduct(product.id, editProduct));
        Swal.fire('Saved', product.title, 'success');
        dispatch(startLoandingProduct())
    }
}

export const refreshProduct = (id, product) => ({
    type: types.UpdateProduct,
    payload: {
        id,
        product: {
            id,
            ...product
        }
    }
});

//limpiar
export const clearProduct = () => {
    return {
        type: types.CleanProduct,
    }
}

//Eliminar el product de la base de datos
export const startDeleting = (id) => {
    return async (dispatch) => {

        try {
            await db.collection(`Producto`).doc(id).delete();
            dispatch(deleteProduct(id));
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Producto Borrado',
                showConfirmButton: false,
                timer: 2500
            })
            dispatch(startLoandingProduct())
        } catch (error) {
            Swal.fire(
                'Error!',
                'Hubo un problema al elminar el registro!',
                'error'
            )
        }
    }
}

//Envia el id para los type y se haga el procedimiento de eliminar el producto
export const deleteProduct = (id) => ({
    type: types.DeleteProduct,
    payload: {
        ...id
    }
});

//Cargar la imagen en el store
export const startUpLoading = (file) => {
    return async (dispatch, getSate) => {

        const { active } = getSate().product;
        console.log("activeaction", active);


        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const fileUrl = await fileUpLoad(file)
        console.log("desdeaction", fileUrl);
        //active.url = fileUrl
        //dispatch(startSaveProduct(active))

        Swal.close()
    }
}






