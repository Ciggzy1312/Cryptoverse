import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoAPI'

const CryptoDetails = () => {

    const { coinID } = useParams()
    const [timePeriod, setTimePeriod] = useState("1w")

    const { data, isFetching } = useGetCryptoDetailsQuery(coinID)
    console.log(data)

    return (
        <div>
            CryptoDetails {coinID}
        </div>
    )
}

export default CryptoDetails
