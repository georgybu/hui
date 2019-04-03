import React, { Fragment, Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Grid, Icon, Button } from '../../index';
import Story from '../../../.storybook/components/Story';

// TODO: add code examples
class InputInvalidExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalid: false,
      explain: null,
      value: 'שלום'
    }
  }

  onchange = (e) => {
    const { value } = e.target;

    this.setState({
      invalid: !!!value.length,
      explain: 'יש צורך בהזנת שם מלא',
      value
    })
  }

  render() {

    return (
      <div>
        <Input invalid={this.state.invalid} defaultValue="שלום" onChange={this.onchange} placeholder="שם מלא" explain={this.state.explain} />
        <br/>
        {this.state.value}
      </div>
    )
  }
}



let inputref;

function focusInput(e) {
  inputref.focus();
}

function blurInput(e) {
  inputref.blur();
}

function change(e) {
  const { value } = e.target;
  console.log(e);
  console.log('value:', value);
}

storiesOf('Input', module)
  .add('code', () => (
    <Fragment>
      <Story.Header
        title="תיבת הזנה"
        info="תיבת הזנה בטופס"
      />
      <Story.Group>
        <Story
          title="שימוש רגיל"
          info="שימוש רגיל"
        >
          <Grid col={4}>
            <Grid.Column>
              <Input onChange={change} defaultValue="defaultValue" />
            </Grid.Column>
            <Grid.Column>
              <Input onChange={change} value="value" />
            </Grid.Column>
            <Grid.Column>
              <Input placeholder="ממלא מקום" />
            </Grid.Column>
            <Grid.Column>
              <Input disabled />
            </Grid.Column>
            <Grid.Column>
              <Input disabled placeholder="ממלא מקום" />
            </Grid.Column>
          </Grid>
        </Story>

        <Story
          title="עם כותרת"
          info="הוספת כותרת לשדה בעזרת המאפיין label"
        >
          <Grid col={6}>
            <Grid.Column>
              <Input label="שם פרטי" id="firstname" />
            </Grid.Column>
            <Grid.Column>
              <Input label="שם משפחה" id="lastname" required />
            </Grid.Column>
          </Grid>
        </Story>

        <Story
          title="התחלה וסוף"
          info="ישנה אפשרות להוסיף רכיב התחלה וסוף לתיבת ההזנה"
        >
          <div>
            <Grid col={6}>
              <Grid.Column>
                <Input label="כתובת אתר" id="phone" addonBefore="https://" addonAfter="co.il" defaultValue="www.harel-group.co.il" />
              </Grid.Column>
              <Grid.Column>
                <Input label="סכום ביטוח" addonAfter="₪" placeholder="סכום בשקלים" />
              </Grid.Column>
              <Grid.Column>
                <Input addonBefore={<Icon name="phone" />} placeholder="טלפון לקוח" />
              </Grid.Column>
            </Grid>
          </div>
        </Story>

        <Story
          title="כפתור מחיקה"
          info="תיבת הזנה עם כפתור מחיקה שמאפשר למחוק את התוכן בתיבה ברגע שקיים תוכן כלשהוא"
        >
          <Input allowClear placeholder="עם כפתור מחיקה" />
        </Story>

        <Story
          title="תחילית וסופית"
          info="מופיעים בתוך תיבת ההזנה"
        >
          <Grid col={6}>
            <Grid.Column>
              <Input label="טלפון" id="phone" prefix={<Icon name="phone" />} placeholder="מספר טלפון" />
            </Grid.Column>
            <Grid.Column>
              <Input suffix="₪" placeholder="סכום ביטוח" />
            </Grid.Column>
            <Grid.Column>
              <Input prefix={<Icon name="phone" />} suffix="₪" placeholder="גם תחילית וגם סופית" />
            </Grid.Column>
            <Grid.Column>
              <Input disabled prefix={<Icon name="phone" />} placeholder="מספר טלפון" />
            </Grid.Column>
            <Grid.Column>
              <Input label="טלפון" id="phone" prefix={<Icon name="phone" />} suffix="₪" addonBefore="https://" addonAfter="co.il" defaultValue="www.harel-group.co.il" />
            </Grid.Column>
          </Grid>
        </Story>

        <Story
          title="מצב שגיאה"
          info="תיבת הזנה מוגדרת במצב לא תקין בעזרת המאפיין invalid"
        >
          <div>
            <Grid col={6}>
              <Grid.Column>
                <Input invalid placeholder="דואר אלקטרוני" />
              </Grid.Column>
              <Grid.Column>
                <InputInvalidExample />
              </Grid.Column>
            </Grid>
          </div>
        </Story>

        <Story
          title="פעולות"
          info="ניתן לבצע פוקוס או יציאה מתיבת ההזנה בעזרת קוד"
        >
          <div>
            <Input ref={r => inputref = r} />
            <br/><br/>
            <Button onClick={focusInput}>focus input</Button>
            <Button onClick={blurInput}>blur input</Button>
          </div>
        </Story>
      </Story.Group>

      <Story.PropsTable type={Input} />
    </Fragment>
  ))
