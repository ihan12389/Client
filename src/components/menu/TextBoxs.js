import Container from "react-bootstrap/Container";
import styled from "styled-components";
import TextBox from "../Form/TextBox";

const TextBoxContainer = styled(Container)`
    display : flex;
    flex-directions : row;
    flex-wrap : wrap;
    justify-content : space-between;
    aign-content : flex-start;
    gap : 10px;
`;

function TextBoxs({words, onChange}) {
    var TextBoxNum = 10;

    return (
        <TextBoxContainer>
           {makeArray(TextBoxNum).map((r) => (
                <TextBox num={r} t={words} cc={onChange} key={r}/>
            ))}
        </TextBoxContainer>
    )
}

function makeArray(num) {
    var arr = [];

    for (var i=0; i<num; i++) {
        arr.push(i);
    }

    return arr;
}

export default TextBoxs;