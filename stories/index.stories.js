import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Accordian, RadioGroup, DynamicRadioGroup } from 'component-library';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Accordian', module)
  .add('with text', () => <Accordian
    header="This is the header"
    body="This is the body text"
  />);


storiesOf('Button', module)
  .add('with text', () => <Button
    bgColor="orange"
    hoverColor="darkOrange"
    size="small"
    onClick={action('clicked')}>
    Hello Button
  </Button>)
  .add('with some emoji', () => (
    <Button
      onClick={action('clicked')}
      bgColor="blue"
      hoverColor="darkBlue"
      size="medium"
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('Radio Group', module)
  .add('Single', () => <RadioGroup
    values={['Yes', 'No']}
    name="radio_group_example"
  />)
  .add('Dynamic', () => <DynamicRadioGroup
    values={['Yes', 'No']}
    name="radio_group_example"
    dynamicValues={['Yes', 'No']}
    dynamicTitle="Test"
    dynamicName="test"
  />)
// write test to require text
