// 翻译文件
import type { Locale } from './locales';

export interface Translations {
  // 通用
  common: {
    loading: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    remove: string;
    confirm: string;
    back: string;
    next: string;
    submit: string;
    refresh: string;
    enabled: string;
    disabled: string;
    yes: string;
    no: string;
  };

  // 顶部栏
  topbar: {
    brandTitle: string;
    brandSub: string;
    health: string;
    healthOk: string;
    healthOffline: string;
    expandSidebar: string;
    collapseSidebar: string;
  };

  // 导航
  nav: {
    overview: string;
    chat: string;
    config: string;
    sessions: string;
    skills: string;
    channels: string;
    logs: string;
    cron: string;
    nodes: string;
    debug: string;
    resources: string;
    docs: string;
  };

  // 概览页面
  overview: {
    title: string;
    subtitle: string;
    status: string;
    agents: string;
    sessions: string;
    uptime: string;
    memory: string;
    version: string;
  };

  // 聊天
  chat: {
    title: string;
    subtitle: string;
    sendMessage: string;
    thinking: string;
    disconnected: string;
    focusMode: string;
    showThinking: string;
    clearHistory: string;
  };

  // 配置
  config: {
    title: string;
    subtitle: string;
    save: string;
    reload: string;
    reset: string;
  };

  // 会话
  sessions: {
    title: string;
    subtitle: string;
    active: string;
    archived: string;
    delete: string;
    deleteConfirm: string;
  };

  // 技能
  skills: {
    title: string;
    subtitle: string;
    enabled: string;
    disabled: string;
    install: string;
    uninstall: string;
    configure: string;
  };

  // 渠道
  channels: {
    title: string;
    subtitle: string;
    whatsapp: string;
    telegram: string;
    discord: string;
    signal: string;
    slack: string;
    imessage: string;
    status: string;
    connected: string;
    disconnected: string;
    configure: string;
  };

  // 日志
  logs: {
    title: string;
    subtitle: string;
    filter: string;
    clear: string;
    export: string;
  };

  // Cron
  cron: {
    title: string;
    subtitle: string;
    add: string;
    edit: string;
    delete: string;
    run: string;
    enable: string;
    disable: string;
  };

  // 节点
  nodes: {
    title: string;
    subtitle: string;
    paired: string;
    unpaired: string;
    revoke: string;
  };

  // 调试
  debug: {
    title: string;
    subtitle: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    common: {
      loading: 'Loading...',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      remove: 'Remove',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      submit: 'Submit',
      refresh: 'Refresh',
      enabled: 'Enabled',
      disabled: 'Disabled',
      yes: 'Yes',
      no: 'No',
    },
    topbar: {
      brandTitle: 'OPENCLAW',
      brandSub: 'Gateway Dashboard',
      health: 'Health',
      healthOk: 'OK',
      healthOffline: 'Offline',
      expandSidebar: 'Expand sidebar',
      collapseSidebar: 'Collapse sidebar',
    },
    nav: {
      overview: 'Overview',
      chat: 'Chat',
      config: 'Config',
      sessions: 'Sessions',
      skills: 'Skills',
      channels: 'Channels',
      logs: 'Logs',
      cron: 'Cron',
      nodes: 'Nodes',
      debug: 'Debug',
      resources: 'Resources',
      docs: 'Docs',
    },
    overview: {
      title: 'Overview',
      subtitle: 'System status and metrics',
      status: 'Status',
      agents: 'Agents',
      sessions: 'Sessions',
      uptime: 'Uptime',
      memory: 'Memory',
      version: 'Version',
    },
    chat: {
      title: 'Chat',
      subtitle: 'Chat with your AI agent',
      sendMessage: 'Send message...',
      thinking: 'Thinking...',
      disconnected: 'Disconnected from gateway.',
      focusMode: 'Focus mode',
      showThinking: 'Show thinking',
      clearHistory: 'Clear history',
    },
    config: {
      title: 'Configuration',
      subtitle: 'Manage gateway settings',
      save: 'Save Configuration',
      reload: 'Reload',
      reset: 'Reset',
    },
    sessions: {
      title: 'Sessions',
      subtitle: 'Active and archived sessions',
      active: 'Active',
      archived: 'Archived',
      delete: 'Delete',
      deleteConfirm: 'Are you sure you want to delete this session?',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Manage agent skills',
      enabled: 'Enabled',
      disabled: 'Disabled',
      install: 'Install',
      uninstall: 'Uninstall',
      configure: 'Configure',
    },
    channels: {
      title: 'Channels',
      subtitle: 'Messaging channel integrations',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      discord: 'Discord',
      signal: 'Signal',
      slack: 'Slack',
      imessage: 'iMessage',
      status: 'Status',
      connected: 'Connected',
      disconnected: 'Disconnected',
      configure: 'Configure',
    },
    logs: {
      title: 'Logs',
      subtitle: 'System logs and diagnostics',
      filter: 'Filter',
      clear: 'Clear',
      export: 'Export',
    },
    cron: {
      title: 'Cron Jobs',
      subtitle: 'Scheduled tasks and reminders',
      add: 'Add Job',
      edit: 'Edit',
      delete: 'Delete',
      run: 'Run Now',
      enable: 'Enable',
      disable: 'Disable',
    },
    nodes: {
      title: 'Nodes',
      subtitle: 'Paired remote nodes',
      paired: 'Paired',
      unpaired: 'Unpaired',
      revoke: 'Revoke',
    },
    debug: {
      title: 'Debug',
      subtitle: 'Debug tools and diagnostics',
    },
  },
  zh: {
    common: {
      loading: '加载中...',
      save: '保存',
      cancel: '取消',
      delete: '删除',
      edit: '编辑',
      add: '添加',
      remove: '移除',
      confirm: '确认',
      back: '返回',
      next: '下一步',
      submit: '提交',
      refresh: '刷新',
      enabled: '已启用',
      disabled: '已禁用',
      yes: '是',
      no: '否',
    },
    topbar: {
      brandTitle: 'OPENCLAW',
      brandSub: '网关控制面板',
      health: '健康状态',
      healthOk: '正常',
      healthOffline: '离线',
      expandSidebar: '展开侧边栏',
      collapseSidebar: '折叠侧边栏',
    },
    nav: {
      overview: '概览',
      chat: '聊天',
      config: '配置',
      sessions: '会话',
      skills: '技能',
      channels: '渠道',
      logs: '日志',
      cron: '定时任务',
      nodes: '节点',
      debug: '调试',
      resources: '资源',
      docs: '文档',
    },
    overview: {
      title: '概览',
      subtitle: '系统状态和指标',
      status: '状态',
      agents: '代理',
      sessions: '会话',
      uptime: '运行时间',
      memory: '内存',
      version: '版本',
    },
    chat: {
      title: '聊天',
      subtitle: '与 AI 助手对话',
      sendMessage: '发送消息...',
      thinking: '思考中...',
      disconnected: '与网关断开连接。',
      focusMode: '专注模式',
      showThinking: '显示思考过程',
      clearHistory: '清空历史',
    },
    config: {
      title: '配置',
      subtitle: '管理网关设置',
      save: '保存配置',
      reload: '重新加载',
      reset: '重置',
    },
    sessions: {
      title: '会话',
      subtitle: '活动和归档的会话',
      active: '活动中',
      archived: '已归档',
      delete: '删除',
      deleteConfirm: '确定要删除此会话吗？',
    },
    skills: {
      title: '技能',
      subtitle: '管理代理技能',
      enabled: '已启用',
      disabled: '已禁用',
      install: '安装',
      uninstall: '卸载',
      configure: '配置',
    },
    channels: {
      title: '渠道',
      subtitle: '消息渠道集成',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      discord: 'Discord',
      signal: 'Signal',
      slack: 'Slack',
      imessage: 'iMessage',
      status: '状态',
      connected: '已连接',
      disconnected: '未连接',
      configure: '配置',
    },
    logs: {
      title: '日志',
      subtitle: '系统日志和诊断',
      filter: '筛选',
      clear: '清空',
      export: '导出',
    },
    cron: {
      title: '定时任务',
      subtitle: '计划任务和提醒',
      add: '添加任务',
      edit: '编辑',
      delete: '删除',
      run: '立即运行',
      enable: '启用',
      disable: '禁用',
    },
    nodes: {
      title: '节点',
      subtitle: '已配对的远程节点',
      paired: '已配对',
      unpaired: '未配对',
      revoke: '撤销',
    },
    debug: {
      title: '调试',
      subtitle: '调试工具和诊断',
    },
  },
};
