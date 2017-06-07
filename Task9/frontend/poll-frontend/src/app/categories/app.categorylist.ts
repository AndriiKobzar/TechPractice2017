import { Component } from '@angular/core'
import { CategoryService } from './app.categories.service'
import { Category } from './app.category'
import { OnInit } from '@angular/core'
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "category-list",
    templateUrl: "./app.categorylist.html",
    styleUrls: ["./app.category.css"],
    providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
    categories: Category[];
    competitionId: number;
    isLogined: boolean;
    constructor(private categoryService: CategoryService,
        private route: ActivatedRoute) {


    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.competitionId = +params['id'];
            this.categoryService.getCategories(+params["id"])
                .subscribe(categorieslist => { this.categories = categorieslist; },
                error => { });
        });
        this.isLogined = !!localStorage.getItem("TOKEN");
    }
}
