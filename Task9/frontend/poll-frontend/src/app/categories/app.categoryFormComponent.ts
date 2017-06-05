import { Component, OnInit } from "@angular/core";
import { CategoryService } from "app/categories/app.categories.service";
import { Competition } from "app/competitions/app.competition";
import { Category } from "app/categories/app.category";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "category-form",
    templateUrl: "./app.categoryForm.html",
    styleUrls: [],
    providers: [CategoryService]
})
export class CategoryFormComponent implements OnInit {
    category: Category;
    constructor(private categoryService: CategoryService,
        private route: ActivatedRoute) {
        this.category = new Category(0, 0, "");
    }

    createCategory() {
        this.categoryService.createCategory(this.category).subscribe();
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => { this.category.competitionId = params['id']; });
    }
}