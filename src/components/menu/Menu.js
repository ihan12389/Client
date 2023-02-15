import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import TextBoxs from "./TextBoxs";
import Filters from "./Filters";
import Form from "react-bootstrap/Form";
import SubmitBtn from "../Button/SubmitBtn";
import PrinttBtn from "../Button/PrintBtn";
import axios from "axios";

const MenuContainer = styled(Container)`
    padding : 0px;
`;
const MenuForm = styled(Form)`
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 30px;
`;


const Menu = () => {
    // 제출 버튼 이벤트
    function submitHandleEvent(e) {
        // 새로고침 방지
        e.preventDefault();

        // 단어집 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='words']");
        var wordsArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                wordsArr.push(c.value);
            }
        }

        // 학년 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='grade']");
        var gradeArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                gradeArr.push(c.value);
            }
        }

        // 글자수 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='characters']");
        var charactersArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                charactersArr.push(c.value);
            }
        }

        // 초성 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='choseong']");
        var choseongArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                choseongArr.push(c.value);
            }
        }

        // 종성 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='jongseong']");
        var jongseongArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                jongseongArr.push(c.value);
            }
        }

        // 중성 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='joongseong']");
        var joongseongArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                joongseongArr.push(c.value);
            }
        }

        // 음운변동 필터 체크된 값들 가져오기
        var arr = document.querySelectorAll("input[name='phonological']");
        var phonologicalArr = [];
        for (var i=0; i<arr.length; i++) {
            var c = arr[i];
            if (c.checked) {
                phonologicalArr.push(c.value);
            }
        }

        var filter_info = {
            'length': charactersArr,
            'onset': choseongArr,
            'nucleus': joongseongArr,
            'coda': jongseongArr,
            'change': phonologicalArr,
            'source': wordsArr,
            'grade': gradeArr,
        }

        console.log(filter_info);

        // 서버 측으로 요청 보내기
        axios.post("http://127.0.0.1:8000/wordcard/result/", {
            filter_info:{filter_info},
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
        });
    }

    return (
        <MenuContainer>
            <MenuForm  onSubmit={submitHandleEvent}>
                <Filters/>
                <SubmitBtn type="submit" name="제출" />
                <TextBoxs />
                <PrinttBtn name="인쇄" />
            </MenuForm>
        </MenuContainer>
    );
}

export default Menu;