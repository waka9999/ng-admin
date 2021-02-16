import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { Config } from '@core/models/config';
import { APP_CONFIG, ConfigService } from '@core/services/config.service';

export function configFactory(): Config {
  return {
    name: '管理系统',
    version: '1.0.0',
    releaseDate: Date.now().toString(),
    theme: 'ng-light-theme',
    pageSize: 10,
  };
}

@NgModule()
export class AppConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: AppConfigModule) {
    if (parentModule) {
      throw new Error(
        'AppConfigModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders<AppConfigModule> {
    return {
      ngModule: AppConfigModule,
      providers: [
        { provide: APP_CONFIG, useFactory: configFactory },
        ConfigService,
      ],
    };
  }
}
