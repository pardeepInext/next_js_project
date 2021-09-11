import React from 'react'

const FileIcon = (props) => {

    let extension = props.name.split(".")[1];

    if (['ppt', 'pot', 'pps', 'pptx', 'pptm', 'potx', 'potm', 'ppam', 'ppsx', 'ppsm', 'sldx', 'sldm'].includes(extension)) return (
        <i className="fas fa-file-powerpoint ppt-file"></i>
    )
    else if (['xls', 'xlt', 'xlm', 'xlsx', 'xlsm', 'xltx', 'xltm', 'xlsb', 'xla', 'xlam', 'xll', 'xlw'].includes(extension)) return (
        <i className="fas fa-file-excel excel-file"></i>
    )

    else if (['doc', 'dot', 'docx', 'docm', 'dotx', 'dotm', 'docb'].includes(extension))
        return (<i className="fas fa-file-alt text-file"></i>);
    else if (['PDF', 'pdf'].includes(extension)) return (
        <i className="fas fa-file-pdf pdf-file"></i>
    )
    else if (['zip', 'tar', 'gz', '7z'].includes(extension)) return (
        <i className="fas fa-file-archive zip-file"></i>
    )
    else return (
        <i className="fas fa-file zip-file"></i>
    )
}

export default FileIcon
