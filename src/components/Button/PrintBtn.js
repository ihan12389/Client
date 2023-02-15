import Button from "react-bootstrap/Button";
import styled from "styled-components";

const PrinttButton = styled(Button)`
width : 20%;
height : 40px;
text-align : center;
`;

function PrinttBtn(props) {
    return (
        <PrinttButton variant="success">
            {props.name}
        </PrinttButton>
    );
}

export default PrinttBtn;