import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Tabs from '../../components/Tabs/Tabs';
import ActivityNews from './ActivityNews/ActivityNews';
import './NewsPage.scss';
import PropagateNews from './PropagateNews/PropagateNews';
import RelicsNews from './RelicsNews/RelicsNews';
export default function NewsPage() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let getType = params.get('type');
    const [type, setType] = useState(() => {
        if (getType) {
            return getType;
        } else {
            return 'relics';
        }
    });
    return (
        <>
            <div className='newsPage' data-aos="fade">
                <div className="container">
                    <div className="newsPage__title">
                        <h2 className="title">
                            Tin tức
                        </h2>
                    </div>
                    <Tabs setType={setType} type={type} />
                    {
                        type === 'relics'
                        &&
                        <RelicsNews />
                    }
                    {type === 'activity' && <ActivityNews />}
                    {type === 'propagate' && <PropagateNews />}
                </div>
                <Footer />
            </div>
        </>

    );
}
