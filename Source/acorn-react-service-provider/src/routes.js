/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const blog = lazy(() => import('views/blog/Blog'));
const community = {
  index: lazy(() => import('views/community/Community')),
  list: lazy(() => import('views/community/CommunityList')),
};
const upgrade = lazy(() => import('views/upgrade/Upgrade'));

const dashboard = {
  gettingStarted: lazy(() => import('views/dashboard/DashboardGettingStarted')),
  analysis: lazy(() => import('views/dashboard/DashboardAnalysis')),
};
const services = {
  database: lazy(() => import('views/services/ServicesDatabase')),
  databaseAdd: lazy(() => import('views/services/ServicesDatabaseAdd')),
  databaseDetail: lazy(() => import('views/services/ServicesDatabaseDetail')),
  storage: lazy(() => import('views/services/ServicesStorage')),
  storageFolder: lazy(() => import('views/services/ServicesStorageFolder')),
  hosting: lazy(() => import('views/services/ServicesHosting')),
  users: lazy(() => import('views/services/ServicesUsers')),
};
const account = {
  settings: lazy(() => import('views/account/AccountSettings')),
  billing: lazy(() => import('views/account/AccountBilling')),
  security: lazy(() => import('views/account/AccountSecurity')),
};
const support = {
  docs: lazy(() => import('views/support/SupportDocs')),
  docsDetail: lazy(() => import('views/support/SupportDocsDetail')),
  knowledgeBase: lazy(() => import('views/support/SupportKnowledgeBase')),
  tickets: lazy(() => import('views/support/SupportTickets')),
  ticketsDetail: lazy(() => import('views/support/SupportTicketsDetail')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboard/getting-started`,
    },
    {
      path: `${appRoot}/blog`,
      component: blog,
      label: 'menu.blog',
      icon: 'file-text',
    },
    {
      path: `${appRoot}/upgrade`,
      label: 'menu.upgrade',
      icon: 'trend-up',
      component: upgrade,
    },
    {
      path: `${appRoot}/community`,
      label: 'menu.community',
      icon: 'messages',
      component: community.index,
      subs: [
        {
          path: '/list',
          label: 'menu.community-list',
          hideInMenu: true,
          component: community.list,
        },
      ],
    },
  ],
  sidebarItems: [
    {
      path: `${appRoot}/dashboard`,
      label: 'menu.dashboard',
      icon: 'grid-1',
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboard/getting-started`,
      subs: [
        { path: '/getting-started', label: 'menu.getting-started', icon: 'navigate-diagonal', component: dashboard.gettingStarted },
        { path: '/analysis', label: 'menu.analysis', icon: 'chart-4', component: dashboard.analysis },
      ],
    },
    {
      path: `${appRoot}/services`,
      label: 'menu.services',
      icon: 'grid-1',
      exact: true,
      redirect: true,
      to: `${appRoot}/services/database`,
      subs: [
        {
          path: '/database',
          label: 'menu.database',
          icon: 'database',
          component: services.database,
          subs: [
            { path: '/add', label: 'menu.database-add', hideInMenu: true, component: services.databaseAdd },
            { path: '/detail', label: 'menu.database-detail', hideInMenu: true, component: services.databaseDetail },
          ],
        },
        {
          path: '/storage',
          label: 'menu.storage',
          icon: 'file-image',
          component: services.storage,
          subs: [{ path: '/folder', label: 'menu.storage', hideInMenu: true, component: services.storageFolder }],
        },
        { path: '/storage-folder', component: services.storageFolder, hideInMenu: true },
        { path: '/hosting', label: 'menu.hosting', icon: 'router', component: services.hosting },
        { path: '/users', label: 'menu.users', icon: 'user', component: services.users },
      ],
    },
    {
      path: `${appRoot}/account`,
      label: 'menu.account',
      icon: 'user',
      exact: true,
      redirect: true,
      to: `${appRoot}/account/settings`,
      subs: [
        { path: '/settings', label: 'menu.settings', icon: 'gear', component: account.settings },
        { path: '/billing', label: 'menu.billing', icon: 'credit-card', component: account.billing },
        { path: '/security', label: 'menu.security', icon: 'shield', component: account.security },
      ],
    },
    {
      path: `${appRoot}/support`,
      label: 'menu.support',
      icon: 'help',
      exact: true,
      redirect: true,
      to: `${appRoot}/support/docs`,
      subs: [
        {
          path: '/docs',
          label: 'menu.docs',
          icon: 'file-empty',
          component: support.docs,
          subs: [{ path: '/detail', label: 'menu.docs', icon: 'file-empty', component: support.docsDetail, hideInMenu: true }],
        },
        { path: '/knowledge-base', label: 'menu.knowledge-base', icon: 'notebook-1', component: support.knowledgeBase },
        {
          path: '/tickets',
          label: 'menu.tickets',
          icon: 'bookmark',
          component: support.tickets,
          subs: [{ path: '/detail', label: 'menu.tickets-detail', icon: 'file-empty', component: support.ticketsDetail, hideInMenu: true }],
        },
      ],
    },
  ],
};
export default routesAndMenuItems;
