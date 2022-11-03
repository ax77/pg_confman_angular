export interface PgSettingsEntry {
  settingName: string,
  settingValue: string,
  showDocs: boolean
}

export interface PgSettings {
  title: string,
  id: string,
  settings: PgSettingsEntry[],
  children: PgSettings[],
  visible: boolean
}
