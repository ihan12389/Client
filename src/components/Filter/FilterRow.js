import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import FilterTitle from "../Text/FilterTitle";
import styled from "styled-components";

const StyledRow = styled(Row)`
    padding : 0px;
    margin : 0px;
    width : 100%;
`;

const StyledCol = styled(Col)`
    border-right : 2px solid black;
    padding-top : 20px;
    padding-right : 0px;
    margin : 0px;
`;

function FilterRow({name, children}) {
    return (
            <StyledRow>
                {/* 하나의 필터 메뉴 생성 */}
                <StyledCol xs={4} sm={4} md={3} lg={3} xl={2} xxl={2}>
                    {/* 필터의 제목 생성*/}
                    <FilterTitle name={name}/>
                </StyledCol>
                <StyledCol xs={8} sm={8} md={8} lg={9} xl={8} xxl={8}>
                    {/* 필터의 폼 생성*/}
                    {children}
                </StyledCol>
            </StyledRow>
    );
}

export default FilterRow;