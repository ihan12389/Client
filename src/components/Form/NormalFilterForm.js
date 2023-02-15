import Form from "react-bootstrap/Form";

function NormalFilterForm(props) {
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
                                id={`inline-${props.type}-${props.seq}`}
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
                                id={`inline-${props.type}-${props.seq}`}
                            />
                        );
                    }
                })}
            </div>
        </Form>
    );
}

export default NormalFilterForm;