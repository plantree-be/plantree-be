/* eslint-disable jsx-a11y/control-has-associated-label */
import { ChangeEvent, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FiPlusCircle } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {
  Tutorial1,
  Tutorial2,
  Tutorial3,
  BarChart,
  DoughnutChart,
  PieChart,
  LoginCheck,
} from '@/components'
import './MyPageStyle.scss'
import { userImageUpdate, userNameUpdate } from '@/apis'
import { addProfileImageUrl, addName } from '@/stores/features/userSlice'
import Button from '@/components/Button/Button'
import { getMainData } from '@/stores/features/mainSlice.ts'
import { RootState } from '@/stores/store.ts'
import { getTreeDetailData } from '@/stores/features/forestSlice.ts'

const MyPage = () => {
  const userName = useSelector((state: any) => state.user.userData.name)
  const userRole = useSelector((state: any) => state.user.userData.role)
  const userprofileImage = useSelector(
    (state: any) => state.user.userData.profileImageUrl,
  )
  const [inputProfileImg, setInputProfileImg] =
    useState<string>(userprofileImage)
  const [inputUserRole, setInputUserRole] = useState<string>('')
  const [modifyName, setModifyName] = useState<boolean>(false)
  const [inputUserName, setInputUserName] = useState<string>(userName)
  const [inputCount, setInputCount] = useState<number>(0)

  const MySwal = withReactContent(Swal)

  const dispatch = useDispatch()

  const treeId = useSelector((state: RootState) => state.main.treeId)
  const {
    totalPercent,
    branchNames,
    branchTotalCount,
    branchDoneCount,
    notYet,
  } = useSelector((state: RootState) => state.forest.selectedInfo)
  useEffect(() => {
    dispatch(getMainData())
    if (treeId) {
      dispatch(getTreeDetailData(treeId))
    }
  }, [treeId])

  const imgList: string[] = [
    'bear',
    'cat',
    'frog',
    'monkey',
    'pig',
    'rabbit',
    'rat',
    'sheep',
    'tiger',
  ]

  const chooseProfileImg = (url: string) => {
    setInputProfileImg(url)
    dispatch(addProfileImageUrl(url))
    const profileImg = {
      profileImageUrl: url,
    }

    userImageUpdate(profileImg)
  }

  const showUserRole = () => {
    switch (userRole) {
      case 'STUDENT':
        return '학생'
      case 'TEACHER':
        return '선생님'
      case 'PARENT':
        return '학부모'
      default:
        return ''
    }
  }

  useEffect(() => {
    setInputUserRole(showUserRole())
  }, []) // userRole이 변경될 때만 실행

  // 프로필 이미지 모달
  const moveProfileImg = () => {
    const content = (
      <div>
        {imgList.map((img: string) => (
          <button
            key={img}
            onClick={() => {
              chooseProfileImg(`/profile/${img}.jpg`)
              MySwal.close() // 모달을 닫음
            }}
          >
            <img className="selectImg" src={`/profile/${img}.jpg`} alt={img} />
          </button>
        ))}
      </div>
    )

    MySwal.fire({
      html: content,
      width: '40%',
      heightAuto: false,
      position: 'center',
      showConfirmButton: false,
      padding: 0,
    })
  }

  const bgColorClass = () => {
    switch (inputUserRole) {
      case '학생':
        return 'bg-teal-200'
      case '선생님':
        return 'bg-amber-400'
      case '학부모':
        return 'bg-lime-400'
      default:
        return ''
    }
  }

  // 튜토리얼 모달
  const moveTutorial = () => {
    const content = (
      <Swiper
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        mousewheel
        keyboard
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        // style={{ height: '500px', width: '100%' }}
      >
        <SwiperSlide>
          <Tutorial1 />
        </SwiperSlide>
        <SwiperSlide>
          <Tutorial2 />
        </SwiperSlide>
        <SwiperSlide>
          <Tutorial3 forestName="나무를 모아 숲을 만들어 보아요!" />
        </SwiperSlide>
      </Swiper>
    )

    MySwal.fire({
      title: 'Plan Tree 100% 활용하기',
      html: content,
      position: 'center',
      width: '50%',
      heightAuto: false,
      padding: 0,
      confirmButtonText: '확인',
      customClass: {
        confirmButton: 'py-0', // 새로운 클래스 이름을 지정합니다.
      },
    })
  }

  // 이번 주 통계 보기
  const moveChart = () => {
    const content = (
      <div className="my-page-graph-modal">
        <div>
          <BarChart
            branchNames={branchNames}
            notYet={notYet}
            branchDoneCount={branchDoneCount}
          />
        </div>
        <div>
          <DoughnutChart
            centerText={
              totalPercent === null ? 'Loading...' : `${totalPercent}%`
            }
            chartData={{
              data:
                totalPercent === null
                  ? [100, 0]
                  : [totalPercent, 100 - totalPercent],
            }}
          />
        </div>
        <div>
          <PieChart
            branchNames={branchNames}
            branchTotalCount={branchTotalCount}
          />
        </div>
      </div>
    )

    MySwal.fire({
      title: '이번주 통계 보기',
      html: content,
      position: 'center',
      width: '70%',
      heightAuto: false,
      padding: 0,
      confirmButtonText: '확인',
      customClass: {
        confirmButton: 'py-0', // 새로운 클래스 이름을 지정합니다.
      },
    })
  }

  const modiName = () => {
    if (modifyName) {
      setModifyName(false)
    } else {
      setModifyName(true)
    }
  }

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.length >= 0 && value.length <= 10) {
      setInputUserName(value)
      setInputCount(value.length)
      dispatch(addName(value))
    }

    setInputCount(value.length)

    const data = {
      name: value,
    }

    userNameUpdate(data)
  }

  const showInputBox = () => {
    let content = null
    if (modifyName) {
      content = [
        <input type="text" value={inputUserName} onChange={changeName} />,
      ]
      if (inputCount <= 10) {
        content.push(<span>{inputCount}</span>, <span>/10</span>)
      } else {
        content.push(<div>이름은 10자를 넘을 수 없습니다.</div>)
      }
      content.push(
        <Button className="normal primary" onClick={modiName} label="확인" />,
      )
    } else {
      content = (
        <>
          {inputUserName} 님
          <button onClick={modiName}>
            <FiPlusCircle />
          </button>
        </>
      )
    }

    return content
  }

  return (
    <div className="my-page-profile-box">
      <div className="my-page-profile-image">
        <img
          src={inputProfileImg}
          alt="유저이미지"
          // className="w-2/5 h-2/5 mypage-image-container"
        />
        <button
          // className="addImgBtn"
          onClick={() => moveProfileImg()}
        >
          <FiPlusCircle />
        </button>
      </div>
      <div className="my-page-profile-name">
        {inputUserRole && (
          <div className={`${bgColorClass()} rounded-full px-2`}>
            <div> {inputUserRole}</div>
          </div>
        )}
        <div className="my-page-name-input">{showInputBox()}</div>
      </div>
      <div className="my-page-btn-container">
        <Button
          className="long lime block"
          label="이번 주 통계 보기"
          onClick={moveChart}
        />
        <Button
          className="long lime block"
          label="Plan Tree 100% 활용하기"
          onClick={moveTutorial}
        />
      </div>
    </div>
  )
}

export default LoginCheck(MyPage)
