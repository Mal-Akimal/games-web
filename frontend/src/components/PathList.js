import Path from "./Path";

const PathList = ({paths}) => {
    return (
        <div className = 'path-list'>
            {
                paths.map((path) => {
                return (
                <Path key={path.id} path_name={path.name}/>
                )
            })
        }
    </div>
    )
}

export default PathList;