import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useState } from "react";

const TextBoxForm = styled(Form)`
    flex : 1 1 18%;
`;

function TextBox({num, cc, t}) {
    const [text, setText] = useState(t);

    const c = (e) => {
        // setText(e.target.value);

        cc(e.target.value, num);
    }

    return (
        <TextBoxForm>
            <Form.Control
            type="text"
            id={`EditTextBox${num}`}
            aria-describedby={`EditTextBox${num}`}
            value={text[num]}
            onChange={c}
            />
            <Form.Text
            id={`EditTextBox${num}`}
            muted
            >
            </Form.Text>
        </TextBoxForm>
    );
}

export default TextBox;