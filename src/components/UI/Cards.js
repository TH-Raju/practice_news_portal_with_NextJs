/* eslint-disable @next/next/no-img-element */
import { Card } from 'antd';
import { Button } from 'antd';
import Link from 'next/link';
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const Cards = ({ allNews }) => {
    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Top News</h1>
            <Card >
                {
                    allNews?.map(news =>
                        <Card.Grid style={gridStyle} key={news.id}>
                            <img src={news.image_url} width="100%" alt="newsImage" />
                            <h3>{news.title}</h3>
                            <h1>{news.author}</h1>
                            <p>{news.description}</p>
                            <p style={{ textAlign: 'right', }}>{news.release_date}</p>
                            <Link href={`/news/${news.id}`}>
                                <Button type="primary" block style={{ marginTop: '10px', }}>
                                    Keep Reading
                                </Button>
                            </Link>
                        </Card.Grid>)
                }

            </Card>
        </>
    );
};

export default Cards;