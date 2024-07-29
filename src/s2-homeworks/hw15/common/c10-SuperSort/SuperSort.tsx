import React from 'react';
import { ReactComponent as UpArrow } from './svg/up-arrow.svg'; // Импортируем иконки
import { ReactComponent as DownArrow } from './svg/down-arrow.svg';
import { ReactComponent as NoneIcon } from './svg/none-icon.svg';

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down; // Если сортировка отсутствует, устанавливаем "по убыванию"
    if (sort === down) return up; // Если сортировка "по убыванию", устанавливаем "по возрастанию"
    if (sort === up) return ''; // Если сортировка "по возрастанию", сбрасываем сортировку
    return down; // По умолчанию устанавливаем "по убыванию"
};

const SuperSort: React.FC<SuperSortPropsType> = ({
                                                     sort, value, onChange, id = 'hw15',
                                                 }) => {
    const up = '0' + value;
    const down = '1' + value;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    };

    const icon = sort === down
        ? <DownArrow width={16} height={16} />
        : sort === up
            ? <UpArrow width={16} height={16} />
            : <NoneIcon width={16} height={16} />;

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer' }}
        >
            {icon}
        </span>
    );
};

export default SuperSort;
