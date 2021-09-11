import React from 'react';
import Image from 'next/image';
import figure from '../public/images/profiles/profile-1.png';

const HeaderNotification = (props) => {
    const { notification, time } = props;
    return (
        <div className="item p-3">
            <div>
                <div className="row gx-2 justify-content-between align-items-center">
                    <div className="col-auto">
                        <Image src={figure} width={36} height={36} />
                    </div>
                    <div className="col">
                        <div className="info">
                            <div className="desc">{notification}</div>
                            <div className="meta">{time}</div>
                        </div>
                    </div>
                </div>
                <a className="link-mask" href="notifications.html" />
            </div>

        </div>
    )
}

export default HeaderNotification
