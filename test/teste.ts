import { Routes } from "@angular/router";
import { ListComponent } from "./features/list/list.component";

export const routes: Routes = [
  {
    path: "",
    component: ListComponent,
  },
];

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
@Component({
  selector: "app-list",
  standalone: true,
  imports: [],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
})
export class ListComponent {
  products: any[] = [];

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get<any>("/api/products").subscribe((products) => {
      this.products = products;
    });
  }
}
