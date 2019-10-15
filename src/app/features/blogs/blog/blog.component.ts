import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blog } from 'src/app/core/interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogForm: FormGroup;
  constructor(private route: ActivatedRoute, private blogsService: BlogsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      featureImage: ['http://lorempixel.com/500/300/'],
      content: ['', Validators.required],
      author: ['', Validators.required],
      upvotes: [0],
      comments: [0]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== 'new-blog') {
        this.getBlogDetails(parseInt(id, 10));
      }
    });
  }

  getBlogDetails(id: number) {
    this.blogsService.getBlogDetails(id).subscribe((blogItem: Blog) => {
      if (blogItem) {
        this.updateForm(blogItem);
      }
    });
  }

  updateForm(blogItem: Blog) {
    this.blogForm.patchValue({
      title: blogItem.title,
      featureImage: blogItem.featureImage,
      content: blogItem.content,
      author: blogItem.author,
      upvotes: blogItem.upvotes,
      comments: blogItem.comments
    });
  }

  submitBlog() {
    this.blogsService.addBlog(this.blogForm.value).subscribe(
      (res) => {
        this.router.navigate(['main/blogs/' + res.id]);
      },
      (err) => {

      }
    );
  }
}
