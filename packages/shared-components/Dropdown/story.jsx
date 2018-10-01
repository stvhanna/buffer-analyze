import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import Dropdown, { DropdownContent } from './index';

storiesOf('Dropdown', module)
  .addDecorator(checkA11y)
  .add('closed dropdown', () => (
    <div>
      <Dropdown
        toggleDropdown={action('toggle')}
      >This is a dropdown
        <DropdownContent>
          <ul>
            <li>An item</li>
            <li>Another item</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </div>
  ))
  .add('open dropdown', () => (
    <div>
      <Dropdown
        toggleDropdown={action('toggle')}
        isDropdownOpen
      >This is a dropdown
        <DropdownContent isDropdownOpen>
          <ul>
            <li>An item</li>
            <li>Another item</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </div>
  ));

