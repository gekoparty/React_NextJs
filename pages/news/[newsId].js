import {useRouter} from 'next/router';

function DetailedPage() {
    const router = useRouter();

    const id = router.query.newsId;

    //send a request to backend API with the id

    return <h1>The NewsDetails</h1>
}

export default DetailedPage;