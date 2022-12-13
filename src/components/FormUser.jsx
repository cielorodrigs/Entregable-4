import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css/'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo,setCloseForm}) => {

  console.log(updateInfo)

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])

  const {register, reset, handleSubmit}= useForm()

  const submit = data => {
    if(updateInfo) {
      updateUserById(updateInfo.id, data)
      setUpdateInfo()
    }else 
    {
    createNewUser(data)
    }
    setCloseForm(true)
  reset({
    email: "",
    first_name: "",
    last_name: "",
    birthday: "",
    password: ""
    })
  }

return (
  <form className='form' onSubmit={handleSubmit(submit)}>
    <div onClick={() => setCloseForm(true)} className='form_x'>X</div>
    <h2 className='form_title'>{updateInfo ? 'Update User' : 'Create User'}</h2>
    <div className='form_div'>
      <label className='' htmlFor="email">Email</label>
      <input className='form_input' type="email" id="email" {...register("email")}/>
    </div>
    <div className='form_div'>
      <label className='form_label' htmlFor="password">Password</label>
      <input className='form_input' type="password" id="password" {...register("password")}/>
    </div> 
    <div className='form_div'>
      <label className='' htmlFor="first_name">First Name</label>
      <input className='form_input' type="text" id="first_name"{...register("first_name")}/>
    </div>   
    <div className='form_div'>
      <label className='' htmlFor="last_name">Last Name</label>
      <input className='form_input' type="text" id="last_name" {...register("last_name")}/>
    </div>    
    <div className='form_div'>
      <label className='' htmlFor="bithday">Bithday</label>
      <input className='form_input' type="date" id="bithday" {...register("birthday")}/>
    </div>   
    <button className='form_btn'>Submit</button>
    </form>
)
}

export default FormUser