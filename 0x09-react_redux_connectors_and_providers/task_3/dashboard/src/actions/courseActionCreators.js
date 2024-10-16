import { selectCourse, unSelectCourse } from './courseActionTypes';

function selectCourseAction(course) {
  return {
    type: selectCourse,
    course
  };
}

function unSelectCourseAction() {
  return {
    type: unSelectCourse
  };
}

export { selectCourseAction, unSelectCourseAction };
