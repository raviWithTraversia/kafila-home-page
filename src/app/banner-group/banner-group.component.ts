import { Component } from '@angular/core';


interface Banner {
  _id: number;
  title:string;
  subtitle: string;
  image: string;
}
@Component({
  selector: 'app-banner-group',
  templateUrl: './banner-group.component.html',
  styleUrls: ['./banner-group.component.css']
})
export class BannerGroupComponent {
  banners = [
    {
      _id: 1,
      title: "Inbuilt Expense Management Tool",
      subtitle: "Single platform for filing expenses and ensuring easy reconciliation",
      image: "home-page-banner.webp"
    },
    {
      _id: 2,
      title: "Save on Company Travel Expenses",
      subtitle: "With special corporate rates on flights & hotels, save your travel budget by paying less for more features",
      image: "home-page-banner.webp"
    },
    {
      _id: 3,
      title: "Inbuilt Expense Management Tool",
      subtitle: "Single platform for filing expenses and ensuring easy reconciliation",
      image: "home-page-banner.webp"
    },
    {
      _id: 4,
      title: "Save on Company Travel Expenses",
      subtitle: "With special corporate rates on flights & hotels, save your travel budget by paying less for more features",
      image: "home-page-banner.webp"
    },
  ];
  animate= false;
  selectedBanner = this.banners[0];

  selectBanner(banner: Banner){
    this.animate = true;
    setTimeout(()=>{
      this.animate = false;
    }, 300)
    this.selectedBanner = banner;
  }
}
