let news = ['news1', 'news2', 'news3', 'news4', 'news5'];

class newsFeed {
    constructor(array) {
        this.news = array;
    }

    get allNews() {
        return (`Текущее количество новостей - ${this.news.length}`);
    }
}

