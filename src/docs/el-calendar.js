const attributes = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'Date',
    value: '—',
    default: '—'
  },
  {
    name: 'range',
    description:
      '时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。',
    type: 'array',
    value: '—',
    default: '—'
  }
]

const slots = [
  {
    name: 'date-cell',
    description:
      'type 表示该日期的所属月份，可选值有 prev-month、current-month 和 next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd；date 是单元格的日期'
  },
  {
    name: 'header',
    description: '卡片标题内容 { date: string }'
  }
]

const exposes = [
  { name: 'selectedDay', description: '当前已选日期', parameter: 'ComputedRef<Dayjs | undefined>' },
  { name: 'pickDay', description: '选择一个具体日期', parameter: '(day: dayjs.Dayjs) => void' },
  { name: 'selectDate', description: '选择日期', parameter: '(type: CalendarDateType) => void' },
  {
    name: 'calculateValidatedDateRange',
    description: '根据开始与结束日期计算验证日期范围',
    parameter: '(startDayjs: dayjs.Dayjs, endDayjs: dayjs.Dayjs) => [dayjs.Dayjs, dayjs.Dayjs][]'
  }
]

const document = { attributes, slots, exposes }

module.exports = document
