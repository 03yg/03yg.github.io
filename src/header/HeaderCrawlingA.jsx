import React, { useState } from 'react';

import axios from 'axios';
import cheerio from 'cheerio';

const HeaderCrawlingA = () => {
    const [btnName, setBtnName] = useState('Crawling');
    const [data, setData] = useState();
    const [disabled, setDisabled] = useState(false);

    const onClick = () => { // 클릭시
        setBtnName(''); // 로딩을 위하여 텍스트를 지움
        setDisabled(true); // 로딩하는 동안 비활성화
        getHTML().then(html => {
            setDisabled(true); // 로딩이 완료되면 다시 활성화
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
            setBtnName('Crawling (' + datas.length + ')'); // 완료시
        });
    };

    const getHTML = async  () => { // 크롤링을 시작합니다.
        try {
            return await axios.get(`https://yg01.herokuapp.com/https://finance.naver.com/sise/sise_group.nhn?type=upjong`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <a href="#" className="nav-link active btn btn-sm btn-primary" aria-current="page" onClick={onClick} disabled={disabled}>{btnName}
                {btnName === '' ? <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </> : null}
            </a>
        </>
    );
};

export default HeaderCrawlingA;