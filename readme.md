## Base User Sql

The base-user-sql package - is a component of the @jla/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<p>
  <a href="https://www.npmjs.com/package/@jla/base-user-sql" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jla/base-user-sql.svg">
  </a>
  <a href="https://github.com/JuliusAgency/auth-strategies#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-strategies/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-strategies/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### Installation
```bash
  npm install --save @jla/base-user-sql
```

### Pre-conditions:
```
The package is dedicated to be used with the following @jla packages:
  - @jla/auth-strategies
  - @jla/base-user-mngr
  - @jla/auth-jwt or auth-session;  
```

### Usage  
```
  import { BaseUser, dBApi } from '@jla/base-user-sql';
  
  // setup strategy and auth manager with the BaseUser
  const baseUser = sqlRepository(BaseUser);

  const strategyOptions: StrategyOptions = {
    passport: passport,
    dBApi: dBApi(baseUser),
  };
  const strategy = initStrategies(strategyOptions);

  // setup Auth manager  
    const authMngrOPtions: AuthMngrOPtions = {  
    User: baseUser,  
    encode: encodeToken,  
    strategy: strategy,
    session: false,  
  };  
  const authRouter = setupAuthManager(authMngrOPtions);  

```
### Extend BaseUser (example)
```
import { BaseUser } from "@jla/base-user-sql";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseUser {
  @Column({ type: 'varchar', default: 'guest' })
  // eslint-disable-next-line indent
  role: string;
  @Column({ nullable: true })
  // eslint-disable-next-line indent
  phone: string;
};
```
