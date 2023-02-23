import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";

const StyledContainer = styled(Container)`
    display : grid;
    grid-row-gap : 10px;
    grid-template-columns : repeat(7, 1fr);
    grid-template-areas : 
    "first first first first first . ."
    "second second second second second . ."
    "third third third third third . ."
    ". fourth fourth fourth . . ."
    ". . . fifth . . ."
    ;
    padding : 0px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const FirstRow = styled(Row)`grid-area : first;`;
const SecondRow = styled(Row)`grid-area : second;`;
const ThirdRow = styled(Row)`grid-area : third;`;
const FourthRow = styled(Row)`
    grid-area : fourth;
    grid-template-columns: repeat(3, 1fr);
`;
const FifthRow = styled(Row)`
    grid-area : fifth;
    grid-template-columns: repeat(1, 1fr);
`;

const ChoSeongFilterForm = (props) => {
    const { filterInfo, setFilterInfo } = props;

    const textList = ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ', 'ㅇ','ㅋ', 'ㄷ', 'ㅂ', 'ㅈ', 'ㅎ','ㄲ', 'ㅌ', 'ㅍ', 'ㅊ', 'ㄹ','ㄸ', 'ㅃ', 'ㅆ','ㅉ'];

    // // 전체선택용 체크박스 전용 이벤트처리
    useEffect(() => {
        const name = props.title;
        const allCheckedName = props.title + "AllChecked";
        const isAllChecked = filterInfo[allCheckedName];
        let updatedFilterInfo = [...filterInfo[name]];

        if (isAllChecked) {
            if (textList.length !== updatedFilterInfo.length) {
                document.getElementsByName(props.title).forEach(item => item.checked = true);
            }
        } 
        else {
            if (textList.length === updatedFilterInfo.length) {
                document.getElementsByName(props.title).forEach(item => item.checked = false);
            }
        }

    }, [filterInfo[props.title + "AllChecked"]]);


    const onClick = (e) => {
        const value = e.target.value;
        const name = props.title;
        const allCheckedName = props.title + "AllChecked";

        let updatedFilterInfo = [...filterInfo[name]];
        let updatedAllChecked = filterInfo[allCheckedName];

        if (e.target.checked) {
            if (!updatedFilterInfo.includes(value)) {
                updatedFilterInfo = [...updatedFilterInfo, value];
            }
        } else {
            if (updatedFilterInfo.includes(value)) {
                updatedFilterInfo = updatedFilterInfo.filter(item => item !== value);
            }
        }

        // 체크박스 전체를 선택했다면 부모 컴포넌트에 AllChecked 했다고 정보를 전달
        if (textList.length === updatedFilterInfo.length) {
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

    const arr1 = ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ', 'ㅇ'];
    const arr2 = ['ㅋ', 'ㄷ', 'ㅂ', 'ㅈ', 'ㅎ'];
    const arr3 = ['ㄲ', 'ㅌ', 'ㅍ', 'ㅊ', 'ㄹ'];
    const arr4 = ['ㄸ', 'ㅃ', 'ㅆ'];
    const arr5 = ['ㅉ'];

    return(
        <Form>
            <StyledContainer>
                <FirstRow>
                    {arr1.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="onset"
                            value={item}
                            id={`${item}`}
                            onClick={onClick}
                         />
                    ))}
                </FirstRow>
                <SecondRow>
                    {arr2.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="onset"
                            value={item}
                            id={`${item}`}
                            onClick={onClick}
                         />
                    ))}
                </SecondRow>
                <ThirdRow>
                    {arr3.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="onset"
                            value={item}
                            id={`${item}`}
                            onClick={onClick}
                         />
                    ))}
                </ThirdRow>
                <FourthRow>
                    {arr4.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="onset"
                            value={item}
                            id={`${item}`}
                            onClick={onClick}
                         />
                    ))}
                </FourthRow>
                <FifthRow>
                    {arr5.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="onset"
                            value={item}
                            id={`${item}`}
                            onClick={onClick}
                         />
                    ))}
                </FifthRow>
            </StyledContainer>
        </Form>
    );
}

export default ChoSeongFilterForm;