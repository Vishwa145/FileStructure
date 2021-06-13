import React, { useState } from "react";
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/Description';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';

function File({file, level})
{
    const expandHandlerSize = "25px";
    const expandCommonStyle = {fontSize:expandHandlerSize, color:"#EAB543"};
    const expand = {transition: "0.20s", transform: "rotate(0deg)", ...expandCommonStyle};
    const collapse = {transition: "0.20s", transform: "rotate(-90deg)", ...expandCommonStyle};
    const [focus, ChangeFocus] = useState(collapse);
    const [display, ChangeDisplay] = useState("none");

    function ExpandCollapse(){
        if(display==="none")
        {
            ChangeDisplay("block");
            ChangeFocus(expand);
        }
        else
        {
            ChangeDisplay("none");
            ChangeFocus(collapse);
        }
    }

    return (
        <React.Fragment>
            <div className="File" style={{margin: "calc(" +level + "*10px)"}}>
                {file.fileType==="File"?
                <FileIcon style={{marginLeft: expandHandlerSize, color: "#EAB543"}} />
                :
                <React.Fragment>
                <DetailsTwoToneIcon style={focus} onClick={ExpandCollapse}/>
                <FolderIcon style={{color:"#182C61"}}/>
                </React.Fragment>}
                <p>{file.fileName}</p>
            </div>
            {file.fileType==="Folder"?
            <div style={{display: display}}>
                {file.childern.map((file, key)=><File key={key} file={file} level={level+1}/>)}
            </div>
            :null}
        </React.Fragment>
    );
}

export default File;
