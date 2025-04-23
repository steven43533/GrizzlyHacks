import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectSubmissionComponent } from './project-submission.component';

describe('ProjectSubmissionComponent', () => {
  let component: ProjectSubmissionComponent;
  let fixture: ComponentFixture<ProjectSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubmissionComponent ],
      imports: [ ReactiveFormsModule ] // Required for FormGroup/FormControl
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the hackathons list', () => {
    expect(component.hackathons.length).toBe(5);
  });

  it('should create a form with 4 controls', () => {
    expect(component.projectSubmission.contains('description')).toBeTruthy();
    expect(component.projectSubmission.contains('members')).toBeTruthy();
    expect(component.projectSubmission.contains('repo')).toBeTruthy();
    expect(component.projectSubmission.contains('logo')).toBeTruthy();
  });

  it('should make description, members, and repo controls required', () => {
    const descriptionControl = component.projectSubmission.get('description');
    const membersControl = component.projectSubmission.get('members');
    const repoControl = component.projectSubmission.get('repo');

    descriptionControl.setValue('');
    membersControl.setValue('');
    repoControl.setValue('');

    expect(descriptionControl.valid).toBeFalsy();
    expect(membersControl.valid).toBeFalsy();
    expect(repoControl.valid).toBeFalsy();
  });

  it('should log form on submit', () => {
    spyOn(console, 'log');
    component.projectSubmission.setValue({
      description: 'Test Description',
      members: 'Member 1, Member 2',
      repo: 'https://github.com/test/repo',
      logo: null
    });
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(component.projectSubmission);
  });

});
