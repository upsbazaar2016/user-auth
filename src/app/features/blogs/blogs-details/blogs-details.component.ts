import { Component, OnInit } from '@angular/core';
import { BlogsService } from './../blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/interfaces';
@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {
  blog: Blog;
  wordLimit: number;

  constructor(private blogsService: BlogsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.wordLimit = 100;

    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'), 10);
      this.getBlogDetails(id);
    });
  }

  getBlogDetails(id: number) {
    this.blogsService.getBlogDetails(id).subscribe(blog => this.blog = blog);
  }
}
