import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('user hasnt clicked on a specific event', () => {
      // no code required because nothing has happened //
    });

    when('user doesn\'t click on a specific event', () => {
      AppWrapper = mount(<App />);
    });

    then('the event details are collapsed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .description')).toHaveLength(0);
    });

  });

  test('User can expand an event to see its details', ({ given, when, then }) => {

    given('user wants to view details on an event', () => {
      AppWrapper = mount(<App />);
    });

    when('user clicks on a spefific event', () => {
      AppWrapper.update();
      AppWrapper.find('.event .btn-details').at(0).simulate('click')
    });

    then('the event expands to show the event details', () => {
      expect(AppWrapper.find('.event .description')).toHaveLength(1);
    });

  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {

    given('user is viewing the event details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .description')).toHaveLength(1);
    });

    when('user clicks a button to collapse details', () => {
      AppWrapper.update();
      AppWrapper.find('.event .btn-details').at(0).simulate('click');
    });

    then('the event detail collapse to hide details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .description')).toHaveLength(0);
    });

  });

});