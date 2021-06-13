import React from "react";
import fileSystemData from "../Helper/FileSystemData";
import File from "../Components/File";

function FileSystem()
{
    return (
        <div className = "Container">
        {
            fileSystemData.map((file, key)=><File key={key} file={file} level={0}/>)
        }
        </div>
    );
}

export default FileSystem;
