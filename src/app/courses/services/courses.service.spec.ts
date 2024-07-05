import { TestBed } from "@angular/core/testing";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { CoursesService } from "./courses.service";
import { COURSES } from "../../../../server/db-data";

describe("CourseService", () => {
  let courseService: CoursesService,
    httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService],
    });

    courseService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it("should retrieve all courses", () => {
    courseService.findAllCourses().subscribe((courses) => {
      expect(courses).toBeTruthy("No courses returned");
      expect(courses.length).toBe(12, "Incorrect number of courses returned");
      const course = courses.find((course) => course.id == 12);
      expect(course.titles.description).toBe("Angular Testing Course");
    });

    const req = httpTestingController.expectOne("/api/courses");

    expect(req.request.method).toEqual("GET");

    req.flush({ payload: Object.values(COURSES) });
  });
});
