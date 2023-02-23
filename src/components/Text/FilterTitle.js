import { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.div`
    text-align : center;
    flex-grow : 100;
`;

const TextContainer = styled.div`
    display : flex;
    padding-right : 25px;
    padding-left : 25px;
`;

const Input = styled.input`
  display: ${props => props.type === 'radio' ? 'none' : 'block'};
`;

function LabelFilter(props) {
    Input.display = "none";

    const [checked, setChecked] = useState(false);

    const onClick = (e) => {
        if (props.type !== "radio") {
            var allCheckedName = props.title + "AllChecked";
            
            props.setFilterInfo(prevFilterInfo => ({
                ...prevFilterInfo,
                [allCheckedName]:!checked,
            }));
        }
    }

    useEffect(()=>{
        var name = props.title + "AllChecked";
        var propsChecked = props.filterInfo[name];

        if (propsChecked !== checked)
            setChecked(propsChecked);

    }, [props.filterInfo[props.title + "AllChecked"]]);

    return (
        <TextContainer>
            {/* 필터의 제목 */}
            <Text>{props.name}</Text>
            <Input 
            type="checkbox" 
            name={`all-${props.title}`} 
            onClick={onClick} 
            checked={checked} />
        </TextContainer>
    );
}

export default LabelFilter; 