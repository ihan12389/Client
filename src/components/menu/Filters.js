import Container from "react-bootstrap/Container";
import Filter from "../Filter/Filter";
import styled from "styled-components";

const FilterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;

const FILTERS = [
    {
      name: "단어집",
      title: "source",
      type: "checkbox",
      textList: ["교과서단어", "교육과정"],
    },
    {
      name: "학년",
      title: "grade",
      type: "checkbox",
      textList: ["0학년", "1학년", "2학년", "3학년", "4학년", "5학년", "6학년"],
    },
    {
      name: "글자수",
      title: "length",
      type: "checkbox",
      textList: ["1", "2", "3", "4", "5 ↑"],
    },
    {
      name: "초성",
      filterType: "onset",
      title: "onset",
      type:"checkbox",
    },
    {
      name: "중성",
      filterType: "nucleus",
      title: "nucleus",
      type:"checkbox",
    },
    {
      name: "종성",
      filterType: "coda",
      title: "coda",
      type:"checkbox",
    },
    {
      name: "음운변동",
      type: "radio",
      textList: ["있음", "없음"],
      default: 1,
      title: "change",
    },
];


function Filters({filterInfo, setFilterInfo}) {
    return (
        <FilterContainer>
            {FILTERS.map((filter, idx) => (
                    <Filter key={idx} filterInfo={filterInfo} setFilterInfo={setFilterInfo} {...filter} />
                ))}
        </FilterContainer>
    )
}

export default Filters;