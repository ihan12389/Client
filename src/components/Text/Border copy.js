import styled from "styled-components";

const BorderContainer = styled.div`
    grid-area : borderBold;
    display : box;
    height : 0px;
    margin : 0px;
    padding : 0px;
    border-top : 3px solid grey;
`;

function BorderBold() {
    return (
            <BorderContainer />
    );
}

export default BorderBold;