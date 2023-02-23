import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import FilterTitle from "../Text/FilterTitle";
import styled from "styled-components";

const StyledRow = styled(Row)`
    padding: 0;
    margin: 0;
`;

const StyledCol = styled(Col)`
    padding-top: 20px;
    padding-right: 0;
    margin: 0;

   
`;

const StyledTitleCol = styled(StyledCol)`
    @media only screen and (min-width: 1200px) {
        border-right: none;
    }
`;

function FilterRow({name, title, children, type, filterInfo, setFilterInfo}) {
    return (
        <StyledRow>
            {/* 필터 제목 생성 */}
            <StyledTitleCol xs={4} sm={4} md={3} lg={3} xl={2} xxl={2}>
                <FilterTitle name={name} title={title} type={type} filterInfo={filterInfo} setFilterInfo={setFilterInfo}/>
            </StyledTitleCol>
            {/* 필터 폼 생성 */}
            <StyledCol xs={8} sm={8} md={9} lg={9} xl={10} xxl={10}>
                {children}
            </StyledCol>
        </StyledRow>
    );
}

export default FilterRow;