import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Master from '../../components/layouts/Master';
import Document from '../../components/doc/Document';
import axios from 'axios';
import { Notify, Block } from 'notiflix';

export const getStaticProps = async (context) => {
    let documents = [];
    await axios.get('http://127.0.0.1:8000/api/documents')
        .then(res => documents = res.data)
        .catch(err => console.log(err));

    return {
        props: {
            documents,
        }
    }
}

const document = (props) => {

    const [document, setdocument] = useState({});
    const [currentPage, setcurrentPage] = useState(1);
    const [documents, setdocuments] = useState(props.documents.data);

    const changeDocument = async (e) => {
        const formData = new FormData;
        formData.append('document', e.target.files[0]);
        await Promise.all([

            axios.post("/api/documents", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        ])



    }

    const fetchDocument = async (currentPage) => {
        Block.hourglass('.document-listing');
        await axios.get(`http://127.0.0.1:8000/api/documents?page=${currentPage}`)
            .then(res => {
                Block.remove('.document-listing');
                setdocuments(res.data.data);
                setcurrentPage(res.data.meta.current_page);
            })
            .catch(err => Notify.warning(`error:${err.message}`));
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) fetchDocument(currentPage);
        return () => {
            mounted = false;
        }
    }, [currentPage]);


    return (
        <>
            <Head>
                <title>Document</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Master>
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">My Docs</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                        <div className="col-auto">
                                            <form className="docs-search-form row gx-1 align-items-center">
                                                <div className="col-auto">
                                                    <input type="text" id="search-docs" name="searchdocs" className="form-control search-docs" placeholder="Search" />
                                                </div>
                                                <div className="col-auto">
                                                    <button type="submit" className="btn app-btn-secondary">Search</button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <div class="col-auto">

                                            <select class="form-select w-auto">
                                                <option selected="" value="option-1">All</option>
                                                <option value="option-2">Text file</option>
                                                <option value="option-3">Image</option>
                                                <option value="option-4">Spreadsheet</option>
                                                <option value="option-5">Presentation</option>
                                                <option value="option-6">Zip file</option>

                                            </select>
                                        </div> */}
                                        <div className="col-auto">
                                            <label htmlFor="upload-doc" className="btn app-btn-primary">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-upload me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                                </svg>Upload File
                                            </label>
                                            <input type="file" id="upload-doc" onChange={changeDocument} className="d-none" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 document-listing">
                            {documents.map(document => <Document key={document.id} {...document} />)}
                        </div>
                        {props.documents.meta.last_page > 1 && (
                            <nav className="app-pagination mt-5">
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPage == 1 && 'disabled'}`}>
                                        <a className="page-link" disabled={currentPage == 1 ? true : false} onClick={() => setcurrentPage(prev => prev - 1)}>Previous</a>
                                    </li>
                                    {Array.from({ length: props.documents.meta.last_page }, (_, i) => i + 1).map(i => (
                                        <li key={i} className={`page-item ${i === currentPage && `active`}`}>
                                            <a className="page-link" onClick={() => setcurrentPage(i)} disabled={i === currentPage ? true : false}>{i}</a>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage >= props.documents.meta.last_page && 'disabled'}`}>
                                        <a className="page-link" disabled={currentPage >= props.documents.meta.last_page ? true : false}
                                            onClick={() => setcurrentPage(prev => prev + 1)}
                                        >Next</a>
                                    </li>
                                </ul>
                            </nav>
                        )
                        }
                    </div>
                </div>
            </Master>
        </>
    )
}

export default document
