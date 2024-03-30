import Link from "next/link"
import {IoReturnDownBack} from 'react-icons/io5'

const StudioHeader = (props:any) => {
  return (
    <div>
       <div className="bg-black p-5 text-gray-100 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-3 font-semibold hover:text-blue-600"><IoReturnDownBack className="2xl"/>Go to Website</Link>
      <Link href={"/"}>
          <strong className="text-2xl font-bold ">ESHOP</strong>
        </Link>
        <p>Admin Studio For E-Shop </p>
      </div>
     
      {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader
