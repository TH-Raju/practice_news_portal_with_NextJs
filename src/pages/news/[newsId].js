import RootLayout from "@/components/Layouts/RootLayout";
import { useGetSingleNewsesQuery } from "@/redux/api/api";
import { Col, Image, Row } from "antd";

const NewsDetailPage = ({ news }) => {
    const { data, isLoading, isError, error } = useGetSingleNewsesQuery(news.id)
    return (
        <div>
            <h1>Detail Page</h1>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={12}>
                    <div>
                        <Image
                            src={data?.image_url}
                            width={700}
                            height={400}
                            responsive
                            alt="news image"
                        />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// export const getStaticPaths = async () => {
//     const res = await fetch("http://localhost:5000/news")
//     const newses = await res.json()

//     const paths = newses.map(news => ({
//         params: { newsId: news.id }
//     }))

//     return { paths, fallback: false };
// }


export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`)
    const data = await res.json()

    return {
        props: {
            news: data
        }
    }
}