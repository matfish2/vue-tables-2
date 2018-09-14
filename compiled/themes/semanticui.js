'use strict';

module.exports = function () {
  return {
    framework: 'semanticui',
    table: 'ui small celled striped unstackable table',
    row: 'ui columns',
    column: 'ui column is-12',
    label: 'ui label',
    input: 'ui input',
    select: 'ui select',
    field: 'ui field',
    inline: 'is-horizontal',
    right: 'is-pulled-right',
    left: 'is-pulled-left',
    center: 'has-text-centered',
    contentCenter: 'is-centered',
    icon: 'ui icon',
    small: 'is-small',
    nomargin: 'marginless',
    button: 'ui primary button',
    groupTr: 'is-selected',
    dropdown: {
      container: 'ui dropdown',
      trigger: 'ui dropdown-trigger',
      menu: 'ui dropdown-menu',
      content: 'ui dropdown-content',
      item: 'ui dropdown-item',
      caret: 'fa fa-angle-down'
    },
    pagination: {
      nav: '',
      count: '',
      wrapper: 'ui pagination',
      list: 'ui pagination-list',
      item: '',
      link: 'ui pagination-link',
      next: '',
      prev: '',
      active: 'is-current',
      disabled: ''
    }
  };
};
