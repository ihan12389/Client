import { useEffect } from "react";
import Form from "react-bootstrap/Form";

function NormalFilterForm(props) {
    const { filterInfo, setFilterInfo } = props;

    // 전체선택용 체크박스 전용 이벤트처리
    useEffect(() => {
        const name = props.title;
        const allCheckedName = props.title + "AllChecked";
        const isAllChecked = filterInfo[allCheckedName];
        let updatedFilterInfo = [...filterInfo[name]];

        if (isAllChecked) {
            if (props.textList.length !== updatedFilterInfo.length && props.type !== "radio") {
                document.getElementsByName(props.title).forEach(item => item.checked = true);
            }
        } else {
            if (props.textList.length === updatedFilterInfo.length && props.type !== "radio") {
                document.getElementsByName(props.title).forEach(item => item.checked = false);
            }
        }

    }, [filterInfo[props.title + "AllChecked"]]);


    const onClickSecond = (e) => {
        const value = e.target.value;
        const name = props.title;
        const allCheckedName = props.title + "AllChecked";
        let updatedFilterInfo = [...filterInfo[name]];
        let updatedAllChecked = filterInfo[allCheckedName];

        if (e.target.checked) {
            if (!updatedFilterInfo.includes(value)) {
                updatedFilterInfo = [...updatedFilterInfo, value];
            }
            
            if (props.type === "radio") {
                updatedFilterInfo = updatedFilterInfo.filter(item => item === value);
            }
        } else {
            if (updatedFilterInfo.includes(value)) {
                updatedFilterInfo = updatedFilterInfo.filter(item => item !== value);
            }
        }

        // 체크박스 전체를 선택했다면 부모 컴포넌트에 AllChecked 했다고 정보를 전달
        if (props.textList.length === updatedFilterInfo.length) {
            updatedAllChecked = true;
        } else {
            updatedAllChecked = false;
        }

        setFilterInfo(prevFilterInfo => ({
            ...prevFilterInfo,
            [name]: updatedFilterInfo,
            [allCheckedName]: updatedAllChecked,
        }));
    }

    return(
        // 일반 필터 메뉴 Form
        <Form>
            {/* 입력 받은 텍스트 리스트를 토대로 타입(radio, checkbox)에 해당하는 폼 생성 */}
            <div key={`inline-${props.type}`} className="mb-3">
                {props.textList.map((text, index) => {
                    if (index == props.default) {
                        {/* 디폴트 체크가 되어 있지 않은 폼 생성 */}
                        return (
                            <Form.Check
                                key = {`${text}`}
                                inline
                                label={`${text}`}
                                value={`${text}`}
                                name={`${props.title}`}
                                type={`${props.type}`}
                                id={`inline-${props.type}-${props.seq}-${props.title}${index}`}
                                onClick={onClickSecond}
                                defaultChecked
                            />
                        );
                    }
                    else {
                        {/* 디폴트 체크가 되어 있는 폼 생성 */}
                        return (
                            <Form.Check
                                key = {`${text}`}
                                inline
                                label={`${text}`}
                                value={`${text}`}
                                name={`${props.title}`}
                                type={`${props.type}`}
                                id={`inline-${props.type}-${props.seq}-${props.title}${index}`}
                                onClick={onClickSecond}
                            />
                        );
                    }
                })}
            </div>
        </Form>
    );
}

export default NormalFilterForm;