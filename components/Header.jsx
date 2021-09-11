import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import HeaderNotification from './HeaderNotification';
import userPic from '../public/images/user.png';
import Logo from '../public/images/app-logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();
    const [isSidePanelHidden, setisSidePanelHidden] = useState(true);

    const [notifications] = useState([
        {
            notification: "Amy shared a file with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            time: "2 hours ago"
        },
        {
            notification: "Your report is ready. Proin venenatis interdum est",
            time: "1 minute ago"
        },
        {
            notification: "You have a new invoice. Proin venenatis interdum est.",
            time: "3 hours ago"
        },
        {
            notification: "Amy shared a file with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            time: "5 hours ago"
        }
    ]);

    const [menus] = useState([
        {
            name: 'Overview',
            svg: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          </svg>`,
            link: '/'
        },
        {
            name: 'Docs',
            svg: ` <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-folder" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"/>
            <path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"/>
          </svg>`,
            link: '/document'
        },
        {
            name: 'Orders',
            svg: `    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
            <circle cx="3.5" cy="5.5" r=".5"/>
            <circle cx="3.5" cy="8" r=".5"/>
            <circle cx="3.5" cy="10.5" r=".5"/>
          </svg>`,
            link: '/order',
            subMenus: [
                {
                    name: 'Order List',
                    link: '/order'
                },
                {
                    name: 'Create Order',
                    link: '/order/create'
                }
            ]
        }
    ]);

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth < 1200 && setisSidePanelHidden(true))
        return () => { window.removeEventListener('resize', () => console.log("")); };
    }, []);

    return (
        <header className="app-header fixed-top">
            <div className="app-header-inner">
                <div className="container-fluid py-2">
                    <div className="app-header-content">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <a id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none" onClick={() => setisSidePanelHidden(prev => !prev)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2} d="M4 7h22M4 15h22M4 23h22" /></svg>
                                </a>
                            </div>
                            <div className="app-utilities col-auto">

                                <div className="app-utility-item app-notifications-dropdown dropdown">
                                    <a className="dropdown-toggle no-toggle-arrow" id="notifications-dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Notifications">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                            <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                        </svg>
                                        <span className="icon-badge">3</span>
                                    </a>
                                    <div className="dropdown-menu p-0" aria-labelledby="notifications-dropdown-toggle">
                                        <div className="dropdown-menu-header p-3">
                                            <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                                        </div>
                                        <div className="dropdown-menu-content">
                                            {notifications.map((notification, index) => (<HeaderNotification key={index} {...notification} />))}
                                        </div>
                                        <div className="dropdown-menu-footer p-2 text-center">
                                            <Link href="/"><a>View all</a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="app-utility-item">
                                    <Link href="/">
                                        <a title="Settings">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                                <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>


                                <div className="app-utility-item app-user-dropdown dropdown">
                                    <a className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                        <Image src={userPic} width={36} height={36} />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                        <li><a className="dropdown-item" href="account.html">Account</a></li>
                                        <li><a className="dropdown-item" href="settings.html">Settings</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="login.html">Log Out</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`app-sidepanel sidepanel-${isSidePanelHidden ? 'visible' : 'hidden'}`}>
                <div className="sidepanel-drop"></div>
                <div className="sidepanel-inner d-flex flex-column">
                    <a className="sidepanel-close d-xl-none" onClick={() => setisSidePanelHidden(prev => !prev)}>×</a>
                    <div className="app-branding">
                        <a className="app-logo" href="index.html">
                            <Image src={Logo} width={36} height={36} className="me-2 logo-icon" />
                            <span className="logo-text">PORTAL</span>
                        </a>
                    </div>
                    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                        <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                            {menus.map((menu, index) => (
                                <li className={`nav-item ${menu.hasOwnProperty('subMenus') && `has-submenu`}`} key={index}>
                                    <Link href={menu.hasOwnProperty('subMenus') ? '' : menu.link} >
                                        {
                                            menu.hasOwnProperty('subMenus') ?
                                                (
                                                    <>
                                                        <a className={`nav-link submenu-toggle ${router.asPath === menu.link ? 'active' : ''}`} data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                                                            <span className="nav-icon" dangerouslySetInnerHTML={{ __html: menu.svg }}>
                                                            </span>
                                                            <span className="nav-link-text">{menu.name}</span>
                                                            <span className="submenu-arrow">
                                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                                </svg>
                                                            </span>
                                                        </a>
                                                        <div id="submenu-1" className="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
                                                            <ul className="submenu-list list-unstyled">
                                                                {menu.subMenus.map((submenu, key) => (
                                                                    <li className="submenu-item" key={key}>
                                                                        <Link href={submenu.link}><a className={`submenu-link ${router.asPath === submenu.link && 'active'}`}>{submenu.name}</a></Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>

                                                )
                                                :
                                                (
                                                    <a className={`nav-link ${router.asPath === menu.link ? 'active' : ''}`} >
                                                        <span className="nav-icon" dangerouslySetInnerHTML={{ __html: menu.svg }}>
                                                        </span>
                                                        <span className="nav-link-text">{menu.name}</span>
                                                    </a>
                                                )
                                        }
                                    </Link>
                                </li>

                            ))}
                        </ul>
                    </nav>
                    <div className="app-sidepanel-footer">
                        <nav className="app-nav app-nav-footer">
                            <ul className="app-menu footer-menu list-unstyled">
                                <li className="nav-item">
                                    <a className="nav-link" href="settings.html">
                                        <span className="nav-icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                                <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                                            </svg>
                                        </span>
                                        <span className="nav-link-text">Settings</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                                        <span className="nav-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                        </span>
                                        <span className="nav-link-text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>


            </div>
        </header >
    )
}

export default Header;
