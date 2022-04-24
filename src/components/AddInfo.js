import { BsFillTrashFill } from "react-icons/bs";

function AddInfo(){
    return(
        <li>
            <dl>
                <dt></dt>
                <dd></dd>
                <dd className="desc"></dd>
                <dd className="date"></dd>
            </dl>
            <p>
                <button>
                    <BsFillTrashFill />
                </button>
            </p>
        </li>
    )
}

export default AddInfo