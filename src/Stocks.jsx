import React from 'react';

import LoadingButton from './LoadingButton';
import CrawlingButton from './CrawlingButton';
import Header from './Header';
import Sidebar from './Sidebar';

const Stocks = () => {

    return (
        <>
            <Header/>
            <LoadingButton/>
            <CrawlingButton/>
            <div style={{'display': 'flex','flexWrap': 'nowrap',
                         'height': 'calc(100vh - 126px)',
                         'height': '-webkit-fill-available',
                         'maxHeight': '100vh',
                         'overflowX': 'auto',
                         'overflowY': 'hidden'}}>
                <Sidebar/>
            </div>
        </>
    );
};

export default Stocks;