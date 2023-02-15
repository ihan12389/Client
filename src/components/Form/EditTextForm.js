import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";

const StyledCotnainer = styled(Container)`
    display : flex;
`;

function EditTextForm() {
    const TextBoxNum = 10;
    return (
        <StyledCotnainer>
            {() => {
                for(let i = 0; i < TextBoxNum; i++) {
                    <div>a</div>
                }
            }}
        </StyledCotnainer>
    );
}

export default EditTextForm;