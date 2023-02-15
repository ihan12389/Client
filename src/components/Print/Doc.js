import styled from "styled-components";

const PageContainer = styled.div`
background-color : black;
border : 3px solid black;
height : 100%;
width : 100%;
`;

const WordContainer = styled.div`

`;

const Doc = (props) => {
    const {printRef} = props;

    return(
            <div class="page" size="A4" ref={printRef}>
                <div class="subpage">Page 1/2</div>
            </div>
    );
}

export default Doc;