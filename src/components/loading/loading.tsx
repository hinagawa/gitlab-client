import ReactLoading from "react-loading";

import "./loading.css";

function Loading( ) {
    return <div className="loading"><ReactLoading type="cubes" color="black" height={150} width={200} /></div>
}

export default Loading;