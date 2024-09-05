import { Component } from '@angular/core'

interface Banner {
  _id: number
  title: string
  subtitle: string
  image: string
}
@Component({
  selector: 'app-banner-group',
  templateUrl: './banner-group.component.html',
  styleUrls: ['./banner-group.component.css'],
})
export class BannerGroupComponent {
  banners = [
    {
      _id: 1,
      title: 'Inbuilt Expense Management Tool',
      subtitle:
        'Single platform for filing expenses and ensuring easy reconciliation',
      image: 'home-page-banner.jpg',
    },
    {
      _id: 2,
      title: 'Save on Company Travel Expenses',
      subtitle:
        'With special corporate rates on flights & hotels, save your travel budget by paying less for more features',
      image: 'hero-1.jpg',
    },
    {
      _id: 3,
      title: 'Inbuilt Expense Management Tool',
      subtitle:
        'Single platform for filing expenses and ensuring easy reconciliation',
      image: 'hero-2.jpg',
    },
    {
      _id: 4,
      title: 'Save on Company Travel Expenses',
      subtitle:
        'With special corporate rates on flights & hotels, save your travel budget by paying less for more features',
      image: 'hero-3.jpg',
    },
  ]
  animate = false
  showVideo = false
  selectedBannerIdx = 0
  changeBannerIntervalID: any

  ngOnInit() {
    this.changeBannerIntervalID = this.bannerChangeInterval()
  }

  bannerChangeInterval() {
    return setInterval(() => {
      this.selectedBannerIdx =
        this.selectedBannerIdx + 1 >= this.banners.length
          ? 0
          : this.selectedBannerIdx + 1
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
  }
  toggleVideoModal() {
    this.showVideo = !this.showVideo
  }
}
