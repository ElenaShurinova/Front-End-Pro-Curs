import React from 'react';
import { useForm } from 'react-hook-form';

export default ProductsFilter ({ onFilter })  {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const priceMin = watch('priceMin', 0);
    const priceMax = watch('priceMax', 0);

    const onSubmit = (data) => {
        onFilter(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="priceMin">Сумма от:</label>
                <input
                    type="number"
                    id="priceMin"
                    {...register('priceMin', { 
                        required: 'Это поле обязательно', 
                        valueAsNumber: true, 
                        validate: value => value >= 0 || 'Сумма не может быть отрицательной' 
                    })}
                />
                {errors.priceMin && <span>{errors.priceMin.message}</span>}
            </div>
            <div>
                <label htmlFor="priceMax">Сумма до:</label>
                <input
                    type="number"
                    id="priceMax"
                    {...register('priceMax', { 
                        required: 'Это поле обязательно', 
                        valueAsNumber: true, 
                        validate: value => 
                            value >= priceMin || 'Сумма до должна быть больше суммы от' 
                    })}
                />
                {errors.priceMax && <span>{errors.priceMax.message}</span>}
            </div>
            <div>
                <label htmlFor="productName">Название товара:</label>
                <input
                    type="text"
                    id="productName"
                    {...register('productName')}
                />
            </div>
            <button type="submit">Применить фильтры</button>
        </form>
    );
};