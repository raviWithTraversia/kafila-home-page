import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { fixImagePath } from 'src/utils/get-image-path'
import { map } from 'rxjs'
interface Banner {
  _id: number
  title: string
  description: string
  imagePath: string
  newImagePath: string
}
@Component({
  selector: 'app-banner-group',
  templateUrl: './banner-group.component.html',
  styleUrls: ['./banner-group.component.css'],
})
export class BannerGroupComponent {
  // banners = [
  //   {
  //     _id: 1,
  //     title: 'Inbuilt Expense Management Tool',
  //     description:
  //       'Single platform for filing expenses and ensuring easy reconciliation',
  //     image: 'home-page-banner.jpg',
  //   },
  //   {
  //     _id: 2,
  //     title: 'Save on Company Travel Expenses',
  //     description:
  //       'With special corporate rates on flights & hotels, save your travel budget by paying less for more features',
  //     image: 'hero-1.jpg',
  //   },
  //   {
  //     _id: 3,
  //     title: 'Inbuilt Expense Management Tool',
  //     description:
  //       'Single platform for filing expenses and ensuring easy reconciliation',
  //     image: 'hero-2.jpg',
  //   },
  //   {
  //     _id: 4,
  //     title: 'Save on Company Travel Expenses',
  //     description:
  //       'With special corporate rates on flights & hotels, save your travel budget by paying less for more features',
  //     image: 'hero-3.jpg',
  //   },
  // ]
  banners: Banner[] = []
  animate = false
  showVideo = false
  selectedBannerIdx: null | number = null
  changeBannerIntervalID: any

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.changeBannerIntervalID = this.bannerChangeInterval()
    this.http
      .get<any>(
        'https://kafila.traversia.net/api/manageUpload/getUploadImage?id=6555f84c991eaa63cb171a9f',
      )
      .pipe(map((response) => response.Result))
      .subscribe({
        next: (originalBannerList) => {
          const bannersList = originalBannerList
            ?.filter((banner: any) => banner?.type === 'login')
            ?.map(fixImagePath)
          this.banners = bannersList
          this.selectedBannerIdx = 0
        },
      })
  }

  bannerChangeInterval() {
    return setInterval(() => {
      if (this.selectedBannerIdx == null) return
      this.selectedBannerIdx =
        this.selectedBannerIdx + 1 >= this.banners.length
          ? 0
          : this.selectedBannerIdx + 1
      console.log({ banner: this.banners[this.selectedBannerIdx] })
    }, 10_000)
  }
  selectBanner(idx: number) {
    this.animate = true
    setTimeout(() => {
      this.animate = false
    }, 300)
    clearInterval(this.changeBannerIntervalID)
    this.changeBannerIntervalID = this.bannerChangeInterval()
    this.selectedBannerIdx = idx
    console.log({ banner: this.banners[this.selectedBannerIdx] })
  }
  toggleVideoModal() {
    this.showVideo = !this.showVideo
  }
}
