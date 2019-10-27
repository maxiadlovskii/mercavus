import {SyntheticEvent, ReactNode, FormEvent} from "react";

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
    widths: {
        left: string,
        right: string
    },
    separatorRef: any,
    wrapperRef: any,
    elements: ReactNode[],
    separatorWidth: string
}

export interface Button {
    onClick?(event: SyntheticEvent): void,
    text?: string | ReactNode | undefined,
    additions?: string[],
    type?: 'submit' | 'reset' | 'button',
}
export interface Input {
    onChange?(event: SyntheticEvent): void,
    placeholder?: string,
    additions?: string[],
    name: string,
    type?: 'text' | 'number'
}

export interface HobbyItem {
    hobby: Hobby,
    onDelete(event: SyntheticEvent): void | undefined,
}

export interface UserItem {
    user: User,
    isActive: boolean,
    onUserSelect(id: string): void | undefined,
}

export interface Hobbies {
    hobbiesList: Hobby[],
    onDelete(id: string): void | undefined,
    onAddHobby(e: FormEvent): void,
    errors: string[],
    currentUser: string
}

export interface Users {
    usersList: User[],
    onUserSelect(id: string): void | undefined,
    onAddUser(e: FormEvent): void,
    currentUser: string,
    errors: string[]
}

export interface ErrorList {
    list: string[]
}

export interface AddUserForm {
    onSubmit(e: FormEvent): void,
    errors: string[]
}
