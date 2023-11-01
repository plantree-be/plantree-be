import React, { useState } from 'react'
// import axios from 'axios';
import QR from 'qrcode.react'
import './GroupPage.css'
import Button from '@/components/Button/Button'
import Modal from '@/components/Button/Modal'

const AdminGroupPage: React.FC = () => {
  // 모달 관련
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  // 일단 QR 임시
  const createQr = () => {
    return (
      <QR
        value="https://www.naver.com/"
        size={500}
        id="qr-gen"
        level="H"
        includeMargin={false} //QR 테두리 여부
        bgColor="pink"
        fgColor="yellow"
      />
    )
  }
  //여기부터는 페이지 넘기면서 조회하는 것 임시
  const GroupsPerPage = 5
  const dummyData: AcceptResponse = {
    statusCode: 200,
    message: '수락 성공',
    data: {
      groups: [
        { groupName: '그룹1', createdAt: '2023-01-15', studentCount: 10 },
        { groupName: '그룹2', createdAt: '2023-02-20', studentCount: 15 },
        { groupName: '그룹3', createdAt: '2023-03-10', studentCount: 8 },
        { groupName: '그룹4', createdAt: '2023-04-05', studentCount: 12 },
        { groupName: '그룹5', createdAt: '2023-05-18', studentCount: 20 },
        { groupName: '그룹6', createdAt: '2023-06-22', studentCount: 7 },
        { groupName: '그룹7', createdAt: '2023-07-09', studentCount: 13 },
        { groupName: '그룹8', createdAt: '2023-08-12', studentCount: 18 },
      ],
    },
  }

  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastGroup = currentPage * GroupsPerPage
  const indexOfFirstGroup = indexOfLastGroup - GroupsPerPage
  const currentGroups = dummyData.data.groups.slice(
    indexOfFirstGroup,
    indexOfLastGroup,
  )

  const totalPages = Math.ceil(dummyData.data.groups.length / GroupsPerPage)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i)
  }

  const changePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <h2>2023 3학년 1반</h2>
      <div className="studentListBox">
        <h3>번호 그룹명 시작일 인원</h3>
        {currentGroups.map((group, index: number) => (
          <div>
            <div key={index} className="groupItem">
              <p className="groupInfo">{index + 1 + (currentPage - 1) * 5} </p>
              <p className="groupInfo">{group.groupName} </p>
              <p className="groupInfo">{group.createdAt} </p>
              <p className="groupInfo">{group.studentCount} </p>
            </div>
            <hr style={{ background: 'black', height: 1, border: 0 }} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => changePage(number)}>
            {number}
          </button>
        ))}
      </div>
      <Button className="primary" onClick={openModal} label="그룹 생성하기" />
      <Modal isOpen={false} onClose={closeModal} content="모오달" />
    </div>
  )
}

export default AdminGroupPage
