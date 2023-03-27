import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostingPageComponent } from './blog-posting-page.component';

describe('BlogPostingPageComponent', () => {
  let component: BlogPostingPageComponent;
  let fixture: ComponentFixture<BlogPostingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
