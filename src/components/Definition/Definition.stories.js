import React from 'react';
import { storiesOf } from '@storybook/react';
import { Definition } from '../../index';

const items = [
  {
    id: 7,
    title: 'הגדרה',
    desc: 'תוכן תיאור ההגדרה'
  },
  {
    id: 8,
    title: 'הגדרה עם מלל ארוך מאוד שיכול להגיע לשתי שורות ויותר מזה',
    desc: 'תוכן ההגדרה'
  }
];

const itemsWidthCustom = [
  {
    id: 7,
    title: 'הגדרה רוחב 200',
    desc: 'תוכן תיאור ההגדרה',
    width: 200
  },
  {
    id: 8,
    title: 'הגדרה רוחב ברירת מחדל 140',
    desc: 'תוכן ההגדרה'
  },
  {
    id: 9,
    title: 'הגדרה רוחב 300',
    desc: 'הסופרבול, משחק ההכרעה של אליפות ליגת הפוטבול האמריקאית שהתקיים אמש (א’), נחשב למאורע חגיגי של ממש במסגרתו אזרחי ארה”ב, ורבים ברחבי העולם, מרותקים אל מסכי הטלוויזיה. כתוצאה מכך, הרייטינג מרקיע שחקים, מה שמוביל לתחרות עזה בין תאגידי הענק על הפרסומת היצירתית ביותר שתבלוט בין השאר. בשנים האחרונות לא מעט ענקיות טכנולוגיה הצטרפו גם הן לחגיגה, והנה כמה מהפרסומות שהכי אהבנו ושודרו אמש.',
    width: 300
  }
];

storiesOf('Definition', module)
  .add('default', () => (<Definition items={items} />))
  .add('global custom width', () => (<Definition titleWidth={300} items={items} />))
  .add('items custom width', () => (<Definition items={itemsWidthCustom} />))