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
    close: string;
    open: string;
    view: string;
    copy: string;
    paste: string;
    search: string;
    filter: string;
    clear: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    install: string;
    uninstall: string;
    enable: string;
    disable: string;
    active: string;
    inactive: string;
    status: string;
    name: string;
    description: string;
    actions: string;
    settings: string;
    message: string;
    unavailable: string;
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
    files: string;
    tools: string;
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
    notes: string;
    notesSub: string;
    tailscaleTitle: string;
    tailscaleDesc: string;
    sessionTitle: string;
    sessionDesc: string;
    cronTitle: string;
    cronDesc: string;
    connectHint: string;
    lastChannelsRefresh: string;
    tickInterval: string;
    presenceDesc: string;
    sessionsDesc: string;
    nextWake: string;
    gatewayPlaceholder: string;
    tokenPlaceholder: string;
    passwordPlaceholder: string;
    channelsLink: string;
  };

  // 代理详细
  agentsDetail: {
    title: string;
    selectAgent: string;
    selectAgentSub: string;
    workspace: string;
    model: string;
    identityName: string;
    identityEmoji: string;
    skillsFilter: string;
    default: string;
    modelSelection: string;
    primaryModel: string;
    fallbacks: string;
    inheritDefault: string;
    reloadConfig: string;
    configured: string;
    selected: string;
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
    compacting: string;
    compacted: string;
    queued: string;
    newMessages: string;
    stop: string;
    newSession: string;
    queue: string;
  };

  // 配置
  config: {
    title: string;
    subtitle: string;
    save: string;
    reload: string;
    reset: string;
    search: string;
    allSettings: string;
    modeForm: string;
    modeRaw: string;
    unsavedChanges: string;
    noChanges: string;
    viewChanges: string;
    applying: string;
    updating: string;
    apply: string;
    update: string;
    loadingSchema: string;
    rawJson: string;
    unsafeWarning: string;
    sectionEnv: string;
    sectionUpdate: string;
    sectionAgents: string;
    sectionAuth: string;
    sectionChannels: string;
    sectionMessages: string;
    sectionCommands: string;
    sectionHooks: string;
    sectionSkills: string;
    sectionTools: string;
    sectionGateway: string;
    sectionWizard: string;
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

  gateway: {
    access: string;
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
    placeholderMethod: string;
    modelsList: string;
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
    unit: string;
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
    title: string;
    subtitle: string;
    refresh: string;
    loading: string;
    noNodes: string;
    devices: string;
    devicesSub: string;
    pending: string;
    paired: string;
    noPairedDevices: string;
    approve: string;
    reject: string;
    rotate: string;
    revoke: string;
    tokensNone: string;
    tokens: string;
    active: string;
    revoked: string;
    bindings: string;
    bindingsSub: string;
    save: string;
    saving: string;
    switchToFormMode: string;
    loadConfigToEdit: string;
    loadConfig: string;
    defaultBinding: string;
    defaultBindingDesc: string;
    node: string;
    anyNode: string;
    noNodesSystemRun: string;
    noAgents: string;
    binding: string;
    useDefault: string;
    defaultAgent: string;
    agent: string;
    usesDefault: string;
    override: string;
    execApprovals: string;
    execApprovalsSub: string;
    loadExecApprovals: string;
    loadApprovals: string;
    target: string;
    targetDesc: string;
    host: string;
    gateway: string;
    selectNode: string;
    noNodesExecApprovals: string;
    scope: string;
    defaults: string;
    security: string;
    securityDesc: string;
    defaultPrefix: string;
    mode: string;
    useDefaultMode: string;
    ask: string;
    askDesc: string;
    askFallback: string;
    askFallbackDesc: string;
    fallback: string;
    autoAllowSkills: string;
    autoAllowSkillsDesc: string;
    autoAllowSkillsDefault: string;
    autoAllowSkillsOverride: string;
    enabled: string;
    useDefaultBtn: string;
    allowlist: string;
    allowlistSub: string;
    addPattern: string;
    noAllowlistEntries: string;
    newPattern: string;
    lastUsed: string;
    never: string;
    pattern: string;
    remove: string;
    statusPaired: string;
    statusUnpaired: string;
    statusConnected: string;
    statusOffline: string;
    na: string;
    securityDeny: string;
    securityAllowlist: string;
    securityFull: string;
    askOff: string;
    askOnMiss: string;
    askAlways: string;
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
    channelHealth: string;
    channelSnapshotSub: string;
    noSnapshot: string;
    channelConfigSub: string;
    configured: string;
    running: string;
    connected: string;
    disconnected: string;
    lastInbound: string;
    schemaUnavailable: string;
    configSchemaUnavailable: string;
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
      close: 'Close',
      open: 'Open',
      view: 'View',
      copy: 'Copy',
      paste: 'Paste',
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Info',
      install: 'Install',
      uninstall: 'Uninstall',
      enable: 'Enable',
      disable: 'Disable',
      active: 'Active',
      inactive: 'Inactive',
      status: 'Status',
      name: 'Name',
      description: 'Description',
      actions: 'Actions',
      settings: 'Settings',
      message: 'Message',
      unavailable: 'Unavailable',
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
      files: 'Files',
      tools: 'Tools',
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
      notes: 'Notes',
      notesSub: 'Quick reminders for remote control setups.',
      tailscaleTitle: 'Tailscale serve',
      tailscaleDesc: 'Prefer serve mode to keep the gateway on loopback with tailnet auth.',
      sessionTitle: 'Session hygiene',
      sessionDesc: 'Use /new or sessions.patch to reset context.',
      cronTitle: 'Cron reminders',
      cronDesc: 'Use isolated sessions for recurring runs.',
      connectHint: 'Click Connect to apply connection changes.',
      lastChannelsRefresh: 'Last Channels Refresh',
      tickInterval: 'Tick Interval',
      presenceDesc: 'Presence beacons in the last 5 minutes.',
      sessionsDesc: 'Recent session keys tracked by the gateway.',
      nextWake: 'Next wake',
      gatewayPlaceholder: 'ws://100.x.y.z:18789',
      tokenPlaceholder: 'OPENCLAW_GATEWAY_TOKEN',
      passwordPlaceholder: 'system or shared password',
      channelsLink: 'Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.',
    },
    agentsDetail: {
      title: 'Agents',
      selectAgent: 'Select an agent',
      selectAgentSub: 'Pick an agent to inspect its workspace and tools.',
      workspace: 'Workspace',
      model: 'Primary Model',
      identityName: 'Identity Name',
      identityEmoji: 'Identity Emoji',
      skillsFilter: 'Skills Filter',
      default: 'Default',
      modelSelection: 'Model Selection',
      primaryModel: 'Primary model',
      fallbacks: 'Fallbacks (comma-separated)',
      inheritDefault: 'Inherit default',
      reloadConfig: 'Reload Config',
      configured: 'configured',
      selected: 'selected',
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
      compacting: 'Compacting context...',
      compacted: 'Context compacted',
      queued: 'Queued',
      newMessages: 'New messages',
      stop: 'Stop',
      newSession: 'New session',
      queue: 'Queue',
    },
    config: {
      title: 'Configuration',
      subtitle: 'Manage gateway settings',
      save: 'Save Configuration',
      reload: 'Reload',
      reset: 'Reset',
      search: 'Search settings...',
      allSettings: 'All Settings',
      modeForm: 'Form',
      modeRaw: 'Raw',
      unsavedChanges: 'Unsaved changes',
      noChanges: 'No changes',
      viewChanges: 'View {0} pending changes',
      applying: 'Applying…',
      updating: 'Updating…',
      apply: 'Apply',
      update: 'Update',
      loadingSchema: 'Loading schema…',
      rawJson: 'Raw JSON5',
      unsafeWarning: "Form view can't safely edit some fields. Use Raw to avoid losing config entries.",
      sectionEnv: 'Environment',
      sectionUpdate: 'Updates',
      sectionAgents: 'Agents',
      sectionAuth: 'Authentication',
      sectionChannels: 'Channels',
      sectionMessages: 'Messages',
      sectionCommands: 'Commands',
      sectionHooks: 'Hooks',
      sectionSkills: 'Skills',
      sectionTools: 'Tools',
      sectionGateway: 'Gateway',
      sectionWizard: 'Setup Wizard',
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
    gateway: {
      access: 'Gateway Access',
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
      placeholderMethod: 'system-presence',
      modelsList: 'models.list',
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
      unit: 'Unit',
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
      title: 'Nodes',
      subtitle: 'Paired devices and live links.',
      refresh: 'Refresh',
      loading: 'Loading…',
      noNodes: 'No nodes found.',
      devices: 'Devices',
      devicesSub: 'Pairing requests + role tokens.',
      pending: 'Pending',
      paired: 'Paired',
      noPairedDevices: 'No paired devices.',
      approve: 'Approve',
      reject: 'Reject',
      rotate: 'Rotate',
      revoke: 'Revoke',
      role: 'role',
      tokensNone: 'Tokens: none',
      tokens: 'Tokens',
      active: 'active',
      revoked: 'revoked',
      bindings: 'Exec node binding',
      bindingsSub: 'Pin agents to a specific node when using exec host=node.',
      save: 'Save',
      saving: 'Saving…',
      switchToFormMode: 'Switch the Config tab to Form mode to edit bindings here.',
      loadConfigToEdit: 'Load config to edit bindings.',
      loadConfig: 'Load config',
      defaultBinding: 'Default binding',
      defaultBindingDesc: 'Used when agents do not override a node binding.',
      node: 'Node',
      anyNode: 'Any node',
      noNodesSystemRun: 'No nodes with system.run available.',
      noAgents: 'No agents found.',
      binding: 'Binding',
      useDefault: 'Use default',
      defaultAgent: 'default agent',
      agent: 'agent',
      usesDefault: 'uses default ({0})',
      override: 'override: {0}',
      execApprovals: 'Exec approvals',
      execApprovalsSub: 'Allowlist and approval policy for exec host=gateway/node.',
      loadExecApprovals: 'Load exec approvals to edit allowlists.',
      loadApprovals: 'Load approvals',
      target: 'Target',
      targetDesc: 'Gateway edits local approvals; node edits the selected node.',
      host: 'Host',
      gateway: 'Gateway',
      selectNode: 'Select node',
      noNodesExecApprovals: 'No nodes advertise exec approvals yet.',
      scope: 'Scope',
      defaults: 'Defaults',
      security: 'Security',
      securityDesc: 'Default security mode.',
      defaultPrefix: 'Default: {0}',
      mode: 'Mode',
      useDefaultMode: 'Use default ({0})',
      ask: 'Ask',
      askDesc: 'Default prompt policy.',
      askFallback: 'Ask fallback',
      askFallbackDesc: 'Applied when the UI prompt is unavailable.',
      fallback: 'Fallback',
      autoAllowSkills: 'Auto-allow skill CLIs',
      autoAllowSkillsDesc: 'Allow skill executables listed by the Gateway.',
      autoAllowSkillsDefault: 'Using default ({0}).',
      autoAllowSkillsOverride: 'Override ({0}).',
      enabled: 'Enabled',
      useDefaultBtn: 'Use default',
      allowlist: 'Allowlist',
      allowlistSub: 'Case-insensitive glob patterns.',
      addPattern: 'Add pattern',
      noAllowlistEntries: 'No allowlist entries yet.',
      newPattern: 'New pattern',
      lastUsed: 'Last used: {0}',
      never: 'never',
      pattern: 'Pattern',
      remove: 'Remove',
      statusPaired: 'paired',
      statusUnpaired: 'unpaired',
      statusConnected: 'connected',
      statusOffline: 'offline',
      na: 'n/a',
      securityDeny: 'Deny',
      securityAllowlist: 'Allowlist',
      securityFull: 'Full',
      askOff: 'Off',
      askOnMiss: 'On miss',
      askAlways: 'Always',
    },
    logsDetail: {
      gatewayFileLogs: 'Gateway file logs (JSONL).',
      export: 'Export',
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
      channelHealth: 'Channel Health',
      channelSnapshotSub: 'Channel status snapshots from the gateway.',
      noSnapshot: 'No snapshot yet.',
      channelConfigSub: 'Channel status and configuration.',
      configured: 'Configured',
      running: 'Running',
      connected: 'Connected',
      disconnected: 'Disconnected',
      lastInbound: 'Last inbound',
      schemaUnavailable: 'Schema unavailable. Use Raw.',
      configSchemaUnavailable: 'Channel config schema unavailable.',
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
      close: '关闭',
      open: '打开',
      view: '查看',
      copy: '复制',
      paste: '粘贴',
      search: '搜索',
      filter: '筛选',
      clear: '清空',
      error: '错误',
      success: '成功',
      warning: '警告',
      info: '信息',
      install: '安装',
      uninstall: '卸载',
      enable: '启用',
      disable: '禁用',
      active: '活动',
      inactive: '非活动',
      status: '状态',
      name: '名称',
      description: '描述',
      actions: '操作',
      settings: '设置',
      message: '消息',
      unavailable: '不可用',
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
      files: '文件',
      tools: '工具',
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
      notes: '说明',
      notesSub: '远程控制设置的快速提醒。',
      tailscaleTitle: 'Tailscale 服务',
      tailscaleDesc: '首选服务模式，通过 tailnet 认证将网关保持在回环地址。',
      sessionTitle: '会话管理',
      sessionDesc: '使用 /new 或 sessions.patch 重置上下文。',
      cronTitle: '定时任务',
      cronDesc: '为循环运行的任务使用隔离会话。',
      connectHint: '点击连接以应用连接更改。',
      lastChannelsRefresh: '渠道最后刷新',
      tickInterval: 'Tick 间隔',
      presenceDesc: '过去 5 分钟内的存在信标。',
      sessionsDesc: '网关追踪的近期会话。',
      nextWake: '下次唤醒',
      gatewayPlaceholder: 'ws://100.x.y.z:18789',
      tokenPlaceholder: '网关令牌',
      passwordPlaceholder: '系统或共享密码',
      channelsLink: '使用“渠道”页面来连接 WhatsApp、Telegram、Discord、Signal 或 iMessage。',
    },
    agentsDetail: {
      title: '代理',
      selectAgent: '选择代理',
      selectAgentSub: '选择一个代理以查看其工作区和工具。',
      workspace: '工作区',
      model: '主模型',
      identityName: '身份名称',
      identityEmoji: '身份表情',
      skillsFilter: '技能筛选',
      default: '默认',
      modelSelection: '模型选择',
      primaryModel: '主模型',
      fallbacks: '后备模型 (逗号分隔)',
      inheritDefault: '继承默认',
      reloadConfig: '重载配置',
      configured: '已配置',
      selected: '已选择',
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
      compacting: '正在压缩上下文...',
      compacted: '上下文已压缩',
      queued: '已排队',
      newMessages: '新消息',
      stop: '停止',
      newSession: '新会话',
      queue: '排队',
    },
    config: {
      title: '配置',
      subtitle: '管理网关设置',
      save: '保存配置',
      reload: '重新加载',
      reset: '重置',
      search: '搜索设置...',
      allSettings: '所有设置',
      modeForm: '表单',
      modeRaw: '源码',
      unsavedChanges: '未保存的更改',
      noChanges: '无更改',
      viewChanges: '查看 {0} 处待定更改',
      applying: '应用中…',
      updating: '更新中…',
      apply: '应用',
      update: '更新',
      loadingSchema: '正在加载架构…',
      rawJson: '原始 JSON5',
      unsafeWarning: '表单视图无法安全编辑某些字段。请使用源码模式以避免丢失配置条目。',
      sectionEnv: '环境变量',
      sectionUpdate: '更新',
      sectionAgents: '代理',
      sectionAuth: '认证',
      sectionChannels: '渠道',
      sectionMessages: '消息',
      sectionCommands: '命令',
      sectionHooks: '钩子',
      sectionSkills: '技能',
      sectionTools: '工具',
      sectionGateway: '网关',
      sectionWizard: '设置向导',
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
    gateway: {
      access: '网关访问',
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
      placeholderMethod: 'system-presence',
      modelsList: 'models.list',
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
      unit: '单位',
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
      title: '节点',
      subtitle: '已配对设备和实时链接。',
      refresh: '刷新',
      loading: '加载中…',
      noNodes: '未找到节点。',
      devices: '设备',
      devicesSub: '配对请求 + 角色令牌。',
      pending: '待处理',
      paired: '已配对',
      noPairedDevices: '无已配对设备。',
      approve: '批准',
      reject: '拒绝',
      rotate: '轮换',
      revoke: '撤销',
      role: '角色',
      tokensNone: '令牌：无',
      tokens: '令牌',
      active: '活动',
      revoked: '撤销',
      bindings: '执行节点绑定',
      bindingsSub: '在使用 exec host=node 时将代理固定到特定节点。',
      save: '保存',
      saving: '保存中…',
      switchToFormMode: '将“配置”选项卡切换到“表单”模式以在此处编辑绑定。',
      loadConfigToEdit: '加载配置以编辑绑定。',
      loadConfig: '加载配置',
      defaultBinding: '默认绑定',
      defaultBindingDesc: '当代理未覆盖节点绑定时使用。',
      node: '节点',
      anyNode: '任何节点',
      noNodesSystemRun: '没有可用的带有 system.run 的节点。',
      noAgents: '未找到代理。',
      binding: '绑定',
      useDefault: '使用默认',
      defaultAgent: '默认代理',
      agent: '代理',
      usesDefault: '使用默认 ({0})',
      override: '覆盖：{0}',
      execApprovals: '执行审批',
      execApprovalsSub: '针对 exec host=gateway/node 的允许列表和审批策略。',
      loadExecApprovals: '加载执行审批以编辑允许列表。',
      loadApprovals: '加载审批',
      target: '目标',
      targetDesc: '网关编辑本地审批；节点编辑所选节点。',
      host: '主机',
      gateway: '网关',
      selectNode: '选择节点',
      noNodesExecApprovals: '尚无节点发布执行审批。',
      scope: '范围',
      defaults: '默认',
      security: '安全',
      securityDesc: '默认安全模式。',
      defaultPrefix: '默认：{0}',
      mode: '模式',
      useDefaultMode: '使用默认 ({0})',
      ask: '询问',
      askDesc: '默认提示策略。',
      askFallback: '询问后备',
      askFallbackDesc: '当 UI 提示不可用时应用。',
      fallback: '后备',
      autoAllowSkills: '自动允许技能 CLI',
      autoAllowSkillsDesc: '允许由网关列出的技能可执行文件。',
      autoAllowSkillsDefault: '使用默认 ({0})。',
      autoAllowSkillsOverride: '覆盖 ({0})。',
      enabled: '已启用',
      useDefaultBtn: '使用默认',
      allowlist: '允许列表',
      allowlistSub: '不区分大小写的 glob 模式。',
      addPattern: '添加模式',
      noAllowlistEntries: '暂无允许列表条目。',
      newPattern: '新模式',
      lastUsed: '最后使用：{0}',
      never: '从不',
      pattern: '模式',
      remove: '移除',
      statusPaired: '已配对',
      statusUnpaired: '未配对',
      statusConnected: '已连接',
      statusOffline: '离线',
      na: 'n/a',
      securityDeny: '拒绝',
      securityAllowlist: '允许列表',
      securityFull: '完全',
      askOff: '关闭',
      askOnMiss: '未命中时',
      askAlways: '总是',
    },
    logsDetail: {
      gatewayFileLogs: '网关文件日志 (JSONL)。',
      export: '导出',
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
      channelHealth: '渠道健康',
      channelSnapshotSub: '来自网关的渠道状态快照。',
      noSnapshot: '暂无快照。',
      channelConfigSub: '渠道状态和配置。',
      configured: '已配置',
      running: '运行中',
      connected: '已连接',
      disconnected: '未连接',
      lastInbound: '最后入站',
      schemaUnavailable: '架构不可用。请使用源码模式。',
      configSchemaUnavailable: '渠道配置架构不可用。',
    },
  },
};

export function translate(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}