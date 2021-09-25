import React, { useState,useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoAPI';

const Cryptocurrencies = ({simplified}) => {

    const count = simplified ? 10 : 100

    const { data, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setcryptos] = useState([])
    console.log(cryptos)
    const [search, setSearch] = useState('')

    useEffect(()=>{
        const filteredData = data?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()))

        setcryptos(filteredData)
    }, [data, search])

    if (isFetching) return 'Loading...';

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e)=> setSearch(e.target.value)} /> 
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((crypto)=>(
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
                        <Link to={`/crypto/${crypto.id}`}>
                            <Card title={`${crypto.rank}. ${crypto.name}`} extra={<img className="crypto-image" src={crypto.iconUrl} />} hoverable>
                            <p>Price: {millify(crypto.price)}</p>
                            <p>Market Cap: {millify(crypto.marketCap)}</p>
                            <p>Daily Change: {crypto.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
