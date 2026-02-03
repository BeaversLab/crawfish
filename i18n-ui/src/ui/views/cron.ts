import { html, nothing } from "lit";
import { t } from "../../i18n";
import type { ChannelUiMetaEntry, CronJob, CronRunLogEntry, CronStatus } from "../types";
import type { CronFormState } from "../ui-types";
import { formatMs } from "../format";
import {
  formatCronPayload,
  formatCronSchedule,
  formatCronState,
  formatNextRun,
} from "../presenter";

export type CronProps = {
  loading: boolean;
  status: CronStatus | null;
  jobs: CronJob[];
  error: string | null;
  busy: boolean;
  form: CronFormState;
  channels: string[];
  channelLabels?: Record<string, string>;
  channelMeta?: ChannelUiMetaEntry[];
  runsJobId: string | null;
  runs: CronRunLogEntry[];
  onFormChange: (patch: Partial<CronFormState>) => void;
  onRefresh: () => void;
  onAdd: () => void;
  onToggle: (job: CronJob, enabled: boolean) => void;
  onRun: (job: CronJob) => void;
  onRemove: (job: CronJob) => void;
  onLoadRuns: (jobId: string) => void;
};

function buildChannelOptions(props: CronProps): string[] {
  const options = ["last", ...props.channels.filter(Boolean)];
  const current = props.form.channel?.trim();
  if (current && !options.includes(current)) {
    options.push(current);
  }
  const seen = new Set<string>();
  return options.filter((value) => {
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

function resolveChannelLabel(props: CronProps, channel: string): string {
  if (channel === "last") {
    return t("cronDetail.deliver"); // or "last used"? The dict says "Deliver" for deliver. 
  }
  const meta = props.channelMeta?.find((entry) => entry.id === channel);
  if (meta?.label) {
    return meta.label;
  }
  return props.channelLabels?.[channel] ?? channel;
}

export function renderCron(props: CronProps) {
  const channelOptions = buildChannelOptions(props);
  return html`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${t("cronDetail.scheduler")}</div>
        <div class="card-sub">${t("cronDetail.schedulerSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${t("cronDetail.enabled")}</div>
            <div class="stat-value">
              ${props.status ? (props.status.enabled ? t("common.yes") : t("common.no")) : "n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${t("cronDetail.jobs")}</div>
            <div class="stat-value">${props.status?.jobs ?? "n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${t("cronDetail.nextWake")}</div>
            <div class="stat-value">${formatNextRun(props.status?.nextWakeAtMs ?? null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
            ${props.loading ? t("common.loading") : t("common.refresh")}
          </button>
          ${props.error ? html`<span class="muted">${props.error}</span>` : nothing}
        </div>
      </div>

      <div class="card">
        <div class="card-title">${t("cronDetail.newJob")}</div>
        <div class="card-sub">${t("cronDetail.newJobSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${t("cronDetail.name")}</span>
            <input
              .value=${props.form.name}
              @input=${(e: Event) =>
                props.onFormChange({ name: (e.target as HTMLInputElement).value })}
            />
          </label>
          <label class="field">
            <span>${t("cronDetail.description")}</span>
            <input
              .value=${props.form.description}
              @input=${(e: Event) =>
                props.onFormChange({ description: (e.target as HTMLInputElement).value })}
            />
          </label>
          <label class="field">
            <span>${t("cronDetail.agentId")}</span>
            <input
              .value=${props.form.agentId}
              @input=${(e: Event) =>
                props.onFormChange({ agentId: (e.target as HTMLInputElement).value })}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>${t("cronDetail.enabled")}</span>
            <input
              type="checkbox"
              .checked=${props.form.enabled}
              @change=${(e: Event) =>
                props.onFormChange({ enabled: (e.target as HTMLInputElement).checked })}
            />
          </label>
          <label class="field">
            <span>${t("cronDetail.schedule")}</span>
            <select
              .value=${props.form.scheduleKind}
              @change=${(e: Event) =>
                props.onFormChange({
                  scheduleKind: (e.target as HTMLSelectElement)
                    .value as CronFormState["scheduleKind"],
                })}
            >
              <option value="every">${t("cronDetail.every")}</option>
              <option value="at">${t("cronDetail.at")}</option>
              <option value="cron">${t("cronDetail.cronExpr")}</option>
            </select>
          </label>
        </div>
        ${renderScheduleFields(props)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>${t("cronDetail.session")}</span>
            <select
              .value=${props.form.sessionTarget}
              @change=${(e: Event) =>
                props.onFormChange({
                  sessionTarget: (e.target as HTMLSelectElement)
                    .value as CronFormState["sessionTarget"],
                })}
            >
              <option value="main">${t("cronDetail.main")}</option>
              <option value="isolated">${t("cronDetail.isolated")}</option>
            </select>
          </label>
          <label class="field">
            <span>${t("cronDetail.wakeMode")}</span>
            <select
              .value=${props.form.wakeMode}
              @change=${(e: Event) =>
                props.onFormChange({
                  wakeMode: (e.target as HTMLSelectElement).value as CronFormState["wakeMode"],
                })}
            >
              <option value="next-heartbeat">${t("cronDetail.nextHeartbeat")}</option>
              <option value="now">${t("cronDetail.now")}</option>
            </select>
          </label>
          <label class="field">
            <span>${t("cronDetail.payload")}</span>
            <select
              .value=${props.form.payloadKind}
              @change=${(e: Event) =>
                props.onFormChange({
                  payloadKind: (e.target as HTMLSelectElement)
                    .value as CronFormState["payloadKind"],
                })}
            >
              <option value="systemEvent">${t("cronDetail.systemEvent")}</option>
              <option value="agentTurn">${t("cronDetail.agentTurn")}</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${props.form.payloadKind === "systemEvent" ? t("cronDetail.systemText") : t("cronDetail.agentMessage")}</span>
          <textarea
            .value=${props.form.payloadText}
            @input=${(e: Event) =>
              props.onFormChange({
                payloadText: (e.target as HTMLTextAreaElement).value,
              })}
            rows="4"
          ></textarea>
        </label>
	          ${
              props.form.payloadKind === "agentTurn"
                ? html`
	              <div class="form-grid" style="margin-top: 12px;">
                <label class="field checkbox">
                  <span>${t("cronDetail.deliver")}</span>
                  <input
                    type="checkbox"
                    .checked=${props.form.deliver}
                    @change=${(e: Event) =>
                      props.onFormChange({
                        deliver: (e.target as HTMLInputElement).checked,
                      })}
                  />
	                </label>
	                <label class="field">
	                  <span>${t("cronDetail.channel")}</span>
	                  <select
	                    .value=${props.form.channel || "last"}
	                    @change=${(e: Event) =>
                        props.onFormChange({
                          channel: (e.target as HTMLSelectElement).value,
                        })}
	                  >
	                    ${channelOptions.map(
                        (channel) =>
                          html`<option value=${channel}>
                            ${resolveChannelLabel(props, channel)}
                          </option>`,
                      )}
                  </select>
                </label>
                <label class="field">
                  <span>To</span>
                  <input
                    .value=${props.form.to}
                    @input=${(e: Event) =>
                      props.onFormChange({ to: (e.target as HTMLInputElement).value })}
                    placeholder="+1555… or chat id"
                  />
                </label>
                <label class="field">
                  <span>Timeout (seconds)</span>
                  <input
                    .value=${props.form.timeoutSeconds}
                    @input=${(e: Event) =>
                      props.onFormChange({
                        timeoutSeconds: (e.target as HTMLInputElement).value,
                      })}
                  />
                </label>
                ${
                  props.form.sessionTarget === "isolated"
                    ? html`
                      <label class="field">
                        <span>Post to main prefix</span>
                        <input
                          .value=${props.form.postToMainPrefix}
                          @input=${(e: Event) =>
                            props.onFormChange({
                              postToMainPrefix: (e.target as HTMLInputElement).value,
                            })}
                        />
                      </label>
                    `
                    : nothing
                }
              </div>
            `
                : nothing
            }
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${props.busy} @click=${props.onAdd}>
            ${props.busy ? t("common.loading") : t("cronDetail.newJob")}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${t("cronDetail.jobsList")}</div>
      <div class="card-sub">${t("cronDetail.jobsListSub")}</div>
      ${
        props.jobs.length === 0
          ? html`
              <div class="muted" style="margin-top: 12px">${t("cronDetail.noJobs")}</div>
            `
          : html`
            <div class="list" style="margin-top: 12px;">
              ${props.jobs.map((job) => renderJob(job, props))}
            </div>
          `
      }
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${t("cronDetail.runs")}</div>
      <div class="card-sub">${t("cronDetail.runsFor")} ${props.runsJobId ?? `(${t("common.search")})`}.</div>
      ${
        props.runsJobId == null
          ? html`
              <div class="muted" style="margin-top: 12px">${t("cronDetail.jobsListSub")}</div>
            `
          : props.runs.length === 0
            ? html`
                <div class="muted" style="margin-top: 12px">${t("cronDetail.noRuns")}</div>
              `
            : html`
              <div class="list" style="margin-top: 12px;">
                ${props.runs.map((entry) => renderRun(entry))}
              </div>
            `
      }
    </section>
  `;
}

function renderScheduleFields(props: CronProps) {
  const form = props.form;
  if (form.scheduleKind === "at") {
    return html`
      <label class="field" style="margin-top: 12px;">
        <span>${t("cronDetail.at")}</span>
        <input
          type="datetime-local"
          .value=${form.scheduleAt}
          @input=${(e: Event) =>
            props.onFormChange({
              scheduleAt: (e.target as HTMLInputElement).value,
            })}
        />
      </label>
    `;
  }
  if (form.scheduleKind === "every") {
    return html`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>${t("cronDetail.every")}</span>
          <input
            .value=${form.everyAmount}
            @input=${(e: Event) =>
              props.onFormChange({
                everyAmount: (e.target as HTMLInputElement).value,
              })}
          />
        </label>
        <label class="field">
          <span>${t("cronDetail.unit")}</span>
          <select
            .value=${form.everyUnit}
            @change=${(e: Event) =>
              props.onFormChange({
                everyUnit: (e.target as HTMLSelectElement).value as CronFormState["everyUnit"],
              })}
          >
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
          </select>
        </label>
      </div>
    `;
  }
  return html`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${t("cronDetail.cronExpr")}</span>
        <input
          .value=${form.cronExpr}
          @input=${(e: Event) =>
            props.onFormChange({ cronExpr: (e.target as HTMLInputElement).value })}
        />
      </label>
      <label class="field">
        <span>Timezone (${t("sessionsDetail.optional")})</span>
        <input
          .value=${form.cronTz}
          @input=${(e: Event) =>
            props.onFormChange({ cronTz: (e.target as HTMLInputElement).value })}
        />
      </label>
    </div>
  `;
}

function renderJob(job: CronJob, props: CronProps) {
  const isSelected = props.runsJobId === job.id;
  const itemClass = `list-item list-item-clickable${isSelected ? " list-item-selected" : ""}`;
  return html`
    <div class=${itemClass} @click=${() => props.onLoadRuns(job.id)}>
      <div class="list-main">
        <div class="list-title">${job.name}</div>
        <div class="list-sub">${formatCronSchedule(job)}</div>
        <div class="muted">${formatCronPayload(job)}</div>
        ${job.agentId ? html`<div class="muted">Agent: ${job.agentId}</div>` : nothing}
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${job.enabled ? t("common.enabled") : t("common.disabled")}</span>
          <span class="chip">${job.sessionTarget}</span>
          <span class="chip">${job.wakeMode}</span>
        </div>
      </div>
      <div class="list-meta">
        <div>${formatCronState(job)}</div>
        <div class="row" style="justify-content: flex-end; margin-top: 8px;">
          <button
            class="btn"
            ?disabled=${props.busy}
            @click=${(event: Event) => {
              event.stopPropagation();
              props.onToggle(job, !job.enabled);
            }}
          >
            ${job.enabled ? t("common.disable") : t("common.enable")}
          </button>
          <button
            class="btn"
            ?disabled=${props.busy}
            @click=${(event: Event) => {
              event.stopPropagation();
              props.onRun(job);
            }}
          >
            ${t("cron.run")}
          </button>
          <button
            class="btn"
            ?disabled=${props.busy}
            @click=${(event: Event) => {
              event.stopPropagation();
              props.onLoadRuns(job.id);
            }}
          >
            ${t("cronDetail.runs")}
          </button>
          <button
            class="btn danger"
            ?disabled=${props.busy}
            @click=${(event: Event) => {
              event.stopPropagation();
              props.onRemove(job);
            }}
          >
            ${t("common.delete")}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderRun(entry: CronRunLogEntry) {
  return html`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${entry.status}</div>
        <div class="list-sub">${entry.summary ?? ""}</div>
      </div>
      <div class="list-meta">
        <div>${formatMs(entry.ts)}</div>
        <div class="muted">${entry.durationMs ?? 0}ms</div>
        ${entry.error ? html`<div class="muted">${entry.error}</div>` : nothing}
      </div>
    </div>
  `;
}
