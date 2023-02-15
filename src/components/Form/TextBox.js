import Form from "react-bootstrap/Form";
import styled from "styled-components";

const TextBoxForm = styled(Form)`
    flex : 1 1 18%;
`;

function TextBox(props) {
    return (
        <TextBoxForm>
            <Form.Control
            type="text"
            id={`EditTextBox${props.idx}`}
            aria-describedby={`EditTextBox${props.idx}`}
            />
            <Form.Text
            id={`EditTextBox${props.idx}`}
            muted 
            />
        </TextBoxForm>
    );
}

export default TextBox;