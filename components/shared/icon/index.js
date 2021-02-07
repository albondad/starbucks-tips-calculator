import * as StyledComponents from './styled-components';
import * as paths from './paths';

export const Icon = (props) => {
    console.log(paths.personAdd)
    const getPath = (name) => {
        return paths[name]
    }

    return (
        <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d={getPath(props.name)} 
                fill={props.color}
            />
        </svg>
    )
}