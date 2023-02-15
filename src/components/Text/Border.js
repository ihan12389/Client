import styled from "styled-components";

const BorderContainer = styled.div`
    grid-area : border;
    display : box;
    height : 0px;
    margin : 0px;
    padding : 0px;
    border-top : 1px solid grey;
`;

function Border() {
    return (
            <BorderContainer />
    );
}

export default Border;