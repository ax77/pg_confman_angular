export interface PgSettingsEntry {
  name: string;
  setting: string;
  unit: string;
  category: string;
  short_desc: string;
  extra_desc: string;
  context: string;
  vartype: string;
  source: string;
  min_val: string;
  max_val: string;
  boot_val: string;
  reset_val: string;
  sourcefile: string;
  sourceline: string;
  pending_restart: boolean;

  showDocs: boolean;
  docsEn: string[];
  docsRu: string[];
  enumvalues: string;
}

export interface PgSettings {
  title: string;
  id: string;
  settings: PgSettingsEntry[];
  children: PgSettings[];
  visible: boolean;
}
