import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup)

test('Render the app', () => {
   const wrapper = rtl.render(<App/>)
   const el = wrapper.getByText(/the dog website/i)

   expect(el).toBeVisible()
//    wrapper.debug(wrapper.queryByPlaceholderText('Image Count'))
})

test('render count input', () => {
    const wrapper = rtl.render(<App/>)
    const element = wrapper.queryByPlaceholderText(/image count/i)

    expect(element).toHaveValue(1)

})