import { useState } from 'react'
import ReactModal from 'react-modal'
import './SideBar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import treeImg from '../../../public/sidebar/navbar_tree.png'
import forestImg from '../../../public/sidebar/navbar_forest.png'
import post3 from '../../../public/sidebar/navbar_.png'
import questImg from '../../../public/sidebar/navbar_quest.png'
import nestImg from '../../../public/sidebar/navbar_nest.png'
import bell from '../../../public/bell.png'
import { logOutCheck } from '@/stores/features/userSlice'
import Button from '../Button/Button'

const SideBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn)
  const role = useSelector((state: any) => state.user.userData.role) ?? null
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }
  const handleLogout = async () => {
    dispatch(logOutCheck())
    navigate('/')
  }

  const roleBasedMain = (kind: string | null) => {
    switch (kind) {
      case 'STUDENT':
        return '/main'
      case 'TEACHER':
        return '/adminGroup'
      case 'PARENT':
        return '/adminNest'
      default:
        return '/main'
    }
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-btn-container">
        <Link to={roleBasedMain(role)} className="sidebar-btn">
          <div className="img">
            <img src={treeImg} alt="Main" />
          </div>
        </Link>
        {(role === 'STUDENT' || null) && (
          <Link to="/forest" className="sidebar-btn">
            <div className="img">
              <img src={forestImg} alt="" />
            </div>
          </Link>
        )}
        {(role === 'STUDENT' || null) && (
          <Link to="/studentGroup" className="sidebar-btn">
            <div className="img">
              <img src={nestImg} alt="studentGroup" />
            </div>
          </Link>
        )}
        <Link to="/quest" className="sidebar-btn">
          <div className="img">
            <img src={questImg} alt="Quest" />
          </div>
        </Link>
        <Link to="/mypage" className="sidebar-btn">
          <div className="img">
            <img src={treeImg} alt="Mypage" />
          </div>
        </Link>
      </div>
      <div className="sidebar-bottom">
        <button onClick={openModal} className="sidebar-bell">
          <img src={bell} alt="알람" className="sidebar-bell-img" />
        </button>
        {isLoggedIn && (
          <Button
            className="red small self-center"
            onClick={handleLogout}
            label="로그아웃"
          />
        )}
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            width: '100%',
            height: '100vh',
            zIndex: 10,
            top: 0,
            left: 0,
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            border: '1px #000',
            borderRadius: '10px',
            overflow: 'auto',
            background: '#F5F5DC',
            boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
          },
        }}
      >
        <div className="font-semibold text-xl">알림 확인하기</div>
      </ReactModal>
    </div>
  )
}

export default SideBar
