// 주식 > 종목시세 > 전종목 시세
// 주식 > 종목시세 > 개별종목 시세 추이
// 주식 > 종목시세 > 개별종목 시세 추이(월)
// 주식 > 종목정보 > 전종목 기본정보

// 다음 > 인기검색
// daum_search_ranks
getDaumSearchRanks = async (fn) => {
    await this.getData({url: 'https://finance.daum.net/api/search/ranks?limit=10'}).then((responseObject) => {
        fn(responseObject.data);
    });
}



getData = ({url,isuCd,ddTp,strtYymm,endYymm,strtDd,endDd}) => new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    request.open('GET', url +
        (isuCd != null ? '&isuCd=' + isuCd : '') +
        (ddTp != null ? '&ddTp=' + ddTp : '') +
        (strtYymm != null ? '&strtYymm=' + strtYymm : '') +
        (endYymm != null ? '&endYymm=' + endYymm : '') +
        (strtDd != null ? '&strtDd=' + strtDd : '') +
        (endDd != null ? '&endDd=' + endDd : ''), true);
    request.onload = (e) => {
        if (request.status >= 200 && request.status < 400) {
            let responseObject = JSON.parse(request.responseText);
            resolve(responseObject);
        } else {
            console.log('We reached our target server, but it returned an error');
            console.log('Possibly handle the error by changing your state.');
        }
    };

    request.onerror = () => {
        console.log('There was a connection error of some sort.');
        console.log('Possibly handle the error by changing your state.');
        reject();
    };

    request.send();
});