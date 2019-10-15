import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Blog } from 'src/app/core/interfaces';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[];
  wordLimit: number;
  config: any;

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.wordLimit = 100;
    this.blogs = [];
    this.config = {
      loading: false,
      loadmore: true,
      scrollPercent: 95
    };
    this.getBlogs();
  }

  getBlogs(event?: any) {
    this.config.loading = true;
    this.blogsService.getBlogs().subscribe((blogs: Blog[]) => {
      this.config.loading = false;
      this.blogs = this.blogs.concat(blogs.reverse());
      if (this.blogs.length >= 500) {
        this.config.loadmore = false;
      }
    });
  }
}
