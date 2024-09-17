import React from 'react';
import {render, screen} from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

StyleSheetTestUtils.suppressStyleInjection();

const coursesList = [{id: 1, name: 'ES6', credit: 60},
{id: 2, name: 'Webpack', credit: 20},
{id: 3, name: 'React', credit: 40}]

test('CourseList renders without crashing', () => {
    render(<CourseList listCourses={coursesList}/>)
    expect(Number(screen.getAllByRole('row').length) > 1).toBeTruthy()
})

test('CourseList renders 4 rows with list provided', () => {
    render(<CourseList listCourses={coursesList}/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(4) // 3 courses + 1 header row
})

test('CourseList renders correctly with list not provided', () => {
    render(<CourseList listCourses={[]}/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(1)
    expect(screen.getByText('No courses available yet')).toBeInTheDocument()
})
