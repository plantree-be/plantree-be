// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'
import chick from '../../public/chick.png'
import forest from '../../public/forest_tmp.png'
import './GroupPage.css'
// import StudentGroupPageResponse from '../types/GroupStudentType'

const StudentGroupPage = () => {
  // const [data, setData] = useState<StudentGroupPageResponse | null>(null);

  // useEffect(() => {
  // const apiUrl = 'API URL자리임';
  //   axios
  //     .get<StudentGroupPageResponse>(apiUrl)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    // <div className="sketchbook">
    <div className="p-10">
      <div className="whiteBox pb-5">
        <text>내 둥지 확인하기</text>
        <div className="box-border h-30 w-2/3 p-5 border-4 bg-amber-700 rounded-3xl">
          <div className="flex flex-row">
            <img className="chick flex flex-start" src={chick} alt="" />
            <div className="flex items-center text-white tracking-widest">
              여기는 그룹이름임
              <br />
              둥지장동지:
              <br />
              병아리 동지:
            </div>
          </div>
        </div>
        <text>내 그룹 확인하기</text>
        <div className="flex-container">
          <Link to="/studentGroupDetail">
            <img className="forest" src={forest} alt="" />
          </Link>
          <Link to="/studentGroupDetail">
            <img className="forest" src={forest} alt="" />
          </Link>
          <Link to="/studentGroupDetail">
            <img className="forest" src={forest} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StudentGroupPage