import Container from "react-bootstrap/Container";
import Filter from "../Filter/Filter";
import styled from "styled-components";
import { useRef } from "react";

const FilterContainer = styled(Container)`
    display : flex;
    flex-direction : column;
    padding : 0px;
    margin : 0px;
`;

function Filters(props) {
    return (
        <FilterContainer>
            {/* 단어집 필터 */}
            <Filter
                name="단어집"
                title="words"
                seq={getSeq()}
                type={`checkbox`}
                textList={['교과서단어', '교육과정']}
             />
            {/* 학년 필터 */}
            <Filter
                name="학년"
                title="grade"
                seq={getSeq()}
                type={`checkbox`}
                textList={['1학년', '2학년', '3학년', '4학년', '5학년', '6학년']}
             />
            {/* 글자수 필터 */}
            <Filter
                name="글자수"
                title="characters"
                seq={getSeq()}
                type={`checkbox`}
                textList={['1', '2', '3', '4', '5 ↑']}
             />
            {/* 초성 필터 */}
            <Filter
                name="초성"
                filterType="choseong"
             />
            {/* 중성 필터 */}
            <Filter
                name="중성"
                filterType="joongseong"
             />
            {/* 종성 필터 */}
            <Filter
                name="종성"
                filterType="jongseong"
             />
            {/* 음운변동 필터 */}
            <Filter
                name="음운변동"
                seq={getSeq()}
                type={`radio`}
                textList={['있음', '없음']}
                default={1}
                title="phonological"
             />
        </FilterContainer>
    )
}

function getSeq() {
    var seq = 1;

    return seq++;
}

export default Filters;