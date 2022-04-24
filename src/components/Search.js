import { BsSearch, BsFillCaretDownFill } from "react-icons/bs";

function DropDown(){
    return(
        <ul>
            <li>애기이름</li>
            <li>예약자명</li>
            <li>날짜</li>
            <li>asc</li>
            <li>desc</li>
        </ul>
    )
}

//소스들은 위로 쌓고 가장 중요한 컴포넌트를 렌더 직전, 맨밑에 쓰는 방향으로
function Search(){
    return(
        <div id="search">
            <p>
                <BsSearch />
                <input type="text" placeholder="search" />
                <button type="button">
                    정렬하기
                    <BsFillCaretDownFill />
                </button>
            </p>
            <DropDown />
        </div>
    )
}

export default Search