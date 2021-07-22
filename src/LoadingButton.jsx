import React, { useState } from 'react';

const LoadingButton = () => {
    const [btnName, setBtnName] = useState('Daum Search Ranks');
    const [data, setData] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const onClick = () => {
        setBtnName('');
        setDisabled(true);
        getDaumSearchRanks((data) => {
            setData(data);
            setBtnName('Daum Search Ranks (' + data.length + ')');
        });
    };

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

export default LoadingButton;