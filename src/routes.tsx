import {useState} from 'react'
import styled, {css} from "styled-components"
import Home from "./Home.tsx";
import Profile from "./Profile.tsx";
import Calendar from "./Calendar.tsx";
import "./App.css";
import Login from "./Login.tsx";
import Nickname from "./Nickname.tsx";
import SetProfile from "./SetProfile.tsx";
import Character from "./Character.tsx";
import Auth from "./Auth.tsx";
import MyProfile from "./MyProfile.tsx";
export type View = "HOME" | "DIARY" | "PROFILE";

// //navigation 높이
// export const NAV_HEIGHT = 160;

// const Wrap = styled.div`
//     display: flex;
//     width: 100%;
//     height: 100vh;

//     min-width: 870px;

//     align-items: center;
//     justify-content: center;

//     flex-direction: column;
// `

// const NavigationWrap = styled.div<{ $bgColor?: string }>`
//     display: flex;
//     align-content: space-around;
//     justify-content: center;
//     align-items: center;

//     width: 100%;
//     height: ${NAV_HEIGHT}px;
//     box-sizing: border-box;
// `

// const MainContentWrap = styled.div`
//     width: 100%;
//     height: calc(100vh - ${NAV_HEIGHT}px);
//     vertical-align: center;
// `

// const ToolTip = styled.div`
//     display: none;

//     position: absolute;
//     top: 120%;
//     left: 50%;
//     transform: translateX(-50%);

//     width: max-content;
//     height: min-content;

//     padding: 2px 6px;
//     border-radius: 4px;

//     background: #FFD66C;
//     color: black;
//     font-weight: normal;
//     font-size: 20px;

//     z-index: 100;
// `

// export const MainButton = styled.button<{$currentButton?:View}>`
//     display: flex;
//     position: relative;

//     align-items: center;
//     vertical-align: center;

//     color:white;
//     font-weight: bold;
//     font-size: 28px;

//     background: #C5D887;
//     &:hover {
//         background: #FFD66C;
//         transition: 0.5s;
//         box-shadow: inset 0 0 10px #999;
//     }

//     &:hover > ${ToolTip} {
//         display: block;
//     }

//     padding: 8px 16px;
//     margin: 0 104px;
//     width: 152px;
//     height: 52px;
//     border-radius: 50px;
//     border: none;

//     min-width: 132px;

//     box-shadow: 1px 2px 4px 1px #999;

//     justify-content: center;
// `

// export const ConfirmButton = styled.button<{ $bgColor?: string, $isSelected?: number}>`
//     display: flex;
//     flex-grow: 1;

//     background: ${props => props.$bgColor};

//     ${props => css`
//         background: ${props.$bgColor};
//     `}

//     border-radius: 12px;
//     border: none;

//     width: fit-content;
//     height: min-content;
//     padding: 10px 32px;
//     margin: 28px 14px 0 20px;

//     color: black;
//     font-weight: bold;
//     font-size: 24px;

//     justify-content: center;

//     ${(props) => props.$isSelected && css`
//         background: #E95C42;
//         color: white;
//     `}
// `

// function App() {
//     const [currentView, setCurrentView] = useState<View>("HOME");

//     return (
//         <Wrap>
//             <NavigationWrap>
//                 <MainButton $currentButton="HOME" onClick={() => setCurrentView("HOME")}>
//                     <div>home</div>
//                     <ToolTip>🐾 홈화면으로 이동</ToolTip>
//                 </MainButton>
//                 <MainButton $currentButton="DIARY" onClick={() => setCurrentView("DIARY")}>
//                     <div>diary</div>
//                     <ToolTip>🐾 일기 작성하러 가기</ToolTip>
//                 </MainButton>
//                 <MainButton $currentButton="PROFILE" onClick={() => setCurrentView("PROFILE")}>
//                     <div>profile</div>
//                     <ToolTip>🐾 마이 페이지 이동</ToolTip>
//                 </MainButton>
//             </NavigationWrap>
//             <MainContentWrap>
//                 {
//                     currentView === "HOME" && <Home></Home>
//                 }
//                 {
//                     currentView === "DIARY" && <Calendar></Calendar>
//                 }
//                 {
//                     currentView === "PROFILE" && <Profile></Profile>
//                 }
//             </MainContentWrap>
//         </Wrap>
//     )
// }

// export default App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainRouter = () => {
    return (
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/SetProfile" element={<SetProfile />} />
              <Route path="/Nickname" element={<Nickname />} />
              <Route path="/Character" element={<Character />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/auth/kakao/login" element={<Auth />} />
              {/* 정의되지 않은 경로에 접근시 해당 페이지로 이동*/}
              <Route path="*" element={<Nickname />} />
        </Routes>
  );
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { type: 'classic' })
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

export default MainRouter;

// import {useState} from 'react'
// import styled, {css} from "styled-components"
// import Home from "./Home.tsx";
// import Profile from "./Profile.tsx";
// import Calendar from "./Calendar.tsx";
// import "./App.css";
// import Login from "./Login.tsx";
// import Nickname from "./Nickname.tsx";
// import SetProfile from "./SetProfile.tsx";
// import Character from "./Character.tsx";
// import Auth from "./Auth.tsx";
// import MyProfile from "./MyProfile.tsx";
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const MainRouter = () => {
//     return (
//         <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="calendar" element={<Calendar />} />
//               <Route path="profile" element={<MyProfile />} />
//               <Route path="/SetProfile" element={<SetProfile />} />
//               <Route path="/Nickname" element={<Nickname />} />
//               <Route path="/Character" element={<Character />} />
//         </Routes>
//   );
// };

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js', { type: 'classic' })
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }

// export default MainRouter;