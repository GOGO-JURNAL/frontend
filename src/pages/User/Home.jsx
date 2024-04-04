// import Articles from '../../components/Articles/Index'
import Charts from '../../components/Chart/Index'
import Header from '../../components/Header/Index'
import Information from '../../components/Information/Index'
import { getJournal } from '../../../services/journal'
import { useEffect, useState } from 'react'
import Articles from '../../components/Articles/Index'
import { Link } from 'react-router-dom'
import Loading from '../../components/LoadingScreen/Index'

const HomePage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getJournal().then((data) => setArticles(data))
    }, [])

    if (!articles.Jurnal) {
        return <Loading />
    }

    return (
        <>
            <Header />

            <Information />

            <Charts />

            <div className="w-100 px-5 mt-5">
                <h1 className="fw-bold fs-3 mb-0">Articles</h1>

                <div>
                    {articles.Jurnal.length > 0 &&
                        articles.Jurnal.sort((a, b) => b.cite - a.cite)
                            .sort((a, b) => b.year - a.year)
                            .slice(0, 5)
                            .map((data, index) => (
                                <Articles
                                    key={index}
                                    title={data.title}
                                    publication={data.publication}
                                    year={data.year}
                                    cite={data.cite}
                                />
                            ))}
                </div>

                <div className="text-end mt-3">
                    <Link to={'/articles'} className="text-decoration-none">
                        Show more...
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomePage
