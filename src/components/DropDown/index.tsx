import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { ReactElement } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { DropDownContainer } from './styles';

type DropDownProps = {
    title: String;
    items: Array<Item>;
}

type Item = {
    label: String;
    url: String;
}

export const DropDown = ({ title, items }: DropDownProps): ReactElement => {
    const [open, setOpen] = useState<Boolean>(false);
    const toggle = () => setOpen(!open);
    const ref = useRef<HTMLDivElement|null>(null);
    
    useLayoutEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (open && ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
        
    }, [open]);

    return (
        <DropDownContainer ref={ref}>
            <div className="dropdownHeader" onClick={toggle}>
                <span>{title}</span>
                <FaCaretDown />
            </div>
            <ul className={`list-items ${open ? 'active' : ''}`}>
                {items.map((item, key) => (
                    <li key={key}>{item.label}</li>
                ))}
            </ul>
        </DropDownContainer>
    );
}
