import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public url;
  public newsData: any = [];
  public favoriteNewsArray: any = [];
  public state = 'all';


  constructor(private http: Http) {
    /*  if (!!localStorage.getItem('news')) {
        this.newsData = JSON.parse(localStorage.getItem('news') || '[]');
      }*/

    this.getNews()
  }

  public getNews() {


    this.url = " https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=41f4ed2a82ac4eeeadf7f3b84bf7ed28";
    return this.http.get(this.url).map((res) => {
      return res.json()
    }).subscribe(
      data => {
        let savedIds = JSON.parse(localStorage.getItem('newsId') || '[]');
        this.newsData = data.articles.map((el) => {
          let uuid = this.guid(el.title);
          return Object.assign(el, {
            id: uuid,
            isFavorite: !(savedIds.indexOf(uuid) === -1)
          });

        })
      },
      error => console.log(error),
      () => console.log('Fine'),
    )
  }

  public guid(str) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  public addToFavorite(el, news) {
    news.isFavorite = true;
    /*this.newsData = this.newsData.map((currentArr, index) =>{
      if(currentArr.id === id ) {
        currentArr.isFavorite = true;
      }

      console.log(currentArr, 'currentArr');
      return currentArr
    });
    console.log(this.newsData, 'qweqwe');*/
    let favoriteNewsId = this.newsData.filter((el) => {
      return el.isFavorite === true
    }).map((el) => {
     return el.id
    });

    this.updateLocal(favoriteNewsId)

  }

  public removeFromFavorite(el, id) {
    this.newsData = this.newsData.map((currentArr, index) => {
      if (currentArr.id === id && currentArr.isFavorite === true) {
        currentArr.isFavorite = false;
      }
      return currentArr
    });


   // this.updateLocal()
  }

  get filteredNewsData() {
    if (this.state === 'favorite') {
      return this.newsData.filter(el => el.isFavorite === true);
    } else {
      return this.newsData;
    }
  }

  public favoriteNews() {
    this.state = 'favorite';
    this.filteredNewsData;
  }

  public allNews() {
    this.state = 'all';
    this.filteredNewsData;
  }

  public updateLocal(data) {
    localStorage.setItem('newsId', JSON.stringify(data));
  }




  /*
    get favoriteNews() {


      return
    }*/


  ngOnInit() {
  }

}
