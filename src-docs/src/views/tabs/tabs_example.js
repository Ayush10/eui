import React from 'react';
import { Link } from 'react-router-dom';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import {
  EuiCode,
  EuiTabs,
  EuiTab,
  EuiTabbedContent,
} from '../../../../src/components';
import { tabsConfig } from './playground';

import Tabs from './tabs';
const tabsSource = require('!!raw-loader!./tabs');
const tabsHtml = renderToHtml(Tabs);

import TabsCondensed from './tabs_condensed';
const tabsCondensedSource = require('!!raw-loader!./tabs_condensed');
const tabsCondensedHtml = renderToHtml(TabsCondensed);

import TabbedContent from './tabbed_content';
const tabbedContentSource = require('!!raw-loader!./tabbed_content');
const tabbedContentHtml = renderToHtml(TabbedContent);

import Controlled from './controlled';
const controlledSource = require('!!raw-loader!./controlled');
const controlledHtml = renderToHtml(Controlled);
const controlledSnippet = `<EuiTabbedContent
  tabs={tabs}
  selectedTab={selectedTab}
  onTabClick={onTabClick}
/>
`;

export const TabsExample = {
  title: 'Tabs',
  sections: [
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: tabsSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: tabsHtml,
        },
      ],
      text: (
        <p>
          <strong>EuiTabs</strong> allow a <EuiCode>size</EuiCode> prop. In
          general you should always use the default (medium) size. The small
          size is best for when placing inside popovers or other small
          containers. Reserve using the large size for when using as primary
          page navigation, like inside of{' '}
          <Link to="/layout/page">
            <strong>EuiPageHeader</strong>
          </Link>
          .
        </p>
      ),
      props: {
        EuiTabs,
        EuiTab,
      },
      demo: <Tabs />,
      playground: tabsConfig,
      snippet: [
        `<EuiTabs>
  <EuiTab onClick={onClick}>Example 1</EuiTab>
  <EuiTab onClick={onClick}>Example 2</EuiTab>
</EuiTabs>`,
        `<EuiTabs size="s>
  <EuiTab onClick={onClick}>Example 1</EuiTab>
  <EuiTab onClick={onClick}>Example 2</EuiTab>
</EuiTabs>`,
      ],
    },
    {
      title: 'Condensed tabs',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: tabsCondensedSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: tabsCondensedHtml,
        },
      ],
      text: (
        <p>
          <strong>EuiTabs</strong> allow a <EuiCode>display</EuiCode> prop. In
          general you should always use the default display. However, it is
          acceptable to use the alternative <EuiCode>condensed</EuiCode> display
          in situations where it is desirable to display a bolder, more compact
          and borderless tab interface (for use as primary navigation within
          your application or to establish a higher level hierarchy of tabs).
        </p>
      ),
      props: {
        EuiTabs,
      },
      demo: <TabsCondensed />,
      snippet: `<EuiTabs display="condensed">
  <EuiTab onClick={onClick}>Example 1</EuiTab>
  <EuiTab onClick={onClick}>Example 2</EuiTab>
</EuiTabs>`,
    },
    {
      title: 'Tabbed content',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: tabbedContentSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: tabbedContentHtml,
        },
      ],
      text: (
        <p>
          <strong>EuiTabbedContent</strong> makes it easier to associate tabs
          with content based on the selected tab. Use the{' '}
          <EuiCode>initialSelectedTab</EuiCode> prop to specify which tab to
          initially select.
        </p>
      ),
      props: {
        EuiTabbedContent,
      },
      demo: <TabbedContent />,
      snippet: `<EuiTabbedContent
  tabs={[
    {
      id: 'example1',
      name: 'Example 1',
      content: 'Example 1 content.',
    },
    {
      id: 'example2',
      name: 'Example 2',
      content: 'Example 2 content.',
    },
  ]}
/>`,
    },
    {
      title: 'Controlled tabbed content',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: controlledSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: controlledHtml,
        },
      ],
      text: (
        <p>
          You can also use the <EuiCode>selectedTab</EuiCode> and{' '}
          <EuiCode>onTabClick</EuiCode> props to take complete control over tab
          selection. This can be useful if you want to change tabs based on user
          interaction with another part of the UI.
        </p>
      ),
      props: {
        EuiTabbedContent,
      },
      snippet: controlledSnippet,
      demo: <Controlled />,
    },
  ],
};
