export const additionsClasses = (additions: string[], style: {[key: string]: string}) =>
    additions.reduce((res: string[], addition: string) => {
        return [...res, style[addition]]
    }, []);