import { BsFillCalendarEventFill } from "react-icons/bs";

function AddAppointment(){
    return(
        <div id="appoint">
            <h4>
                <BsFillCalendarEventFill style={{paddingRight: "10px"}} />
                예약하기
            </h4>
            <ul>
                <li>
                    <label htmlFor="userName">집사명</label>
                    <input id="userName" type="text" />
                </li>
                <li>
                    <label htmlFor="userChildren">애기명</label>
                    <input id="userChildren" type="text"/>
                </li>
                <li>
                    <label htmlFor="userDate">예약일</label>
                    <input id="userDate" type="date"/>
                </li>
                <li>
                    <label htmlFor="userTime">예약 시간</label>
                    <input id="userTime" type="time"/>
                </li>
                <li>
                    <label htmlFor="userDes">기타 설명</label>
                    <textarea id="userDes" cols="30" rows="10" placeholder="기타 설명"></textarea>
                </li>
            </ul>
            <p>
                <button type="submit">제출하기</button>
            </p>
        </div>
    )
}

export default AddAppointment