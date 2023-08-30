import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


const CreateNews = ({ newsId }) => {
    const { register, handleSubmit } = useForm();
    const router = useRouter()

    const onSubmit = (data) => {
        fetch("/api/news", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("News Successfully Created");
                    router.push('/')

                }
            })
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                name="form_item_path"
                layout="vertical"
                style={{
                    width: "50%",
                    margin: "50px auto",
                }}
            >
                <input
                    {...register("id")}
                    value={newsId.length + 1}
                    style={{ marginBottom: '10px', width: "80%" }}
                /> <br />
                <input {...register("title")} placeholder="Title" /><br />

                <input
                    {...register("description")}
                    placeholder="Description"
                    style={{ margin: '10px 0px', width: "80%" }}
                /><br />

                <input {...register("author")} placeholder="Author" /><br />

                <input
                    {...register("release_date")}
                    placeholder="Release Date"
                    type="date"
                    style={{ margin: '10px 0px', width: "80%" }}
                /><br />

                <input {...register("category")} placeholder="Category" /><br />

                <input
                    {...register("comment_count")}
                    placeholder="Number of Comments"
                    type="number"
                    style={{ margin: '10px 0px', width: "80%" }}
                /><br />

                <input {...register("image_url")} placeholder="Image URL" /><br />
                <input
                    type="submit"
                    value="Create News"
                    style={{ margin: '10px 0px', width: "100%" }}
                />

            </form>

        </div>
    );
};

export default CreateNews;

CreateNews.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/news")
    const data = await res.json()
    console.log(data);

    return {
        props: {
            newsId: data.data
        }
    }
}
