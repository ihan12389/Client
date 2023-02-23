import FilterRow from "./FilterRow"; 
import JongSeongFilterForm from "../Form/JongSeongFilterForm";
import JoongSeongFilterForm from "../Form/JoongSeongFilterForm";
import ChoSeongFilterForm from "../Form/ChoSeongFilterForm";
import NormalFilterForm from "../Form/NormalFilterForm";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";

const StyledContainer = styled(Container)`
    padding : 0px;
    margin : 0px;
    width : 100%;
`;

function Filter(props) {
    const filterTypeMap = {
        "onset": ChoSeongFilterForm,
        "nucleus": JoongSeongFilterForm,
        "coda": JongSeongFilterForm,
        "normal": NormalFilterForm,
    };

    const FilterForm = filterTypeMap[props.filterType] || NormalFilterForm;

    return(
        <StyledContainer>
            <FilterRow name={props.name} title={props.title} filterInfo={props.filterInfo} setFilterInfo={props.setFilterInfo} type={props.type}>
                <FilterForm
                    title={props.title}
                    seq={props.seq}
                    textList={props.textList}
                    type={props.type} 
                    default={props.default}
                    filterInfo={props.filterInfo}
                    setFilterInfo={props.setFilterInfo}
                />
            </FilterRow>
        </StyledContainer>
    );
}

export default Filter;