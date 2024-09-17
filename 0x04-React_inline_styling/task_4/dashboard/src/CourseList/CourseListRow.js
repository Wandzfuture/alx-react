import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const styles = StyleSheet.create({
    row: {
      borderBottom: '1px solid #ccc',
    },
    headerRow: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
    defaultRow: {
      backgroundColor: '#fff',
    },
    headerCell: {
      fontSize: '18px',
      padding: '10px',
    },
    defaultCell: {
      padding: '10px',
    },
  });

  const rowClassName = css(
    styles.row,
    isHeader ? styles.headerRow : styles.defaultRow
  );

  const cellClassName = css(
    isHeader ? styles.headerCell : styles.defaultCell
  );

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr className={rowClassName}>
          <th colSpan="2" className={cellClassName}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={rowClassName}>
          <th className={cellClassName}>{textFirstCell}</th>
          <th className={cellClassName}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={rowClassName}>
        <td className={cellClassName}>{textFirstCell}</td>
        <td className={cellClassName}>{textSecondCell}</td>
      </tr>
    );
  }
};

export default CourseListRow;
