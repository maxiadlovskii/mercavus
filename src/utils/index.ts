import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const additionsClasses = (additions: string[], style: {[key: string]: string}) =>
    additions.reduce((res: string[], addition: string) => {
        return [...res, style[addition]]
    }, []);

export const getFormValues = (elements: any ) => {
    const res: {[key: string]: any} = {};
    for(let i: number = 0; i<elements.length; i++){
        if(elements[i].hasAttribute('name')){
            const name = elements[i].name;
            const value = elements[i].value;
            if(name){ res[name] = value }
        }
    }
    return res
}

export const validator = (values: { [key: string]: any}) => {
    const { name, year, passionLevel } = values;
    const passionLevels = ['very high', 'middle', 'low', 'high'];
    const validations: {
        [key: string]: any
    } = {
        name: () => !name.length ? 'Input name' : null,
        year: () => !year.length ? 'Input year' : null,
        passionLevel: () => !passionLevel.length
            ? 'Input passionLevel'
            : !passionLevels.includes(passionLevel)
                ? 'Set one of \'Very high\', \'Middle\', \'Low\', \'High\''
                : null
     }
     return Object.keys(values).reduce( (res: any[], key) => {
            const error = validations[key]();
            return error ? [...res, error] : res
     }, [])
}
