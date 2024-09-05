import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
// import { provideHttpClient, withJsonpSupport } from '@angular/common/http'
// import { ApplicationConfig } from '@angular/core'

// const appConfig: ApplicationConfig = {
//   providers: [provideHttpClient(withJsonpSupport())],
// }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
