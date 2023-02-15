import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Form from "react-bootstrap/Form"
import Border from "../Text/Border";

const StyledContainer = styled(Container)`
    display : grid;
    grid-row-gap : 10px;
    grid-template-columns : repeat(7, 1fr);
    grid-template-areas : 
    "first first first first first first first"
    "border border border border border border border"
    "second . third . fourth . ."
    "fifth . sixth . . . ."
    ". . seventh . . . ."
    ". . eighth . . . ."
    ". . ninth . . . ."
    ". . tenth . . . ."
    ;
    padding : 0px;
`;

const FirstRow = styled.div`
    grid-area : first;
    display : grid;
    grid-template-columns: repeat(7, 1fr);
`;
const SecondRow = styled.div`
    grid-area : second;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;
const ThirdRow = styled.div`
    grid-area : third;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;
const FourthRow = styled.div`
    grid-area : fourth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;
const FifthRow = styled.div`
    grid-area : fifth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

const SixthRow = styled.div`
    grid-area : sixth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

const SeventhRow = styled.div`
    grid-area : seventh;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

const EighthRow = styled.div`
    grid-area : eighth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

const NinthRow = styled.div`
    grid-area : ninth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

const TenthRow = styled.div`
    grid-area : tenth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

function JongSeongFilterForm() {
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
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </FirstRow>
                <Border />
                <SecondRow>
                    {arr2.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </SecondRow>
                <ThirdRow>
                    {arr3.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </ThirdRow>
                <FourthRow>
                    {arr4.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </FourthRow>
                <FifthRow>
                    {arr5.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </FifthRow>
                <SixthRow>
                    {arr6.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </SixthRow>
                <SeventhRow>
                    {arr7.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </SeventhRow>
                <EighthRow>
                    {arr8.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </EighthRow>
                <NinthRow>
                    {arr9.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </NinthRow>
                <TenthRow>
                    {arr10.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="jongseong"
                            value={item}
                         />
                    ))}
                </TenthRow>
            </StyledContainer>
        </Form>
    );
}

export default JongSeongFilterForm;