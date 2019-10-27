import React, {SyntheticEvent, useState, useRef, useEffect} from 'react';
import SeparatedLayoutView from './SeparatedLayoutView'
import { SeparatedLayout as SeparatedLayoutInterface } from '../../../interfaces'
/*
    This common component work for 2 components according to requirement
    But it possible to create dynamic parts
*/
const SeparatedLayoutContainer: React.FC<SeparatedLayoutInterface> = ({ children }) => {
    const [proportions, setProportions] = useState({left: 0.5, right: 0.5});
    const [wrappersValues, setWrappersValues] = useState({ wrapperWidth: 0, wrapperLeft: 0});
    useEffect(()=> {
        const wrapperWidth = wrapperRef.current && wrapperRef.current.getBoundingClientRect().width || 0;
        const wrapperLeft = wrapperRef.current && wrapperRef.current.getBoundingClientRect().left || 0;
        setWrappersValues({wrapperWidth, wrapperLeft})
    }, []);
    const separatorRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const onMouseMove = (event: MouseEventInit): void => {
        if(wrapperRef.current && wrappersValues.wrapperWidth && event.clientX && (wrappersValues.wrapperLeft || wrappersValues.wrapperLeft === 0) && event.clientX > wrappersValues.wrapperLeft){
            const leftWidth = event.clientX - wrappersValues.wrapperLeft;
            const left =  leftWidth / wrappersValues.wrapperWidth;
            const right = 1 - left;
            setProportions({left, right})
        }
    };
    const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseOnSeparator = (event: SyntheticEvent) => {
        event.preventDefault();
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };
    const separatorWidth = 6;
    const widths ={
        left: `calc(${proportions.left*100}% - ${separatorWidth/2}px)`,
        right: `calc(${proportions.right*100}% - ${separatorWidth/2}px)`,
    };

    return <SeparatedLayoutView
        onMouseOnSeparator={onMouseOnSeparator}
        widths={widths}
        separatorWidth={`${separatorWidth}px`}
        separatorRef={separatorRef}
        wrapperRef={wrapperRef}
        elements={children}
    />
}

export default SeparatedLayoutContainer