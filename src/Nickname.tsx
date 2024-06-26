// 닉네임설정페이지
import { useState } from "react";
import styled, {css} from "styled-components"
import { useNavigate } from "react-router-dom";

function Nickname(): JSX.Element {
  const [nickname, setNickname] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newNickname: string = event.target.value;
    setNickname(newNickname);
    // 여기에서 닉네임 유효성 체크
    const isValid: boolean =
    newNickname.length > 0 && newNickname.length <= 6 && /^[a-zA-Z0-9가-힣]*$/g.test(newNickname) && !/\s/g.test(newNickname);

    setIsValidNickname(isValid); // isValidNickname 상태 업데이트
  };

  const handleNextButtonClick = (): void => {
    if (isValidNickname) {
      // isValidNickname가 유효한 경우 다음 페이지로 이동
      navigate('/setProfile');
    }
  };

  const BackBtn = (): void => {
    navigate("/"); // 바로 이전 페이지로 이동
  };

  return (
    <Container>
      <WhiteBox> 
        <ButtonBox>
          <PageTitle>닉네임 설정</PageTitle>
          <PreviousButton onClick={BackBtn}>←</PreviousButton>
          <h5 style={{ position: "absolute", top: "295px", fontFamily: "Inter", fontSize: "20px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>6글자 이내로 작성해주세요 ! 띄어쓰기 x</h5>
          <InputBar placeholder='    나 키우기에서 사용할 닉네임을 입력해주세요.'
            id="nickname" type="text" value={nickname} onChange={handleNicknameChange}></InputBar>
          <div className="help">
            {isValidNickname ? (
              <span className="success" style={{ position: "absolute", color: '#22C807', fontFamily: "Inter", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top: "56%", left: "24%" }}>사용할 수 있는 닉네임입니다.</span>
            ) : (
              <span className="fail" style={{ position: "absolute", color: '#F00', fontFamily: "Inter", fontSize: "23px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top: "56%", left: "24%" }}>사용할 수 없는 닉네임입니다.</span>
            )}
          </div>
          <NextButton onClick={handleNextButtonClick}>다음</NextButton>
        </ButtonBox>
      </WhiteBox>
    </Container>
  );
  
}

export default Nickname;
// Container 스타일을 styled.div로 생성
const Container = styled.div`
  background: #FFD66C;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviousButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  position: absolute;
  top: 112px;
  left: 146px;
  right: 1242px;
  width: 59px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  color: rgba(158, 158, 158, 0.63);
  text-align: center;
  font-family: NanumSquare;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: poInter;
`;

const PageTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  margin-top: 20%;
`;

const NextButton = styled.button`
  position: absolute;
  border: none;
  margin-top: 1150px;
  width: 300px;
  height: 77px;
  border-radius: 40px;
  background: #FFD66C;
  cursor: poInter;
  color: #000000;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-family: Inter;
  font-weight: 600;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const WhiteBox = styled.div`
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 86.25%;
  height: 81.54%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBar = styled.input`
  position: absolute;
  margin-top: 700px;
  width: 934px;
  height: 90px;
  border-radius: 60px;
  border: none;
  color: #black;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #F8EFD8;
`;
