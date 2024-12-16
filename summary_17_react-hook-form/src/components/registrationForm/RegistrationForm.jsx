import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

  const submitHandler = (formData) => {
    console.log(formData);
  };

  return (
    <form className='registrationForm' onSubmit={handleSubmit(submitHandler)}>
      <h2>User Registration Form</h2>
      
      {/* Name Input */}
      <input
        type='text'
        placeholder='Name'
        {...register('name', {
          required: { value: true, message: 'Name is required!' },
          minLength: { value: 3, message: 'Name must be at least 3 characters long!' },
          maxLength: { value: 20, message: 'Name must be less than 20 characters long!' }
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      
      {/* Surname Input */}
      <input
        type='text'
        placeholder='Surname'
        {...register('surname', {
          required: { value: true, message: 'Surname is required!' },
          minLength: { value: 3, message: 'Surname must be at least 3 characters long!' },
          maxLength: { value: 20, message: 'Surname must be less than 20 characters long!' }
        })}
      />
      {errors.surname && <p>{errors.surname.message}</p>}
      
      {/* Email Input */}
      <input
        type='text'
        placeholder='Email'
        {...register('email', {
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Invalid email format!'
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      
      {/* Phone Input */}
      <input
        type='text'
        placeholder='Phone'
        {...register('phone', {
          required: { value: true, message: 'Phone number is required!' },
          pattern: {
            value: /^0\d{9}$/,
            message: 'Phone number must be in the format 0XXXXXXXXX!'
          }
        })}
      />
      {errors.phone && <p>{errors.phone.message}</p>}
      
      {/* Account Type Select */}
      <p>Select an account type:</p>
      <select
        {...register('accountType', {
          required: { value: true, message: 'Account type is required!' },
          validate: (value, formValues) => {
            if ((value === 'advanced' || value === 'pro') && !formValues.email) {
              return 'Email is required for advanced or pro account types!';
            }
            return true;
          }
        })}
      >
        <option value='basic'>Basic</option>
        <option value='advanced'>Advanced</option>
        <option value='pro'>Pro</option>
      </select>
      {errors.accountType && <p>{errors.accountType.message}</p>}
      
      <button onClick={() => { clearErrors(); }}>Clear form errors</button>
      <button type='submit'>Submit</button>
    </form>
  );
}