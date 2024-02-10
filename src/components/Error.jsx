import {useNavigate} from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate()
  return (
    <div className=" text-white justify-center align-middle gap-4 w-full items-center flex flex-col font-poppins">
      <h1 className="text-9xl">☹</h1>
      <h1 className="text-6xl">404</h1>
      <p className="text-3xl">Sorry, Request Not Found!</p>
      <button onClick={()=>navigate(-1)} className='underline bg-black w-40 h-10 rounded-xl hover:text-primary'>Go Back</button>
    </div>
  );
};

export default Error;
