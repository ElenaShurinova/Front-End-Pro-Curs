import { useForm } from 'react-hook-form';

export default function SimpleForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className='simpleForm' onSubmit={handleSubmit(onSubmit)}>
      <h2>Simple form to deal with react-hook-form</h2>
     
      <input type='text' placeholder='Name'{...register('name', { required: true })} />
      <input type='text' placeholder='Email'{...register('email', {})} />
      <input type='text' placeholder='Phone' {...register('phone', {})} />
      <p>Select an account type:</p>
      <select {...register('accountType', { required: true })}>

        <option value='basic'>Basic</option>
        <option value='advanced'>Advanced</option>
        <option value='pro'>Pro</option>
      </select>
      <button>on</button>
    </form>
  )
}