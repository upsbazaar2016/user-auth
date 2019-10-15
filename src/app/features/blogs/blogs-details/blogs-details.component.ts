import { Component, OnInit } from '@angular/core';
import { BlogsService } from './../blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Blog, Comment } from 'src/app/core/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {
  blog: Blog;
  comments: Comment[];
  wordLimit: number;
  commentForm: FormGroup;

  constructor(private blogsService: BlogsService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.wordLimit = 100;

    this.commentForm = this.formBuilder.group({
      blogId: [null, Validators.required],
      comment: ['', [Validators.required, Validators.minLength(1)]],
      author: ['', Validators.required],
      date: []
    });

    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'), 10);
      this.getBlogDetails(id);
    });
  }

  getBlogDetails(id: number) {
    const blogDetailsObservable = this.blogsService.getBlogDetails(id);
    const blogCommentsObservable = this.blogsService.getBlogComments(id); 
    forkJoin([blogDetailsObservable, blogCommentsObservable]).subscribe(
      res => {
        if (res[0]) {
          this.blog = res[0] ? res[0] : null;
        }

        if (res[1]) {
          this.comments = res[1] ? res[1] : [];
        }
      }
    );
  }

  submitComment() {
    this.commentForm.patchValue({
      blogId: this.blog.id,
      date: new Date()
    });
    this.blogsService.addBlogComment(this.commentForm.value).subscribe(
      (comment: Comment) => {
        this.comments.push(comment);
        this.blog.comments += 1;
        this.commentForm.reset();
      },
      (err) => {

      }
    );
  }
}
