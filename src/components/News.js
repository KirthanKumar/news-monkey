import React, { Component } from "react"; // rce
import NewsItem from "./NewsItem";

// rce
export class News extends Component {
  articles =  [
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "CSK vs GT IPL Live Score 2024: Gujarat crumbling in mammoth chase, GT 129/8 in 18.2 overs - Hindustan Times",
            "description": "CSK vs GT IPL Live Score 2024, Chennai Super Kings vs Gujarat Titans: GT have lost wickets too frequently while chasing a target of 207.",
            "url": "https://www.hindustantimes.com/cricket/ipl-2024-csk-vs-gt-live-score-match-7-chennai-super-kings-vs-gujarat-titans-in-chepauk-ipl-live-match-today-26-march-101711440818847.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/26/550x309/dhoni_csk_bcci_1711473620279_1711473650927.jpg",
            "publishedAt": "2024-03-26T18:03:58Z",
            "content": "CSK vs GT IPL Live Score 2024: Shivam Dube blazed 51 off 23 balls as Chennai Super Kings scored a mammoth 206/6 batting first against Gujarat Titans at the Chepauk Stadium. While Sai Sudharsan has he… [+25489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricket.one"
            },
            "author": "Debashis Sarangi",
            "title": "[Watch] Ageless MS Dhoni Pulls Off An 'Insane Flying Catch' To Make Chepauk Go Wild - OneCricket",
            "description": "Dhoni, who has taken numerous stunning catches in his illustrious career, showcased his incredible fitness standard during CSK's ongoing IPL encounter against Gujarat Titans on Tuesday evening.",
            "url": "https://cricket.one/match-hub/watch-ageless-ms-dhoni-pulls-off-an-insane-flying-catch-to-make-chepauk-go-wild/6602ffcea95fe3722d5b483c",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1711472586545_Untitled design - 2024-03-26T223054.979.jpg",
            "publishedAt": "2024-03-26T17:03:10Z",
            "content": "MS Dhoni's full-stretch catch behind the stumps [X.com]\r\nThey say 'Age is just a number' and former Indian captain Mahendra Singh Dhoni is a living example of it. \r\nDhoni, who has taken numerous stun… [+1201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN India"
            },
            "author": "Aaditya Narayan",
            "title": "FIFA World Cup Qualifiers: What are India's chances of advancing to third round after Afghanistan loss - ESPN India",
            "description": "A 2-1 loss to Afghanistan dealt a massive blow to India's hopes of qualifying for the third round of qualifying for the 2026 FIFA World Cup.",
            "url": "https://www.espn.in/football/story/_/id/39813829/india-vs-afghanistan-fifa-world-cup-qualifiers-chances-advancing-third-round-loss",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0118%2Fr1278957_1296x729_16%2D9.jpg",
            "publishedAt": "2024-03-26T16:16:00Z",
            "content": "A 2-1 loss to Afghanistan in Guwahati on Tuesday dealt a massive blow to India's hopes of qualifying for the third round of qualifying for the 2026 FIFA World Cup.\r\nDoes the loss put India out of con… [+2352 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Andrew Fidel Fernando",
            "title": "Hasaranga's Sunrisers debut to be delayed by at least a week - ESPNcricinfo",
            "description": "He is expected to travel out of Sri Lanka over the next week and consult doctors overseas about chronic pain in his left heel",
            "url": "https://www.espncricinfo.com/story/wanindu-hasaranga-s-ipl-return-to-be-delayed-by-at-least-a-week-1426485",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/376100/376161.6.jpg",
            "publishedAt": "2024-03-26T14:56:07Z",
            "content": "Wanindu Hasaranga played in Sri Lanka's limited-overs series against Bangladesh through substantial pain  •  AFP/Getty Images"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Watch: Virat Kohli hugs an emotional Shikhar Dhawan in a heartwarming gesture - The Times of India",
            "description": "Cricket News: Virat Kohli and Shikhar Dhawan share a strong bond both on and off the cricket field. These two star batters have been teammates since their days play",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/watch-virat-kohli-hugs-an-emotional-shikhar-dhawan-in-a-heartwarming-gesture/articleshow/108796719.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108796806,width-1070,height-580,imgsize-25522,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-26T14:54:00Z",
            "content": null
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Expanded Women's Asia Cup to be played in Dambulla from July 19 - ESPNcricinfo",
            "description": "The India vs Pakistan group-stage game is scheduled for July 21; once again the tournament will feature an all-female team of match officials",
            "url": "https://www.espncricinfo.com/story/2024-women-s-asia-cup-with-india-pakistan-sri-lanka-and-bangladesh-to-be-played-in-dambulla-from-july-19-1426442",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347500/347590.6.jpg",
            "publishedAt": "2024-03-26T14:35:04Z",
            "content": "India, the defending champions, are the most successful team at the women's Asia Cup  •  Asian Cricket Council"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Dog 'Chased, Kicked, Punched' During GT vs MI IPL Game, Incident Draws Sharp Criticism From Activist.. - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9kb2ctY2hhc2VkLWtpY2tlZC1wdW5jaGVkLWR1cmluZy1ndC12cy1taS1pcGwtZ2FtZS1pbmNpZGVudC1kcmF3cy1zaGFycC1jcml0aWNpc20tZnJvbS1hY3RpdmlzdHMtNTMxNDkzNNIBjwFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9kb2ctY2hhc2VkLWtpY2tlZC1wdW5jaGVkLWR1cmluZy1ndC12cy1taS1pcGwtZ2FtZS1pbmNpZGVudC1kcmF3cy1zaGFycC1jcml0aWNpc20tZnJvbS1hY3RpdmlzdHMtNTMxNDkzNC9hbXAvMQ",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-03-26T14:33:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Crictracker.com"
            },
            "author": "CricTracker",
            "title": "PCC vs TTP Live Score, Match 14 | Punjab CC vs Team Tiger Portugal Score & Updates of Match 14 - CricTracker",
            "description": "PCC vs TTP Match 14, Live Score: Get all the latest PCC vs TTP Live Score of Match 14 along with ball by ball commentary & updates on CricTracker.",
            "url": "https://www.crictracker.com/live-scores/pcc-vs-ttp-match-14-t10-ecs-portugal-t10-26-mar-2024/",
            "urlToImage": "https://www.crictracker.com/images/CricTracker-Facebook-Preview.jpg",
            "publishedAt": "2024-03-26T13:45:12Z",
            "content": null
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Firdose Moonda",
            "title": "Burger and de Zorzi get CSA contracts; Nortje and de Kock omitted from list - ESPNcricinfo",
            "description": "Andile Phehlukwayo has also returned to the national fold, as Cricket South Africa announced their squad for the 2024-25 season",
            "url": "https://www.espncricinfo.com/story/nandre-burger-and-tony-de-zorzi-get-csa-contracts-quinton-de-kock-omitted-from-list-1426422",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/371400/371483.6.jpg",
            "publishedAt": "2024-03-26T13:07:30Z",
            "content": "NewsAndile Phehlukwayo has also returned to the national fold, as Cricket South Africa announced their squad for the 2024-25 season\r\nFirdose Moonda is ESPNcricinfo's correspondent for South Africa an… [+16 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Crictracker.com"
            },
            "author": "Ahsan Jami",
            "title": "IPL 2024: Match 8, SRH vs MI Match Prediction – Who will win today’s IPL match between SRH vs MI? - CricTracker",
            "description": "PreviewSunrisers Hyderabad will face Mumbai Indians in Match 8 of the 2024 Indian Premier League at the Rajiv Gandhi International Stadium on Wednesday evening. Both teams suffered defeats in their op",
            "url": "https://www.crictracker.com/cricket-match-predictions/ipl-2024-match-8-srh-vs-mi-match-prediction-who-will-win-todays-ipl-match-between-srh-vs-mi-0130/",
            "urlToImage": "https://media.crictracker.com/media/attachments/1711217959546_kkr-vs-srh-5.jpeg",
            "publishedAt": "2024-03-26T12:54:00Z",
            "content": "Preview\r\nSunrisers Hyderabad will face Mumbai Indians in Match 8 of the 2024 Indian Premier League at the Rajiv Gandhi International Stadium on Wednesday evening. Both teams suffered defeats in their… [+3376 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'Woh kehte hai na ki jaisi sangati waisa…': Virender Sehwag's hilarious reasons behind slump in his form at Punjab Kings | Cricket News - The Times of India",
            "description": "Cricket News: Virender Sehwag, renowned for his straightforward commentary style, showcased his trademark wit and humor while providing Hindi commentary during IPL",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/woh-kehte-hai-na-ki-jaisi-sangati-waisa-virender-sehwags-hilarious-reasons-behind-slump-in-his-form-at-punjab-kings/articleshow/108793310.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108793503,width-1070,height-580,imgsize-43208,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-26T12:12:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Realmadrid.com"
            },
            "author": null,
            "title": "The Santiago Bernabéu will host the Spain-Brazil game tomorrow - Real Madrid CF",
            "description": "Canal oficial del Real Madrid. Toda la información del Real Madrid con noticias, jugadores, venta de entradas, servicios al socio e información del club.",
            "url": "https://www.realmadrid.com/es-ES",
            "urlToImage": "https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/internet/web/rm-spa-web/images/meta/og-image.png",
            "publishedAt": "2024-03-26T11:56:03Z",
            "content": "Real Madrid-UCAM Murcia: a por el pase a las semifinales de la Copa del Rey"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Shakib returns for second Test against Sri Lanka - ESPNcricinfo",
            "description": "Bangladesh also brought in uncapped pace bowler Hasan Mahmud for the injured Musfik Hasan",
            "url": "https://www.espncricinfo.com/story/shakib-al-hasan-named-in-test-squad-for-chattogram-vs-sri-lanka-1426409",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/351400/351472.6.jpg",
            "publishedAt": "2024-03-26T11:26:15Z",
            "content": "Bangladesh's Test credentials in question, again"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "'Trust needs to be earned': Hardik Pandya's relationship with Rohit Sharma and Mumbai Indians teammates aptly summed up - Hindustan Times",
            "description": "A CSK great pinpoints the importance of trust in Hardik Pandya-Rohit Sharma relationship. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/trust-needs-to-be-earned-hardik-pandyas-relationship-with-rohit-sharma-and-mumbai-indians-teammates-aptly-summed-up-101711451497589.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/CRICKET-IND-IPL-T20-GUJARAT-MUMBAI-33_1711451538424_1711451580599.jpg",
            "publishedAt": "2024-03-26T11:25:33Z",
            "content": "It's been over three months since Hardik Pandya replaced Rohit Sharma as captain of Mumbai Indians, and two days since he led MI for the first time. Yet, the public's opinion of Hardik hasn't changed… [+3051 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Trending Desk",
            "title": "Hardik Pandya, Rohit Sharma's daughter team up at Mumbai Indians Holi bash, splash colours on her father. Watch - Hindustan Times",
            "description": "Mumbai Indians celebrated Holi a day after their heartbreak against Gujarat Titans in the ongoing IPL. | Trending",
            "url": "https://www.hindustantimes.com/trending/hardik-pandya-rohit-sharmas-daughter-team-up-at-mumbai-indians-holi-bash-splash-colours-on-her-father-watch-101711449988057.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/Hardik_Pandya_Rohit_Sharma_Daughter_Holi_1711450623601_1711450643511.png",
            "publishedAt": "2024-03-26T10:58:56Z",
            "content": "Heartwarming scenes unfolded at the Mumbai Indians Holi bash on Sunday as new skipper Hardik Pandya and the rest of the team indulged in colours and fun a day after their tough loss to Gujarat Titans… [+1559 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "\"Mera Hukum Hai Room Aao Jaldi\": Ravindra Jadeja's Insta Banter With Wife Rivaba Goes Viral | Cricket News - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMigAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9tZXJhLWh1a3VtLWhhaS1yb29tLWFhby1qYWxkaS1yYXZpbmRyYS1qYWRlamFzLWluc3RhLWJhbnRlci13aXRoLXdpZmUtcml2YWJhLWdvZXMtdmlyYWwtNTMxMzYwONIBAA",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-03-26T10:52:50Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "R Kaushik",
            "title": "No hidden feelings in Virat Kohli's pre-match interaction with Kevin Pietersen that fuelled 'I still got it' truth bomb - Hindustan Times",
            "description": "It’s possible that Pietersen enlightened Kohli on the spirit in which he had made on-air remarks on Sunday, during the Gujarat Titans-Mumbai Indians contest. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/no-hidden-feelings-in-virat-kohlis-pre-match-interaction-with-kevin-pietersen-that-fuelled-i-still-got-it-truth-bomb-101711446243684.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/26/1600x900/Virat_Kohli_RCB_IPL2024_1711447800810_1711447801010.jpg",
            "publishedAt": "2024-03-26T10:15:50Z",
            "content": "A little before 6 pm on Monday, Kevin Pietersen strode purposefully towards the western side of the M Chinnaswamy Stadium outfield. To figure out where he was headed and who the object of his interes… [+4340 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricket.one"
            },
            "author": "Aakash Saini",
            "title": "Chennai To Host Special Honour For Ravindra Jadeja At 7:38 PM In CSK Vs GT - OneCricket",
            "description": "CSK fans have planned a significant tribute for Ravindra Jadeja for his IPL 2023 final heroics, when the star all-rounder turns up for the team in their IPL 2024 clash against Gujarat Titans.",
            "url": "https://cricket.one/cricket-news/chennai-to-host-special-honour-for-ravindra-jadeja-at-738-pm-in-csk-vs-gt/66029a4824ec3d27224843d7",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1711444617380_thu bcci.jpg",
            "publishedAt": "2024-03-26T09:50:00Z",
            "content": "Ravindra Jadeja hit the winning runs for CSK during IPL 2023 final vs GT (BCCI)\r\nRavindra Jadeja is set to receive a significant tribute by the Chepauk crowd on March 26 during CSKs home IPL 2024 mat… [+1470 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "RCB hit back: Murali Kartik's 'trash' remark for Yash Dayal receives cryptic response - The Times of India",
            "description": "Cricket News: Murali Kartik, India's former left-spinner, currently engaged in commentary duties for IPL 2024, found himself amidst controversy due to his comments",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/rcb-hit-back-murali-kartiks-trash-remark-for-yash-dayal-receives-cryptic-response/articleshow/108788489.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108788476,width-1070,height-580,imgsize-151418,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-26T09:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Cricket.one"
            },
            "author": "Aakash Saini",
            "title": "[Watch] 'Senti Kyu Ho Raha Hai' - Virat Kohli To Harpreet Brar During RCB vs PBKS - OneCricket",
            "description": "RCB veteran Virat Kohli was involved in a hilarious banter with Punjab Kings spinner Harpreet Brar at Bengaluru in match number six of the ongoing IPL 2024 season.",
            "url": "https://cricket.one/match-hub/watch-senti-kyu-ho-raha-hai-virat-kohli-to-harpreet-brar-during-rcb-vs-pbks/66029111045989003fdf473f",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1711444107208_Untitled design (9).jpg",
            "publishedAt": "2024-03-26T09:10:41Z",
            "content": "Virat Kohli in action against PBKS in IPL 2024 (BCCI)\r\nVirat Kohli dished out a majestic 49-ball 77 against Punjab Kings at Bengaluru on March 25, in match number six of the IPL 2024 season. \r\nHaving… [+1554 chars]"
        }
    ]


  constructor() {
    super();
    // console.log("Hello I am a constructor from News component");
    this.state = {
      articles : this.articles,
      loading: false,
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My Title"
              description="desc"
              imageUrl="https://www.hindustantimes.com/ht-img/img/2024/03/26/550x309/dhoni_csk_bcci_1711473620279_1711473650927.jpg"
              newsUrl=""
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My Title" description="desc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
