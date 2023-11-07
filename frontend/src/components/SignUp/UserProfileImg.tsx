import { useState } from 'react'
import './SignUp.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from 'react-redux'
import { LuImagePlus } from 'react-icons/lu'
import { userSignup } from '@/apis/member'
import { addProfileImg } from '@/stores/features/signupSlice'

const UserProfileImg = () => {
  const [inputProfileImg, setInputProfileImg] = useState<string>('')
  const [isProfileImg, setIsProfileImg] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const MySwal = withReactContent(Swal)
  const dispatch = useDispatch()
  const imgList: string[] = [
    'bear',
    'cat',
    'frog',
    'monkey',
    'pig',
    'rabit',
    'rat',
    'sheep',
    'tiger',
  ]

  const oauthProvider = useSelector((state: any) => state.signup.oauthProvider)
  const idToken = useSelector((state: any) => state.signup.idToken)
  const userName = useSelector((state: any) => state.signup.name)
  const userBirth = useSelector((state: any) => state.signup.birthday)
  const userRole = useSelector((state: any) => state.signup.role)
  const userProfileImg = useSelector((state: any) => state.signup.profileImg)

  // userBirth로부터 나이 추출
  const currentDate = new Date()
  const userAge = currentDate.getFullYear() - userBirth.getFullYear()

  // userBirth로부터 month, day 추출
  const userBirthMonth = userBirth.getMonth() + 1
  const userBirthDay = userBirth.getDate()

  // userRole 한국어 패치
  const userRoleKo = () => {
    let role = ''

    switch (userRole) {
      case 'STUDENT':
        role = '학생'
        break
      case 'TEACHER':
        role = '선생님'
        break
      case 'PARENT':
        role = '학부모'
        break
      default:
        role = ''
    }

    return role
  }

  // 객체에 담아서 백에 보내주자!
  const data = {
    idToken,
    oauthProvider,
    name: userName,
    birthDate: userBirth,
    role: userRole,
    profileImageUrl: userProfileImg,
  }

  const saveUser = () => {
    console.log(data)
    userSignup(data)
  }

  const chooseProfileImg = (url: string) => {
    setInputProfileImg(url)
    setIsProfileImg(true)
    dispatch(addProfileImg(url))
  }

  const moveProfileImg = () => {
    const content = (
      <div className="mb-3.5">
        {imgList.map((img: string) => (
          <button
            className="selectImg p-0 mx-1"
            onClick={() => {
              chooseProfileImg(`src/asset/profile/${img}.jpg`)
              MySwal.close()
            }}
          >
            <img
              className="selectImg m-0"
              src={`src/asset/profile/${img}.jpg`}
              alt={img}
            />
          </button>
        ))}
      </div>
    )

    MySwal.fire({
      title: '프로필 사진을 골라 주세요',
      html: content,
      width: 300,
      heightAuto: false,
      position: 'center',
      showConfirmButton: false,
      padding: 0,
    })
  }

  return (
    <div className="w-8/12 h-3/5 relative">
      <div className="flex bg-no-repeat w-full h-full bg-contain bg-[url('./asset/student_card/rm245-bb-17-g.jpg')]">
        <button className="addImgBtn" onClick={() => moveProfileImg()}>
          <LuImagePlus />
        </button>
        <div className="profileImg">
          {isProfileImg || isModalOpen ? (
            <img
              className="showProfileImg"
              src={inputProfileImg}
              alt={inputProfileImg}
            />
          ) : (
            <div className="profilePlaceholder">프로필 사진을 선택하세요!</div>
          )}
        </div>
        <span className="w-3/5 flex">
          <div className="mx-1 w-max h-min bg-teal-200 border-2 rounded-full border-zinc-950">
            <div className="mx-1 text-xs">{userRoleKo()}</div>
          </div>
          <div className="w-2/6">
            <div className="title">이름</div>
            <div className="title">나이</div>
            <div className="title">생일</div>
          </div>
          <div className="w-3/6">
            <div className="content">
              <div>{userName}</div>
            </div>
            <div className="content">
              <div>{userAge}세</div>
            </div>
            <div className="content">
              <div>
                {userBirthMonth}월 {userBirthDay}일
              </div>
            </div>
          </div>
        </span>
      </div>
      <button className="absolute right-0" onClick={saveUser}>
        지금부터 숲을 가꿔보자!
      </button>
    </div>
  )
}

export default UserProfileImg