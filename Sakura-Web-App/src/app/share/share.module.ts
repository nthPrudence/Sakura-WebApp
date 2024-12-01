import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ItemProductComponent } from './item-product/item-product.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ItemProductComponent]
})
export class ShareModule {}
