import React, { useState } from 'react';

import axios from 'axios';
import cheerio from 'cheerio';

const CrawlingButton = () => {
    const [btnName, setBtnName] = useState('Crawling');
    const [data, setData] = useState();
    const [disabled, setDisabled] = useState(false);

    const onClick = () => {
        setBtnName('');
        setDisabled(true);
        getHTML().then(html => {
            const $ = cheerio.load(html.data);
            let titles = $('td a');
            let netChanges = $('span.tah.p11');
            let datas = [];
            netChanges.each((i, elem) => {
                datas.push({
                    title:titles[i].children[0].data,
                    href:titles[i].attribs.href,
                    netChange:netChanges[i].children[0].data.trim(),
                });
            });
            setData(datas);
            setBtnName('Crawling (' + datas.length + ')');
        });
        /*getHTML((data) => {
            setData(data);
            setBtnName('검색 완료 (' + data.length + ')');
        });*/
    };

    // 크롤링을 시작합니다.
    const getHTML = async  () => {
        try {
            return await axios.get(`https://yg01.herokuapp.com/https://finance.naver.com/sise/sise_group.nhn?type=upjong`);
        } catch (error) {
            console.log(error);
        }
        /*axios.get(`https://chaewonkong.github.io`)
            .then(dataa => {
                console.log(dataa.data);
                const $ = cheerio.load(dataa.data);
                return $('.sidebar-nav-item');
                // $('.sidebar-nav-item').each((index, item)=>{console.log(item)});
            });*/
    }

    return (
        <>
            <button className="btn btn-sm btn-primary" onClick={onClick} disabled={disabled}>{btnName}
                {btnName === '' ? <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </> : null}
            </button>

        </>
    );
};

export default CrawlingButton;