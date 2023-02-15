import styled from "styled-components";

const Text = styled.div`
    text-align : center;
    flex-grow : 100;
`;

const TextIcon = styled.div`
    align-self  : flex-start;
    flex-grow : 1;
`;

const TextContainer = styled.div`
    display : flex;
    padding-right : 25px;
    padding-left : 25px;
`;

function LabelFilter(props) {
    return (
        <TextContainer>
            {/* 필터의 제목 */}
            <Text>{props.name}</Text>
            <TextIcon>⬜</TextIcon>
        </TextContainer>
    );
}

export default LabelFilter;