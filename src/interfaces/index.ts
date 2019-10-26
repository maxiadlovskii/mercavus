import {SyntheticEvent, ReactNode} from "react";

export interface User {
    id: string,
    name: string
}

export interface Hobby {
    id: string,
    passionLevel: string,
    name: string,
    year: number,
    userId: string
}
export interface UsersReducer {
    collection: User[],
    isFetching: boolean,
    isFailed: boolean
}

export interface HobbiesReducer {
    collection: {
        [key: string]: Hobby[]
    },
    currentUser: string,
    isFetching: boolean,
    isFailed: boolean
}

export interface SeparatedLayout {
    children: ReactNode[]
}

export interface SeparatedLayoutProps {
    onMouseOnSeparator(event: SyntheticEvent): void,
    proportions: {
        left: number,
        right: number
    },
    separatorRef: any,
    wrapperRef: any,
    elements: ReactNode[]
}

export interface Button {
    onClick(event: SyntheticEvent): void | undefined,
    text: string | ReactNode | undefined,
    additions: string[] | undefined
}

export interface HobbyItem {
    hobby: Hobby,
    onClick(event: SyntheticEvent): void | undefined,
}