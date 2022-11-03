import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './editor/components/main-page/main-page.component';
import { DatabaseTablesComponent } from './editor/components/main-page/database-tables/database-tables.component';
import { QueriesComponent } from './editor/components/main-page/queries/queries.component';
import {HttpClientModule} from "@angular/common/http";
import { AdditionalQueryComponent } from './editor/components/main-page/queries/additional-query/additional-query.component';
import { SettingsComponent } from './settings/settings.component';
import { FileLocationsComponent } from './settings/parts/file-locations/file-locations.component';
import { ConnectionsAndAuthenticationComponent } from './settings/parts/connections-and-authentication/connections-and-authentication.component';
import { ResourceConsumptionComponent } from './settings/parts/resource-consumption/resource-consumption.component';
import { WriteAheadLogComponent } from './settings/parts/write-ahead-log/write-ahead-log.component';
import { ReplicationComponent } from './settings/parts/replication/replication.component';
import { QueryPlanningComponent } from './settings/parts/query-planning/query-planning.component';
import { ErrorReportingAndLoggingComponent } from './settings/parts/error-reporting-and-logging/error-reporting-and-logging.component';
import { RunTimeStatisticsComponent } from './settings/parts/run-time-statistics/run-time-statistics.component';
import { AutomaticVacuumingComponent } from './settings/parts/automatic-vacuuming/automatic-vacuuming.component';
import { ClientConnectionDefaultsComponent } from './settings/parts/client-connection-defaults/client-connection-defaults.component';
import { LockManagementComponent } from './settings/parts/lock-management/lock-management.component';
import { VersionAndPlatformCompatibilityComponent } from './settings/parts/version-and-platform-compatibility/version-and-platform-compatibility.component';
import { ErrorHandlingComponent } from './settings/parts/error-handling/error-handling.component';
import { PresetOptionsComponent } from './settings/parts/preset-options/preset-options.component';
import { CustomizedOptionsComponent } from './settings/parts/customized-options/customized-options.component';
import { DeveloperOptionsComponent } from './settings/parts/developer-options/developer-options.component';
import { ShortOptionsComponent } from './settings/parts/short-options/short-options.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DatabaseTablesComponent,
    QueriesComponent,
    AdditionalQueryComponent,
    SettingsComponent,
    FileLocationsComponent,
    ConnectionsAndAuthenticationComponent,
    ResourceConsumptionComponent,
    WriteAheadLogComponent,
    ReplicationComponent,
    QueryPlanningComponent,
    ErrorReportingAndLoggingComponent,
    RunTimeStatisticsComponent,
    AutomaticVacuumingComponent,
    ClientConnectionDefaultsComponent,
    LockManagementComponent,
    VersionAndPlatformCompatibilityComponent,
    ErrorHandlingComponent,
    PresetOptionsComponent,
    CustomizedOptionsComponent,
    DeveloperOptionsComponent,
    ShortOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
