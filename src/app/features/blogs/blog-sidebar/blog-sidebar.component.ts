import { Component, OnInit } from '@angular/core';
import { BlogsService } from './../blogs.service';
import { Blog } from 'src/app/core/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  blogs: Blog[];
  wordLimit: number;
  constructor(private blogsService: BlogsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogs = [];
    this.wordLimit = 100;
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'), 10);
      this.getSimilarBlogs(id);
    });
  }

  getSimilarBlogs(id: number) {
    this.blogsService.getSimilarBlogs(id).subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }

}
