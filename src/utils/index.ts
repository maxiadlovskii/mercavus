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
};

export const validator = (values: { [key: string]: any}) => {
    const { name, year, passionLevel } = values;
    const passionLevels = ['very high', 'medium', 'low', 'high'];
    const validations: {
        [key: string]: any
    } = {
        name: () => !name.length ? 'Please, input name' : null,
        year: () => !year.length ? 'Please, input year' : null,
        passionLevel: () => !passionLevel.length
            ? 'Please, input passionLevel'
            : !passionLevels.includes(passionLevel.toLowerCase())
                ? 'Set one of \'Very high\', \'Medium\', \'Low\', \'High\''
                : null
     };
     const errors = Object.keys(values).reduce( (res: any[], key) => {
            const error = validations[key]();
            return error ? [...res, error] : res
     }, []);

    return !!errors.length ? errors : null
};

export const generateId = () => {
    return `${Math.random()}_${new Date().toDateString()}`
};

