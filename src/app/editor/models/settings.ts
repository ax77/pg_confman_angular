export interface PgSettingsEntry {
  settingName: string
}

export interface PgSettings {
  title: string,
  id: string,
  settings: PgSettingsEntry[],
  children: PgSettings[],
  visible: boolean
}
