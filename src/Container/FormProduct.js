import React from 'react';
import CardProuctBD from '../Components/CardProuctBD';
import FormAdd from '../Components/Form/FormAdd';
import FormEdit from '../Components/Form/FormEdit';
import { useSelector } from 'react-redux';

const FormProduct = () => {

    const { active } = useSelector(store => store.product)

    return (
        <div>
            {
                (active !== null)
                    ? <FormEdit />
                    : <FormAdd />
            }
            <CardProuctBD />
        </div>
    )
}

export default FormProduct
