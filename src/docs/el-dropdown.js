const attributes = [
  {
    name: 'type',
    description: '菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)',
    type: 'string',
    value: 'default/default/success/warning/info/danger/text',
    default: '—'
  },
  {
    name: 'size',
    description: '菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'button-props',
    description: '按钮组件的 props，参考 按钮属性',
    type: 'object',
    value: '-',
    default: '—'
  },
  {
    name: 'max-height',
    description: '菜单最大高度',
    type: 'string/number',
    value: '-',
    default: '—'
  },
  {
    name: 'split-button',
    description: '下拉触发元素呈现为按钮组',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placement',
    description: '菜单弹出位置',
    type: 'string',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end',
    default: 'bottom-end'
  },
  {
    name: 'trigger',
    description: '触发下拉的行为',
    type: 'string',
    value: 'hover, click',
    default: 'hover'
  },
  {
    name: 'triggerKeys',
    description: '指定键盘上哪些按键可以触发操作',
    type: 'string[]',
    value: '-',
    default: "['Enter', 'Space', 'ArrowDown', 'NumpadEnter']"
  },
  {
    name: 'hide-on-click',
    description: '是否在点击菜单项后隐藏菜单',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-timeout',
    description: '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）',
    type: 'number',
    value: '—',
    default: '250'
  },
  {
    name: 'hide-timeout',
    description: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
    type: 'number',
    value: '—',
    default: '150'
  },
  {
    name: 'tabindex',
    description:
      'Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'popper-class',
    description: '自定义浮层类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'popper-options',
    description: 'popper.js 参数',
    type: 'object',
    value: '—',
    default: '-'
  },
  {
    name: 'teleported',
    description: '是否将下拉列表插入至 body 元素',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'persistent',
    description: '当下拉菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const events = [
  {
    name: 'click',
    description: '`split-button` 为 true 时，点击左侧按钮的回调',
    parameter: '`(e: MouseEvent) => void`'
  },
  {
    name: 'command',
    description: '点击菜单项触发的事件回调',
    parameter: '`(...args: any[]) => void`'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '`(val: boolean) => void`'
  }
]

const slots = [
  {
    name: 'default',
    description:
      '下拉菜单的内容。 注意：必须是有效的 html DOM 元素（例如 <span>、<button> 等）或 el-component，以附加监听触发器'
  },
  {
    name: 'dropdown',
    description: '下拉列表，通常是 `<el-dropdown-menu>` 组件'
  }
]

const exposes = [
  {
    name: 'handleOpen',
    description: '打开下拉菜单',
    parameter: '`() => void`'
  },
  {
    name: 'handleClose',
    description: '关闭下拉菜单',
    parameter: '`() => void`'
  }
]

const document = { attributes, events, slots, exposes }

module.exports = document
