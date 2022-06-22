export const PageNavigation = {
  wrapper: '.z-20',
  title: '.no-underline > .mr-2',
  subTitle: '.no-underline > .text-gray-600',
  searchBox: '.hidden > .nextra-search > .appearance-none',
  viewMode: '.cursor-pointer.p-2.text-current'
};

export const PageSideBar = {
  contentList: '.hidden > ul > > a',
  list: (page) => `div > ul > li:nth-of-type(${page})`
};

export const PageArticle = {
  docContainer: '.docs-container',
  title: 'h1',
  contentText: '.max-w-screen-md p'
};
export const PageFooter = {
  pagination: (title) => `.text-lg[title="${title}"]`,
  footerCopyright: '.mt-24 > .text-gray-600',
  editPage: '.text-sm'
};
