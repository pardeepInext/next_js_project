import React from 'react'
import DocAction from './DocAction';
import Link from 'next/link';
import FileIcon from './FileIcon';
const Document = (document) => {

    const { file, id, name, size, type, updated_at } = document;


    return (
        <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
            <div className="app-card app-card-doc shadow-sm h-100">
                <div className="app-card-thumb-holder p-3">
                    {type === "image/jpeg" ?
                        (<div className="app-card-thumb">
                            <img className="thumb-image" src={file} alt={name} />
                        </div>) :
                        (<span className="icon-holder"> <FileIcon name={name} /></span>)
                    }
                    {/* <span className="badge bg-success">NEW</span> */}
                    <Link href={`/document/${id}`}>
                        <a className="app-card-link-mask" />
                    </Link>
                </div>
                <div className="app-card-body p-3 has-card-actions">
                    <h4 className="app-doc-title truncate mb-0">
                        <Link href={`/document/${id}`}><a>{name.length < 20 ? name : `${name.substr(0, 20)}...`}</a></Link>
                    </h4>
                    <div className="app-doc-meta">
                        <ul className="list-unstyled mb-0">
                            <li><span className="text-muted">Type:</span> {type === "image/jpeg" ? "Image" : type}</li>
                            <li><span className="text-muted">Size:</span>{size}</li>
                            <li><span className="text-muted">Uploaded:</span> {updated_at}</li>
                        </ul>
                    </div>
                    <DocAction id={id} file={file} />
                </div>
            </div>
        </div>

    )
}


export default Document;