import Button from "react-bootstrap/Button";
import styled from "styled-components";

const SubmitButton = styled(Button)`
width : 20%;
height : 40px;
text-align : center;
`;

function SubmitBtn(props) {
    return (
        <SubmitButton
        variant="primary"
        type="submit"
        >{props.name}</SubmitButton>
    );
}

export default SubmitBtn;