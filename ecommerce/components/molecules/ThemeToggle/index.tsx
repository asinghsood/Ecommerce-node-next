import {useRef} from 'react';
import { LableStyled, BallStyled, InputCheckbox } from './ThemeToggle.style';
import { DayIcon, NightIcon } from '../../atoms/Icons';

type ThemeToggleProps = {
    toggleTheme?: () => void
}

const ThemeToggle = (props: ThemeToggleProps) => {
    const { toggleTheme } = props;
    const checkboxRef = useRef<HTMLInputElement>(null);

    return (
        <div style={{display: 'inline-flex', marginLeft: '8px'}}>
            <InputCheckbox type="checkbox" ref={checkboxRef} id="checkbox" onChange={toggleTheme} />
            <LableStyled htmlFor="checkbox" >
                <NightIcon />
                <DayIcon />

                <BallStyled inputValue={checkboxRef?.current?.checked } />
            </LableStyled>
        </div>
    )
}

export default ThemeToggle