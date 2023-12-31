import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
// import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import '../DatePickerStyle.css' // CSS 스타일 파일을 가져오세요.
import { useDispatch } from 'react-redux'

// mui-datepicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { addBirthday } from '@/stores/features/signupSlice'

const UserBirth = () => {
  const [inputDate, setInputDate] = useState(new Date())
  const dispatch = useDispatch()

  const setDate = (date: Date | null) => {
    if (date !== null) {
      setInputDate(date)
      dispatch(addBirthday(date))
    }
  }

  return (
    <div className="user-name-container">
      <div className="user-name-is">제 생일은</div>
      <div className="user-name-input">
        {/* <LiaBirthdayCakeSolid class="icon" /> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="생일을 입력하세요"
              slotProps={{
                textField: { size: 'small' },
                actionBar: { actions: ['today'] },
              }}
              format="yyyy-MM-dd"
              defaultValue={inputDate}
              onChange={setDate}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="user-name-desu">입니다.</div>
    </div>
  )
}

export default UserBirth
