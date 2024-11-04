import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Backbutton = ({destination="/"}) => {
  return (
    <div className='' >
      <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg  '> 
      Back 
      </Link>
    </div>
  )
}

export default Backbutton
