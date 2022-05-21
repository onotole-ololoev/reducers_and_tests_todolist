import React, {ChangeEvent} from 'react';


type CheckBoxType = {
    checked: boolean
    callBack: (checked: boolean) => void
}

const CheckBox = (props: CheckBoxType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" onChange={onChangeHandler} checked={props.checked}/>
    );
};

export default CheckBox;