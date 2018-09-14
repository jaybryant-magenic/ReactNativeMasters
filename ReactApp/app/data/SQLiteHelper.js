import SQLite from 'react-native-sqlite-storage';
import Enumerable from 'linq';

const ArticleTable = "Articles";

const AppDB = SQLite.openDatabase({name: 'app.db', location: 'default'}, () => {
    console.log("DB opened successfully.");
    createTables();
},
(error) => {
    console.error(error);
});

function createTables() {
    let createArticleTable = "create table if not exists " + ArticleTable + "(id INT auto_increment, url text, title text, intro text, date DATETIME, author TEXT, thumbnail TEXT)";
    AppDB.executeSql(createArticleTable);
    console.log('Table Article created successfully.');
}

export default class SQliteHelper {
    static async StoreData(articles) {
       this.TruncateTable(ArticleTable);
       let news = Enumerable.from(articles)
       .select(article => ({url:article.url, title: article.title, intro: article.intro, date: article.date, author: article.author_name, thumbnail: article.image_url}))
       .toArray();
       await AppDB.transaction(tx => {
        news.forEach(article => {
            tx.executeSql(
                `insert into ${ArticleTable} (url, title, intro, date, author, thumbnail) VALUES('${escape(article.url)}','${escape(article.title)}','${escape(article.intro)}','${escape(article.date)}','${escape(article.author)}','${escape(article.thumbnail)}')`, [],
                (tx, results) => {
                    console.log(`Inserted ${JSON.stringify(article)}`);
                }
            );
            
        });     
       });

       return news;
    }

    static async TruncateTable(table) {
        console.log(`${table} truncated.`);
        await AppDB.transaction(tx=> tx.executeSql("delete from " + table));
    }

    static async GetCachedArticles() {
        let articles = Array();
        await AppDB.transaction(
            tx => {
                tx.executeSql(`select * from ${ArticleTable}`, [], 
                (tx, results) => {
                    if (results != null && results.rows.length !== 0) {
                        for (let i=0; i < results.rows.length; i++) {
                            let row = results.rows.item(i); 
                            articles.push(JSON.parse(unescape(JSON.stringify(row))));  
                            console.log(`${JSON.stringify(row)} pushed.`)
                        }
                    }
                });
            });
        console.log(`Get all data from table ${ArticleTable}`);
        return articles;
    }

}