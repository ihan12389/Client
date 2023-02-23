import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Form from "react-bootstrap/Form"
import Border from "../Text/Border";
import { useEffect } from "react";

const StyledContainer = styled(Container)`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 
    "first first first first first first first"
    "border border border border border border border"
    "second . third . . fourth ."
    "fifth . sixth . . . ."
    ". . seventh . . . ."
    ". . eighth . . . ."
    ". . ninth . . . ."
    ". . tenth . . . .";
  padding: 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const FirstRow = styled(Row)`
  grid-area: first;
  grid-template-columns: repeat(7, 1fr);
`;

const SecondRow = styled(Row)`grid-area: second;`;
const ThirdRow = styled(Row)`grid-area: third;`;
const FourthRow = styled(Row)`grid-area: fourth;`;
const FifthRow = styled(Row)`grid-area: fifth;`;
const SixthRow = styled(Row)`grid-area: sixth;`;
const SeventhRow = styled(Row)`grid-area: seventh;`;
const EighthRow = styled(Row)`grid-area: eighth;`;
const NinthRow = styled(Row)`grid-area: ninth;`;
const TenthRow = styled(Row)`grid-area: tenth;`;

function JongSeongFilterForm(props) {
    const { filterInfo, setFilterInfo } = props;

    const textList = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㄲ', 'ㅅ', 'ㅆ', 'ㅈ', 'ㅊ', 'ㅎ'];

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

    const arr1 = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ'];
    const arr2 = ['ㅋ'];
    const arr3 = ['ㅌ'];
    const arr4 = ['ㅍ'];
    const arr5 = ['ㄲ'];
    const arr6 = ['ㅅ'];
    const arr7 = ['ㅆ'];
    const arr8 = ['ㅈ'];
    const arr9 = ['ㅊ'];
    const arr10 = ['ㅎ'];

    return(
        <Form>
            <StyledContainer>
                <FirstRow>
                    {arr1.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </FirstRow>
                <Border />
                <SecondRow>
                    {arr2.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </SecondRow>
                <ThirdRow>
                    {arr3.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </ThirdRow>
                <FourthRow>
                    {arr4.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </FourthRow>
                <FifthRow>
                    {arr5.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </FifthRow>
                <SixthRow>
                    {arr6.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </SixthRow>
                <SeventhRow>
                    {arr7.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </SeventhRow>
                <EighthRow>
                    {arr8.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </EighthRow>
                <NinthRow>
                    {arr9.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </NinthRow>
                <TenthRow>
                    {arr10.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name={props.title}
                            value={item}
                            id={`coda-${item}`}
                            onClick={onClick}
                         />
                    ))}
                </TenthRow>
            </StyledContainer>
        </Form>
    );
}

export default JongSeongFilterForm;