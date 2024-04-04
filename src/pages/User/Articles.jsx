import { useState, useEffect } from 'react'
import Header from '../../components/Header/Index'
import Information from '../../components/Information/Index'
import { getJournal } from '../../../services/journal'
import Articles from '../../components/Articles/Index'

const ArticlesPage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getJournal().then((data) => setArticles(data))
    }, [])

    if (!articles.Jurnal) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Header />
            <Information />

            <main>
                <div className="w-100 px-5 mt-5">
                    <h1 className="fw-bold fs-3 mb-0">Articles</h1>

                    <div>
                        {articles.Jurnal.length > 0 &&
                            articles.Jurnal.sort((a, b) => b.cite - a.cite)
                                .sort(
                                    (a, b) =>
                                        new Date(b.year) - new Date(a.year),
                                )
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
                </div>
            </main>
        </>
    )
}

export default ArticlesPage
