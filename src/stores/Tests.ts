import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTestStore = defineStore('test', () => {
  const assessments = ref(
    [
      {
        textName: 'Exam',
        subject: 'Mathematics',
        score: 85,
        grade: 'A',
        date: '2024-08-15'
      },
      {
        textName: 'Assignment',
        subject: 'Mathematics',
        score: 78,
        grade: 'B',
        date: '2024-08-10'
      },
      {
        textName: 'Pre-Test',
        subject: 'Mathematics',
        score: 65,
        grade: 'C',
        date: '2024-08-05'
      },
      {
        textName: 'Class Test',
        subject: 'English',
        score: 92,
        grade: 'A',
        date: '2024-08-12'
      },
      {
        textName: 'Assignment',
        subject: 'English',
        score: 88,
        grade: 'A',
        date: '2024-08-08'
      },
      {
        textName: 'Pre-Test',
        subject: 'English',
        score: 72,
        grade: 'B',
        date: '2024-08-03'
      },
      
  ]);

  return {
    assessments
  }
});
