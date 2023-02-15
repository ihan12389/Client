import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useImperativeHandle, useRef, useState } from "react";

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

const FirstRow = styled.div`
    grid-area : first;
    display : grid;
    grid-template-columns: repeat(5, 1fr);
`;
const SecondRow = styled.div`
    grid-area : second;
    display : grid;
    grid-template-columns: repeat(5, 1fr);
`;
const ThirdRow = styled.div`
    grid-area : third;
    display : grid;
    grid-template-columns: repeat(5, 1fr);
`;
const FourthRow = styled.div`
    grid-area : fourth;
    display : grid;
    grid-template-columns: repeat(3, 1fr);
`;
const FifthRow = styled.div`
    grid-area : fifth;
    display : grid;
    grid-template-columns: repeat(1, 1fr);
`;

const ChoSeongFilterForm = () => {
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
                            name="choseong"
                            value={item}
                         />
                    ))}
                </FirstRow>
                <SecondRow>
                    {arr2.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="choseong"
                            value={item}
                         />
                    ))}
                </SecondRow>
                <ThirdRow>
                    {arr3.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="choseong"
                            value={item}
                         />
                    ))}
                </ThirdRow>
                <FourthRow>
                    {arr4.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="choseong"
                            value={item}
                         />
                    ))}
                </FourthRow>
                <FifthRow>
                    {arr5.map((item) => (
                        <Form.Check
                            label={item}
                            type="checkbox"
                            name="choseong"
                            value={item}
                         />
                    ))}
                </FifthRow>
            </StyledContainer>
        </Form>
    );
}

export default ChoSeongFilterForm;