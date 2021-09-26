import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoAPI';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);

    const { data: cryptoNews, isFetching } = useGetNewsQuery({ newsCategory, count: simplified ? 6 : 100 });

    console.log(data)
    console.log(cryptoNews)

    if (isFetching) return 'Loading...';

    return (
        <div>
            <Row gutter={[24, 24]}>
                {cryptoNews?.value.map((news, i)=>(
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target='_blank' rel='noreferrer'>
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                            </div>
                            <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News
