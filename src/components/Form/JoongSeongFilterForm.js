import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Border from "../Text/Border";

const StyledContainer = styled(Container)`
    display : grid;
    grid-row-gap : 10px;
    grid-template-columns : repeat(7, 1fr);
    grid-template-areas : 
    "first first first first first first first"
    "second second second second . . third"
    "border border border border border border border"
    "fourth fourth fourth fourth fourth . fifth"
    ". . . . . . sixth"
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
    grid-template-columns: repeat(4, 1fr);
`;
const ThirdRow = styled.div`
    grid-area : third;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;
const FourthRow = styled.div`
    grid-area : fourth;
    display : grid;
    grid-template-columns: repeat(5, 1fr);
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

function JoongSeongFilterForm() {
    const arr1 = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ', 'ㅐ'];
    const arr2 = ['ㅑ', 'ㅕ', 'ㅛ', 'ㅠ'];
    const arr3 = ['ㅔ'];
    const arr4 = ['ㅘ', 'ㅙ', 'ㅝ', 'ㅞ', 'ㅢ'];
    const arr5 = ['ㅒ'];
    const arr6 = ['ㅖ'];

    return(
        <Form>
            <StyledContainer>
                <FirstRow>
                    {arr1.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="joongseong"
                            value={item}
                         />
                    ))}
                </FirstRow>
                <SecondRow>
                    {arr2.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="joongseong"
                            value={item}
                         />
                    ))}
                </SecondRow>
                <ThirdRow>
                    {arr3.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="joongseong"
                            value={item}
                         />
                    ))}
                </ThirdRow>
                <Border />
                <FourthRow>
                    {arr4.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="joongseong"
                            value={item}
                         />
                    ))}
                </FourthRow>
                <FifthRow>
                    {arr5.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="joongseong"
                            value={item}
                         />
                    ))}
                </FifthRow>
                <SixthRow>
                    {arr6.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="joongseong"
                            value={item}
                         />
                    ))}
                </SixthRow>
            </StyledContainer>
        </Form>
    );
}

export default JoongSeongFilterForm;