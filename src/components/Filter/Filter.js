import FilterRow from "./FilterRow"; 
import JongSeongFilterForm from "../Form/JongSeongFilterForm";
import JoongSeongFilterForm from "../Form/JoongSeongFilterForm";
import ChoSeongFilterForm from "../Form/ChoSeongFilterForm";
import NormalFilterForm from "../Form/NormalFilterForm";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import { useRef, useImperativeHandle } from "react";

const StyledContainer = styled(Container)`
    padding : 0px;
    margin : 0px;
    width : 100%;
`;

function Filter(props) {
    return(
        <StyledContainer>
            {/* filterType에 따라 필터 종류 선택 */}
            {
                props.filterType == "choseong" ? (
                <FilterRow name={props.name}>
                    <ChoSeongFilterForm/>
                </FilterRow>
                ) : (
                    props.filterType == "joongseong" ? (
                    <FilterRow name={props.name}>
                        <JoongSeongFilterForm />
                    </FilterRow>
                ) : (
                    props.filterType == "jongseong" ? (
                    <FilterRow name={props.name}>
                        <JongSeongFilterForm />
                    </FilterRow>
                    ) : (
                    <FilterRow name={props.name}>
                        <NormalFilterForm
                            title={props.title}
                            seq = {props.seq}
                            textList = {props.textList}
                            type = {props.type} 
                            default = {props.default}
                        />
                    </FilterRow>
                    )
                ))
            }
        </StyledContainer>
    );
}

export default Filter;