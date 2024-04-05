import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType (made)
* 2 - указать нужный тип для defaultAffairs (made)
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами (made)
* 4 - выполнить пункт 3 для функции deleteAffair (made)
* 5 - указать нужный тип в useState с affairs (made)
* 6 - дописать тип и логику функции deleteAffairCallback (made)
* 7 - в файле Affairs.tsx дописать типизацию пропсов (made)
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow (made)
* 9 - в файле Affair.tsx дописать типизацию пропсов(made)
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать (made)
* 11 - в файле Affair.tsx отобразить приходящие данные (made)
* */

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' // (made)need to fix any

export type AffairType = {
    _id: number // need to fix any (made)
    name: string // need to fix any (made)
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any (made)
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any (made)
    if (filter === 'all') {
        return affairs
    } else {
        return affairs.filter(el => el.priority === filter)
    }

    // need to fix (made)
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any (made)

    return affairs.filter(el => el._id !== _id)

    // need to fix (made)
}


function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any (made)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => { // need to fix any (made)
        setAffairs(affairs.filter(el => el._id !== _id))
        // need to fix (made)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
