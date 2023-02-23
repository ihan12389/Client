import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import Filters from "./Filters";
import Form from "react-bootstrap/Form";
import SubmitBtn from "../Button/SubmitBtn";
import axios from "axios";
import { useEffect, useState } from "react";

const MenuContainer = styled(Container)`
    padding : 0px;
    width: 1200px;
    margin: 0 auto;
`;

const MenuForm = styled(Form)`
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 30px;
`;

const WordCardContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Card = styled.div`

  width: 300px;
  height: 300px;
  margin: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: 'Nanum Barun Gothic', sans-serif;
  font-size: 2rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  
  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }
  
  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const sourceTextList = ["교과서단어", "교육과정"];
const gradeTextList = ["0학년", "1학년", "2학년", "3학년", "4학년", "5학년", "6학년"];
const lengthTextList = ["1", "2", "3", "4", "5 ↑"];
const onsetTextList = ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ', 'ㅇ','ㅋ', 'ㄷ', 'ㅂ', 'ㅈ', 'ㅎ','ㄲ', 'ㅌ', 'ㅍ', 'ㅊ', 'ㄹ','ㄸ', 'ㅃ', 'ㅆ','ㅉ'];
const nucleusTextList = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅑ', 'ㅕ', 'ㅛ', 'ㅠ', 'ㅔ', 'ㅘ', 'ㅙ', 'ㅝ', 'ㅞ', 'ㅢ', 'ㅒ', 'ㅖ'];
const codaTextList = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㄲ', 'ㅅ', 'ㅆ', 'ㅈ', 'ㅊ', 'ㅎ'];

const Menu = () => {
    // 서버로부터 받아올 단어들
    const [words, setWords] = useState([]);
    const [filterInfo, setFilterInfo] = useState({
        length: [],
        onset: [],
        nucleus: [],
        coda: [],
        change: [],
        source: [],
        grade: [],
        sourceAllChecked: false,
        gradeAllChecked: false,
        lengthAllChecked: false,
        onsetAllChecked: false,
    });

    function updateFilterList(checkbox, allChecked, textList, prevFilterList) {
      if (allChecked) {
        return textList;
      } else if (checkbox.length === textList.length) {
        return [];
      } else {
        return prevFilterList;
      }
    }

    useEffect(() => {
      const {
        sourceAllChecked,
        gradeAllChecked,
        lengthAllChecked,
        onsetAllChecked,
        nucleusAllChecked,
        codaAllChecked,
        source,
        grade,
        length,
        onset,
        nucleus,
        coda,
      } = filterInfo;
    
      const updatedSourceFilterList = updateFilterList(source, sourceAllChecked, sourceTextList, filterInfo.source);
      const updatedGradeFilterList = updateFilterList(grade, gradeAllChecked, gradeTextList, filterInfo.grade);
      const updatedLengthFilterList = updateFilterList(length, lengthAllChecked, lengthTextList, filterInfo.length);
      const updatedOnsetFilterList = updateFilterList(onset, onsetAllChecked, onsetTextList, filterInfo.onset);
      const updatedNucleusFilterList = updateFilterList(nucleus, nucleusAllChecked, nucleusTextList, filterInfo.nucleus);
      const updatedCodaFilterList = updateFilterList(coda, codaAllChecked, codaTextList, filterInfo.coda);
    
      setFilterInfo({
        ...filterInfo,
        source: updatedSourceFilterList,
        grade: updatedGradeFilterList,
        length: updatedLengthFilterList,
        onset: updatedOnsetFilterList,
        nucleus: updatedNucleusFilterList,
        coda: updatedCodaFilterList,
      });
    }, [filterInfo["gradeAllChecked"], filterInfo["lengthAllChecked"], filterInfo["sourceAllChecked"], filterInfo["onsetAllChecked"], filterInfo["nucleusAllChecked"], filterInfo["codaAllChecked"]]);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const checkedWords = filterInfo.source;
      const checkedGrades = filterInfo.grade;
      const checkedLengths = filterInfo.length;
      const checkedOnsets = filterInfo.onset;
      const checkedNuclei = filterInfo.nucleus;
      const checkedCodas = filterInfo.coda;
      const checkedChanges = filterInfo.change;
    
      const newFilterInfo = {
        source: checkedWords,
        grade: checkedGrades,
        length: checkedLengths,
        onset: checkedOnsets,
        nucleus: checkedNuclei,
        coda: checkedCodas,
        change: checkedChanges,
      };
    
      try {
        const response = await axios.post(
          "/api",
          { filter_info: newFilterInfo }
        );
        setWords(response.data.words);
        setWords(["s", "u", "c", "c", "e", "s", "s"]);
        console.log(response);
      } catch (error) {
        setWords(["안녕하세요오오오오오오오오오오오", "에러가", "발생", "했습니다", "ㅎㅎ"]);
        console.log(error);
      }
    };

    return (
        <MenuContainer>
            <MenuForm  onSubmit={handleSubmit}>
                <Filters filterInfo={filterInfo} setFilterInfo={setFilterInfo} />
                <SubmitBtn type="submit" name="제출" />
            </MenuForm>
            <WordCardContainer>
            {words.map((word, index) => (
              <Card key={index}>{word}</Card>
              ))}
            </WordCardContainer>
        </MenuContainer>
    );
}

export default Menu;