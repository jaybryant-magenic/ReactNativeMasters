import SQLiteHelper from './SQLiteHelper';

export default class NewsService {
    static async GetNews(afterload) {
        try {
            let response = await fetch('https://api.jikan.moe/v3/anime/36456/news');
            if (response.status === 200) {
                let jsonResponse = await response.json();
                console.log(`JSON Response : ${JSON.stringify(jsonResponse)}`);
                let news = await SQLiteHelper.StoreData(jsonResponse.articles);
                console.log(news);
                afterload(news);
                return news;
            }
        } catch(error) {
            console.error(error);
        }

        let news = await SQLiteHelper.GetCachedArticles();
        afterload(news);
        return news;
    }
}
