// 翻译文件
import { DEFAULT_LOCALE, type Locale } from './locales';

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
    navGroupChat: string;
    navGroupControl: string;
    navGroupAgent: string;
    navGroupSettings: string;
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

  // 实例
  instances: {
    title: string;
    subtitle: string;
    noInstances: string;
    lastInput: string;
    reason: string;
    unknownHost: string;
    unknown: string;
  };

  // 调试详细
  debugDetail: {
    snapshots: string;
    snapshotsSub: string;
    status: string;
    health: string;
    lastHeartbeat: string;
    manualRpc: string;
    manualRpcSub: string;
    method: string;
    params: string;
    call: string;
    models: string;
    modelsSub: string;
    eventLog: string;
    eventLogSub: string;
    noEvents: string;
    refreshing: string;
    securityAudit: string;
    runDeep: string;
  };

  // Cron 详细
  cronDetail: {
    scheduler: string;
    schedulerSub: string;
    enabled: string;
    jobs: string;
    nextWake: string;
    newJob: string;
    newJobSub: string;
    name: string;
    description: string;
    agentId: string;
    schedule: string;
    session: string;
    wakeMode: string;
    payload: string;
    systemText: string;
    agentMessage: string;
    deliver: string;
    channel: string;
    every: string;
    at: string;
    cronExpr: string;
    main: string;
    isolated: string;
    nextHeartbeat: string;
    now: string;
    systemEvent: string;
    agentTurn: string;
    jobsList: string;
    jobsListSub: string;
    noJobs: string;
    runs: string;
    runsFor: string;
    noRuns: string;
  };

  // 会话详细
  sessionsDetail: {
    activeWithin: string;
    minutes: string;
    limit: string;
    includeGlobal: string;
    includeUnknown: string;
    store: string;
    key: string;
    label: string;
    kind: string;
    updated: string;
    tokens: string;
    thinking: string;
    verbose: string;
    reasoning: string;
    actions: string;
    optional: string;
    inherit: string;
    noSessions: string;
  };

  // 技能详细
  skillsDetail: {
    bundedManagedWorkspace: string;
    filter: string;
    searchSkills: string;
    shown: string;
    noSkills: string;
    eligible: string;
    blocked: string;
    disabled: string;
    missing: string;
    reason: string;
    enable: string;
    disable: string;
    installing: string;
    apiKey: string;
    saveKey: string;
    blockedByAllowlist: string;
    bin: string;
    env: string;
    config: string;
    os: string;
  };

  // 节点详细
  nodesDetail: {
    pairedDevicesLinks: string;
    noNodes: string;
    devices: string;
    devicesSub: string;
    pending: string;
    paired: string;
    noPairedDevices: string;
    approve: string;
    reject: string;
    repair: string;
    requested: string;
    roles: string;
    scopes: string;
    bindings: string;
    bindingsSub: string;
    defaultAgent: string;
    bindDefault: string;
    bindAgent: string;
    saveBindings: string;
    execApprovals: string;
    execApprovalsSub: string;
    gateway: string;
    node: string;
    selectAgent: string;
    addRule: string;
    removeRule: string;
    saveRules: string;
    noRules: string;
    allowed: string;
    denied: string;
    target: string;
  };

  // 日志详细
  logsDetail: {
    gatewayFileLogs: string;
    exportFiltered: string;
    exportVisible: string;
    searchLogs: string;
    autoFollow: string;
    file: string;
    truncated: string;
    noLogEntries: string;
  };

  // 渠道详细
  channelsDetail: {
    integrations: string;
    noChannels: string;
    configureChannel: string;
    enabled: string;
    send: string;
    test: string;
    account: string;
    server: string;
    phone: string;
    token: string;
    apiKey: string;
    username: string;
    password: string;
    webhookUrl: string;
    appId: string;
    appSecret: string;
    verificationToken: string;
    botToken: string;
    chatId: string;
    groupId: string;
    channelId: string;
    number: string;
    recipientId: string;
    workspace: string;
    channelName: string;
    signingSecret: string;
    clientId: string;
    clientSecret: string;
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
      navGroupChat: 'Chat',
      navGroupControl: 'Control',
      navGroupAgent: 'Agent',
      navGroupSettings: 'Settings',
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
    instances: {
      title: 'Connected Instances',
      subtitle: 'Presence beacons from the gateway and clients.',
      noInstances: 'No instances reported yet.',
      lastInput: 'Last input',
      reason: 'Reason',
      unknownHost: 'unknown host',
      unknown: 'unknown',
    },
    debugDetail: {
      snapshots: 'Snapshots',
      snapshotsSub: 'Status, health, and heartbeat data.',
      status: 'Status',
      health: 'Health',
      lastHeartbeat: 'Last heartbeat',
      manualRpc: 'Manual RPC',
      manualRpcSub: 'Send a raw gateway method with JSON params.',
      method: 'Method',
      params: 'Params (JSON)',
      call: 'Call',
      models: 'Models',
      modelsSub: 'Catalog from models.list.',
      eventLog: 'Event Log',
      eventLogSub: 'Latest gateway events.',
      noEvents: 'No events yet.',
      refreshing: 'Refreshing…',
      securityAudit: 'Security audit',
      runDeep: 'Run',
    },
    cronDetail: {
      scheduler: 'Scheduler',
      schedulerSub: 'Gateway-owned cron scheduler status.',
      enabled: 'Enabled',
      jobs: 'Jobs',
      nextWake: 'Next wake',
      newJob: 'New Job',
      newJobSub: 'Create a scheduled wakeup or agent run.',
      name: 'Name',
      description: 'Description',
      agentId: 'Agent ID',
      schedule: 'Schedule',
      session: 'Session',
      wakeMode: 'Wake mode',
      payload: 'Payload',
      systemText: 'System text',
      agentMessage: 'Agent message',
      deliver: 'Deliver',
      channel: 'Channel',
      every: 'Every',
      at: 'At',
      cronExpr: 'Cron',
      main: 'Main',
      isolated: 'Isolated',
      nextHeartbeat: 'Next heartbeat',
      now: 'Now',
      systemEvent: 'System event',
      agentTurn: 'Agent turn',
      jobsList: 'Jobs',
      jobsListSub: 'Scheduled and ad-hoc jobs.',
      noJobs: 'No jobs found.',
      runs: 'Runs',
      runsFor: 'Runs for',
      noRuns: 'No runs yet.',
    },
    sessionsDetail: {
      activeWithin: 'Active within (minutes)',
      minutes: 'minutes',
      limit: 'Limit',
      includeGlobal: 'Include global',
      includeUnknown: 'Include unknown',
      store: 'Store',
      key: 'Key',
      label: 'Label',
      kind: 'Kind',
      updated: 'Updated',
      tokens: 'Tokens',
      thinking: 'Thinking',
      verbose: 'Verbose',
      reasoning: 'Reasoning',
      actions: 'Actions',
      optional: '(optional)',
      inherit: 'inherit',
      noSessions: 'No sessions found.',
    },
    skillsDetail: {
      bundedManagedWorkspace: 'Bundled, managed, and workspace skills.',
      filter: 'Filter',
      searchSkills: 'Search skills',
      shown: 'shown',
      noSkills: 'No skills found.',
      eligible: 'eligible',
      blocked: 'blocked',
      disabled: 'disabled',
      missing: 'Missing',
      reason: 'Reason',
      enable: 'Enable',
      disable: 'Disable',
      installing: 'Installing…',
      apiKey: 'API key',
      saveKey: 'Save key',
      blockedByAllowlist: 'blocked by allowlist',
      bin: 'bin',
      env: 'env',
      config: 'config',
      os: 'os',
    },
    nodesDetail: {
      pairedDevicesLinks: 'Paired devices and live links.',
      noNodes: 'No nodes found.',
      devices: 'Devices',
      devicesSub: 'Pairing requests + role tokens.',
      pending: 'Pending',
      paired: 'Paired',
      noPairedDevices: 'No paired devices.',
      approve: 'Approve',
      reject: 'Reject',
      repair: 'repair',
      requested: 'requested',
      roles: 'roles',
      scopes: 'scopes',
      bindings: 'Agent Bindings',
      bindingsSub: 'Bind agents to specific nodes.',
      defaultAgent: 'Default Agent',
      bindDefault: 'Bind Default',
      bindAgent: 'Bind Agent',
      saveBindings: 'Save Bindings',
      execApprovals: 'Exec Approvals',
      execApprovalsSub: 'Approve or deny exec requests.',
      gateway: 'Gateway',
      node: 'Node',
      selectAgent: 'Select agent',
      addRule: 'Add rule',
      removeRule: 'Remove rule',
      saveRules: 'Save rules',
      noRules: 'No rules configured.',
      allowed: 'Allowed',
      denied: 'Denied',
      target: 'Target',
    },
    logsDetail: {
      gatewayFileLogs: 'Gateway file logs (JSONL).',
      exportFiltered: 'Export filtered',
      exportVisible: 'Export visible',
      searchLogs: 'Search logs',
      autoFollow: 'Auto-follow',
      file: 'File',
      truncated: 'Log output truncated; showing latest chunk.',
      noLogEntries: 'No log entries.',
    },
    channelsDetail: {
      integrations: 'Integrations',
      noChannels: 'No channels configured.',
      configureChannel: 'Configure',
      enabled: 'Enabled',
      send: 'Send',
      test: 'Test',
      account: 'Account',
      server: 'Server',
      phone: 'Phone',
      token: 'Token',
      apiKey: 'API Key',
      username: 'Username',
      password: 'Password',
      webhookUrl: 'Webhook URL',
      appId: 'App ID',
      appSecret: 'App Secret',
      verificationToken: 'Verification Token',
      botToken: 'Bot Token',
      chatId: 'Chat ID',
      groupId: 'Group ID',
      channelId: 'Channel ID',
      number: 'Number',
      recipientId: 'Recipient ID',
      workspace: 'Workspace',
      channelName: 'Channel',
      signingSecret: 'Signing Secret',
      clientId: 'Client ID',
      clientSecret: 'Client Secret',
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
      navGroupChat: '聊天',
      navGroupControl: '控制',
      navGroupAgent: '代理',
      navGroupSettings: '设置',
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
    instances: {
      title: '已连接实例',
      subtitle: '来自网关和客户端的存在信标。',
      noInstances: '尚未报告实例。',
      lastInput: '最后输入',
      reason: '原因',
      unknownHost: '未知主机',
      unknown: '未知',
    },
    debugDetail: {
      snapshots: '快照',
      snapshotsSub: '状态、健康和心跳数据。',
      status: '状态',
      health: '健康',
      lastHeartbeat: '最后心跳',
      manualRpc: '手动 RPC',
      manualRpcSub: '使用 JSON 参数发送原始网关方法。',
      method: '方法',
      params: '参数 (JSON)',
      call: '调用',
      models: '模型',
      modelsSub: '来自 models.list 的目录。',
      eventLog: '事件日志',
      eventLogSub: '最新的网关事件。',
      noEvents: '暂无事件。',
      refreshing: '刷新中…',
      securityAudit: '安全审计',
      runDeep: '运行',
    },
    cronDetail: {
      scheduler: '调度器',
      schedulerSub: '网关拥有的 cron 调度器状态。',
      enabled: '已启用',
      jobs: '任务',
      nextWake: '下次唤醒',
      newJob: '新建任务',
      newJobSub: '创建计划唤醒或代理运行。',
      name: '名称',
      description: '描述',
      agentId: '代理 ID',
      schedule: '计划',
      session: '会话',
      wakeMode: '唤醒模式',
      payload: '载荷',
      systemText: '系统文本',
      agentMessage: '代理消息',
      deliver: '投递',
      channel: '渠道',
      every: '每隔',
      at: '在',
      cronExpr: 'Cron 表达式',
      main: '主',
      isolated: '隔离',
      nextHeartbeat: '下次心跳',
      now: '立即',
      systemEvent: '系统事件',
      agentTurn: '代理回合',
      jobsList: '任务',
      jobsListSub: '计划任务和临时任务。',
      noJobs: '未找到任务。',
      runs: '运行',
      runsFor: '运行记录',
      noRuns: '暂无运行记录。',
    },
    sessionsDetail: {
      activeWithin: '活跃时间（分钟）',
      minutes: '分钟',
      limit: '限制',
      includeGlobal: '包含全局',
      includeUnknown: '包含未知',
      store: '存储',
      key: '键',
      label: '标签',
      kind: '类型',
      updated: '更新时间',
      tokens: '令牌',
      thinking: '思考',
      verbose: '详细',
      reasoning: '推理',
      actions: '操作',
      optional: '（可选）',
      inherit: '继承',
      noSessions: '未找到会话。',
    },
    skillsDetail: {
      bundedManagedWorkspace: '内置、托管和工作区技能。',
      filter: '筛选',
      searchSkills: '搜索技能',
      shown: '显示',
      noSkills: '未找到技能。',
      eligible: '可用',
      blocked: '已阻止',
      disabled: '已禁用',
      missing: '缺少',
      reason: '原因',
      enable: '启用',
      disable: '禁用',
      installing: '安装中…',
      apiKey: 'API 密钥',
      saveKey: '保存密钥',
      blockedByAllowlist: '被允许列表阻止',
      bin: '二进制',
      env: '环境变量',
      config: '配置',
      os: '操作系统',
    },
    nodesDetail: {
      pairedDevicesLinks: '已配对设备和实时链接。',
      noNodes: '未找到节点。',
      devices: '设备',
      devicesSub: '配对请求 + 角色令牌。',
      pending: '待处理',
      paired: '已配对',
      noPairedDevices: '无已配对设备。',
      approve: '批准',
      reject: '拒绝',
      repair: '修复',
      requested: '请求时间',
      roles: '角色',
      scopes: '作用域',
      bindings: '代理绑定',
      bindingsSub: '将代理绑定到特定节点。',
      defaultAgent: '默认代理',
      bindDefault: '绑定默认',
      bindAgent: '绑定代理',
      saveBindings: '保存绑定',
      execApprovals: '执行批准',
      execApprovalsSub: '批准或拒绝执行请求。',
      gateway: '网关',
      node: '节点',
      selectAgent: '选择代理',
      addRule: '添加规则',
      removeRule: '移除规则',
      saveRules: '保存规则',
      noRules: '未配置规则。',
      allowed: '已允许',
      denied: '已拒绝',
      target: '目标',
    },
    logsDetail: {
      gatewayFileLogs: '网关文件日志 (JSONL)。',
      exportFiltered: '导出已筛选',
      exportVisible: '导出可见',
      searchLogs: '搜索日志',
      autoFollow: '自动跟随',
      file: '文件',
      truncated: '日志输出已截断；显示最新块。',
      noLogEntries: '无日志条目。',
    },
    channelsDetail: {
      integrations: '集成',
      noChannels: '未配置渠道。',
      configureChannel: '配置',
      enabled: '已启用',
      send: '发送',
      test: '测试',
      account: '账户',
      server: '服务器',
      phone: '电话',
      token: '令牌',
      apiKey: 'API 密钥',
      username: '用户名',
      password: '密码',
      webhookUrl: 'Webhook URL',
      appId: '应用 ID',
      appSecret: '应用密钥',
      verificationToken: '验证令牌',
      botToken: '机器人令牌',
      chatId: '聊天 ID',
      groupId: '群组 ID',
      channelId: '频道 ID',
      number: '号码',
      recipientId: '接收者 ID',
      workspace: '工作区',
      channelName: '频道',
      signingSecret: '签名密钥',
      clientId: '客户端 ID',
      clientSecret: '客户端密钥',
    },
  },
};

export function translate(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}
