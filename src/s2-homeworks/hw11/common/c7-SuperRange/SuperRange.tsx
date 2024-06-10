import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '100%', // Делаем слайдер полной ширины родителя
                '& .MuiSlider-track': {
                    color: 'green', // зелёная полоска
                },
                '& .MuiSlider-rail': {
                    color: 'lightgray', // светло-серая полоска
                },
                '& .MuiSlider-thumb': {
                    borderRadius: '50%', // круглые ползунки
                    border: '2px solid green', // зелёная окантовка
                    width: '24px', // размер ползунка
                    height: '24px', // размер ползунка
                    backgroundColor: '#fff', // белый цвет внутри
                    '&:hover': {
                        boxShadow: '0px 0px 0px 8px rgba(0, 255, 0, 0.16)', // зелёное свечение при наведении
                    },
                    '&.Mui-active': {
                        boxShadow: '0px 0px 0px 14px rgba(0, 255, 0, 0.16)', // зелёное свечение при активации
                    }
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
