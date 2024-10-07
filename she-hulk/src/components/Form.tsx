import react from 'react'

const Form = () => {
  return(
    <form className = 'mb-4 font-primary w-full'>
      <input type = "text"  className = 'outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder= 'What task do you have today?'/>
    </form>
  )
}

export default Form